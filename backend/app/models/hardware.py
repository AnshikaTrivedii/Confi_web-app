from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class HardwarePrice(Base):
    __tablename__ = "hardware_prices"
    
    id = Column(Integer, primary_key=True, index=True)
    hardware_type = Column(String, nullable=False)  # Cabinet, Power Supply, etc.
    model = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now()) 