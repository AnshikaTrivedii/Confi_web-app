from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.models.quote import Quote, QuoteLine, QuotePrice, QuoteLinePrice
from app.schemas.quote import (
    Quote as QuoteSchema, QuoteCreate, QuoteUpdate,
    QuoteLine as QuoteLineSchema, QuoteLineCreate, QuoteLineUpdate,
    QuotePrice as QuotePriceSchema, QuotePriceCreate, QuotePriceUpdate,
    QuoteLinePrice as QuoteLinePriceSchema, QuoteLinePriceCreate, QuoteLinePriceUpdate
)
from app.core.auth import get_current_active_user
from app.models.user import User
import uuid

router = APIRouter(prefix="/quotes", tags=["quotes"])

@router.get("/{user_id}", response_model=List[QuoteSchema])
def get_user_quotes(
    user_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Get all quotes for a specific user"""
    # Users can only see their own quotes unless they're superuser
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    quotes = db.query(Quote).filter(
        Quote.user_id == user_id,
        Quote.is_active == True
    ).all()
    return quotes

@router.put("/{user_id}", response_model=QuoteSchema)
def create_quote(
    user_id: int,
    quote_data: QuoteCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Create a new quote for a user"""
    # Users can only create quotes for themselves unless they're superuser
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    # Generate unique quote number
    quote_number = f"Q-{uuid.uuid4().hex[:8].upper()}"
    
    db_quote = Quote(
        user_id=user_id,
        quote_number=quote_number,
        title=quote_data.title,
        description=quote_data.description,
        status=quote_data.status,
        total_amount=quote_data.total_amount,
        currency=quote_data.currency
    )
    db.add(db_quote)
    db.commit()
    db.refresh(db_quote)
    return db_quote

@router.patch("/{user_id}", response_model=QuoteSchema)
def update_quote(
    user_id: int,
    quote_id: int,
    quote_update: QuoteUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Update a quote"""
    # Users can only update their own quotes unless they're superuser
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_quote = db.query(Quote).filter(
        Quote.id == quote_id,
        Quote.user_id == user_id
    ).first()
    
    if not db_quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Quote not found"
        )
    
    update_data = quote_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_quote, field, value)
    
    db.commit()
    db.refresh(db_quote)
    return db_quote

@router.get("/price/{quote_id}", response_model=List[QuotePriceSchema])
def get_quote_prices(
    quote_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Get prices for a specific quote"""
    # Check if user has access to this quote
    quote = db.query(Quote).filter(Quote.id == quote_id).first()
    if not quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Quote not found"
        )
    
    if quote.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    prices = db.query(QuotePrice).filter(QuotePrice.quote_id == quote_id).all()
    return prices

@router.put("/price/{quote_id}", response_model=QuotePriceSchema)
def create_quote_price(
    quote_id: int,
    price_data: QuotePriceCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Create a new quote price"""
    # Check if user has access to this quote
    quote = db.query(Quote).filter(Quote.id == quote_id).first()
    if not quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Quote not found"
        )
    
    if quote.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_price = QuotePrice(**price_data.dict())
    db.add(db_price)
    db.commit()
    db.refresh(db_price)
    return db_price

@router.patch("/price/{quote_id}", response_model=QuotePriceSchema)
def update_quote_price(
    quote_id: int,
    price_id: int,
    price_update: QuotePriceUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    """Update a quote price"""
    # Check if user has access to this quote
    quote = db.query(Quote).filter(Quote.id == quote_id).first()
    if not quote:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Quote not found"
        )
    
    if quote.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_price = db.query(QuotePrice).filter(
        QuotePrice.id == price_id,
        QuotePrice.quote_id == quote_id
    ).first()
    
    if not db_price:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Quote price not found"
        )
    
    update_data = price_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_price, field, value)
    
    db.commit()
    db.refresh(db_price)
    return db_price 