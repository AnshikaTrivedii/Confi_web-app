from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.models.controller import Controller, ControllerPrice
from app.schemas.controller import Controller as ControllerSchema, ControllerPrice as ControllerPriceSchema
from app.core.auth import get_current_active_user

router = APIRouter(prefix="/controllers", tags=["controllers"])

@router.get("/", response_model=List[ControllerSchema])
def get_controllers(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of all controllers"""
    controllers = db.query(Controller).filter(Controller.is_active == True).all()
    return controllers

@router.get("/price", response_model=List[ControllerPriceSchema])
def get_controller_prices(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of all controller prices"""
    prices = db.query(ControllerPrice).filter(ControllerPrice.is_active == True).all()
    return prices 