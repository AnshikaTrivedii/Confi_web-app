from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class ProductSeries(Base):
    __tablename__ = "product_series"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    pixels = relationship("Pixel", back_populates="product_series")

class Pixel(Base):
    __tablename__ = "pixels"
    
    id = Column(Integer, primary_key=True, index=True)
    product_series_id = Column(Integer, ForeignKey("product_series.id"), nullable=False)
    pixel_pitch = Column(Float, nullable=False)  # in mm
    resolution_width = Column(Integer)
    resolution_height = Column(Integer)
    brightness = Column(Integer)  # cd/m²
    power_consumption = Column(Float)  # watts
    is_indoor = Column(Boolean, default=True)
    technology = Column(String)  # COB, SMD, etc.
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    product_series = relationship("ProductSeries", back_populates="pixels")
    product_params = relationship("ProductParam", back_populates="pixel")
    component_params = relationship("ComponentParam", back_populates="pixel")

class ProductParam(Base):
    __tablename__ = "product_params"
    
    id = Column(Integer, primary_key=True, index=True)
    pixel_id = Column(Integer, ForeignKey("pixels.id"), nullable=False)
    param_name = Column(String, nullable=False)
    param_value = Column(String, nullable=False)
    param_unit = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    pixel = relationship("Pixel", back_populates="product_params")

class ComponentParam(Base):
    __tablename__ = "component_params"
    
    id = Column(Integer, primary_key=True, index=True)
    pixel_id = Column(Integer, ForeignKey("pixels.id"), nullable=False)
    component_name = Column(String, nullable=False)
    param_name = Column(String, nullable=False)
    param_value = Column(String, nullable=False)
    param_unit = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    pixel = relationship("Pixel", back_populates="component_params") 