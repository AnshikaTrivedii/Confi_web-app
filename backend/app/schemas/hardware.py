from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class HardwarePriceBase(BaseModel):
    hardware_type: str
    model: str
    description: Optional[str] = None
    price: float
    currency: str = "USD"

class HardwarePriceCreate(HardwarePriceBase):
    pass

class HardwarePriceUpdate(BaseModel):
    hardware_type: Optional[str] = None
    model: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    currency: Optional[str] = None

class HardwarePriceInDB(HardwarePriceBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class HardwarePrice(HardwarePriceInDB):
    pass 