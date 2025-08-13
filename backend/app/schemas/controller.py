from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ControllerBase(BaseModel):
    name: str
    model: str
    description: Optional[str] = None
    manufacturer: Optional[str] = None

class ControllerCreate(ControllerBase):
    pass

class ControllerUpdate(BaseModel):
    name: Optional[str] = None
    model: Optional[str] = None
    description: Optional[str] = None
    manufacturer: Optional[str] = None

class ControllerInDB(ControllerBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Controller(ControllerInDB):
    pass

class ControllerPriceBase(BaseModel):
    controller_id: int
    price: float
    currency: str = "USD"

class ControllerPriceCreate(ControllerPriceBase):
    pass

class ControllerPriceUpdate(BaseModel):
    controller_id: Optional[int] = None
    price: Optional[float] = None
    currency: Optional[str] = None

class ControllerPriceInDB(ControllerPriceBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ControllerPrice(ControllerPriceInDB):
    pass 