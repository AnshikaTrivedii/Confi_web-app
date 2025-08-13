from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.models.hardware import HardwarePrice
from app.schemas.hardware import HardwarePrice as HardwarePriceSchema
from app.core.auth import get_current_active_user

router = APIRouter(prefix="/hardware", tags=["hardware"])

@router.get("/price", response_model=List[HardwarePriceSchema])
def get_hardware_prices(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of all hardware prices"""
    prices = db.query(HardwarePrice).filter(HardwarePrice.is_active == True).all()
    return prices 