from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ProductSeriesBase(BaseModel):
    name: str
    description: Optional[str] = None

class ProductSeriesCreate(ProductSeriesBase):
    pass

class ProductSeriesUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

class ProductSeriesInDB(ProductSeriesBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ProductSeries(ProductSeriesInDB):
    pass

class PixelBase(BaseModel):
    product_series_id: int
    pixel_pitch: float
    resolution_width: Optional[int] = None
    resolution_height: Optional[int] = None
    brightness: Optional[int] = None
    power_consumption: Optional[float] = None
    is_indoor: bool = True
    technology: Optional[str] = None

class PixelCreate(PixelBase):
    pass

class PixelUpdate(BaseModel):
    product_series_id: Optional[int] = None
    pixel_pitch: Optional[float] = None
    resolution_width: Optional[int] = None
    resolution_height: Optional[int] = None
    brightness: Optional[int] = None
    power_consumption: Optional[float] = None
    is_indoor: Optional[bool] = None
    technology: Optional[str] = None

class PixelInDB(PixelBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Pixel(PixelInDB):
    pass

class ProductParamBase(BaseModel):
    pixel_id: int
    param_name: str
    param_value: str
    param_unit: Optional[str] = None

class ProductParamCreate(ProductParamBase):
    pass

class ProductParamInDB(ProductParamBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class ProductParam(ProductParamInDB):
    pass

class ComponentParamBase(BaseModel):
    pixel_id: int
    component_name: str
    param_name: str
    param_value: str
    param_unit: Optional[str] = None

class ComponentParamCreate(ComponentParamBase):
    pass

class ComponentParamInDB(ComponentParamBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class ComponentParam(ComponentParamInDB):
    pass 