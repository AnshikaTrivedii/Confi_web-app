from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class QuoteBase(BaseModel):
    user_id: int
    quote_number: str
    title: Optional[str] = None
    description: Optional[str] = None
    status: str = "draft"
    total_amount: float = 0.0
    currency: str = "USD"

class QuoteCreate(QuoteBase):
    pass

class QuoteUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    total_amount: Optional[float] = None
    currency: Optional[str] = None

class QuoteInDB(QuoteBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Quote(QuoteInDB):
    pass

class QuoteLineBase(BaseModel):
    quote_id: int
    line_number: int
    product_type: str
    product_id: Optional[int] = None
    description: str
    quantity: int = 1
    unit_price: float
    total_price: float

class QuoteLineCreate(QuoteLineBase):
    pass

class QuoteLineUpdate(BaseModel):
    line_number: Optional[int] = None
    product_type: Optional[str] = None
    product_id: Optional[int] = None
    description: Optional[str] = None
    quantity: Optional[int] = None
    unit_price: Optional[float] = None
    total_price: Optional[float] = None

class QuoteLineInDB(QuoteLineBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class QuoteLine(QuoteLineInDB):
    pass

class QuotePriceBase(BaseModel):
    quote_id: int
    subtotal: float
    tax_amount: float = 0.0
    discount_amount: float = 0.0
    total_amount: float
    currency: str = "USD"

class QuotePriceCreate(QuotePriceBase):
    pass

class QuotePriceUpdate(BaseModel):
    subtotal: Optional[float] = None
    tax_amount: Optional[float] = None
    discount_amount: Optional[float] = None
    total_amount: Optional[float] = None
    currency: Optional[str] = None

class QuotePriceInDB(QuotePriceBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class QuotePrice(QuotePriceInDB):
    pass

class QuoteLinePriceBase(BaseModel):
    quote_price_id: int
    quote_line_id: int
    unit_price: float
    quantity: int
    total_price: float

class QuoteLinePriceCreate(QuoteLinePriceBase):
    pass

class QuoteLinePriceUpdate(BaseModel):
    unit_price: Optional[float] = None
    quantity: Optional[int] = None
    total_price: Optional[float] = None

class QuoteLinePriceInDB(QuoteLinePriceBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class QuoteLinePrice(QuoteLinePriceInDB):
    pass 