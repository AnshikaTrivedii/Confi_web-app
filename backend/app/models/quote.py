from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class Quote(Base):
    __tablename__ = "quotes"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    quote_number = Column(String, unique=True, nullable=False)
    title = Column(String)
    description = Column(Text)
    status = Column(String, default="draft")  # draft, submitted, approved, rejected
    total_amount = Column(Float, default=0.0)
    currency = Column(String, default="USD")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    user = relationship("User", back_populates="quotes")
    quote_lines = relationship("QuoteLine", back_populates="quote")
    quote_prices = relationship("QuotePrice", back_populates="quote")

class QuoteLine(Base):
    __tablename__ = "quote_lines"
    
    id = Column(Integer, primary_key=True, index=True)
    quote_id = Column(Integer, ForeignKey("quotes.id"), nullable=False)
    line_number = Column(Integer, nullable=False)
    product_type = Column(String, nullable=False)  # pixel, controller, hardware
    product_id = Column(Integer)  # ID of the specific product
    description = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    unit_price = Column(Float, nullable=False)
    total_price = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    quote = relationship("Quote", back_populates="quote_lines")
    quote_line_prices = relationship("QuoteLinePrice", back_populates="quote_line")

class QuotePrice(Base):
    __tablename__ = "quote_prices"
    
    id = Column(Integer, primary_key=True, index=True)
    quote_id = Column(Integer, ForeignKey("quotes.id"), nullable=False)
    subtotal = Column(Float, nullable=False)
    tax_amount = Column(Float, default=0.0)
    discount_amount = Column(Float, default=0.0)
    total_amount = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    quote = relationship("Quote", back_populates="quote_prices")
    quote_line_prices = relationship("QuoteLinePrice", back_populates="quote_price")

class QuoteLinePrice(Base):
    __tablename__ = "quote_line_prices"
    
    id = Column(Integer, primary_key=True, index=True)
    quote_price_id = Column(Integer, ForeignKey("quote_prices.id"), nullable=False)
    quote_line_id = Column(Integer, ForeignKey("quote_lines.id"), nullable=False)
    unit_price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)
    total_price = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    quote_price = relationship("QuotePrice", back_populates="quote_line_prices")
    quote_line = relationship("QuoteLine", back_populates="quote_line_prices") 