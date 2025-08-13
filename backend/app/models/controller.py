from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class Controller(Base):
    __tablename__ = "controllers"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    model = Column(String, nullable=False)
    description = Column(String)
    manufacturer = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    prices = relationship("ControllerPrice", back_populates="controller")

class ControllerPrice(Base):
    __tablename__ = "controller_prices"
    
    id = Column(Integer, primary_key=True, index=True)
    controller_id = Column(Integer, ForeignKey("controllers.id"), nullable=False)
    price = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    controller = relationship("Controller", back_populates="prices") 