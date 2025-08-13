from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.database import get_db
from app.models.product import ProductSeries, Pixel, ProductParam, ComponentParam
from app.schemas.product import ProductSeries as ProductSeriesSchema, Pixel as PixelSchema, ProductParam as ProductParamSchema, ComponentParam as ComponentParamSchema
from app.core.auth import get_current_active_user

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/product-series", response_model=List[ProductSeriesSchema])
def get_product_series(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of all product series"""
    product_series = db.query(ProductSeries).filter(ProductSeries.is_active == True).all()
    return product_series

@router.get("/pixels/{series_id}", response_model=List[PixelSchema])
def get_pixels_by_series(
    series_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of pixels for a given product series"""
    pixels = db.query(Pixel).filter(
        Pixel.product_series_id == series_id,
        Pixel.is_active == True
    ).all()
    return pixels

@router.get("/product-params", response_model=List[ProductParamSchema])
def get_product_params(
    series_id: Optional[int] = Query(None, description="Filter by product series ID"),
    pixel_id: Optional[int] = Query(None, description="Filter by pixel ID"),
    is_indoor: Optional[bool] = Query(None, description="Filter by indoor/outdoor"),
    technology: Optional[str] = Query(None, description="Filter by technology"),
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of product parameters with optional filters"""
    query = db.query(ProductParam)
    
    if pixel_id:
        query = query.filter(ProductParam.pixel_id == pixel_id)
    elif series_id:
        query = query.join(Pixel).filter(Pixel.product_series_id == series_id)
    
    if is_indoor is not None:
        query = query.join(Pixel).filter(Pixel.is_indoor == is_indoor)
    
    if technology:
        query = query.join(Pixel).filter(Pixel.technology == technology)
    
    params = query.all()
    return params

@router.get("/component-params", response_model=List[ComponentParamSchema])
def get_component_params(
    series_id: Optional[int] = Query(None, description="Filter by product series ID"),
    pixel_id: Optional[int] = Query(None, description="Filter by pixel ID"),
    is_indoor: Optional[bool] = Query(None, description="Filter by indoor/outdoor"),
    technology: Optional[str] = Query(None, description="Filter by technology"),
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Get list of component parameters with optional filters"""
    query = db.query(ComponentParam)
    
    if pixel_id:
        query = query.filter(ComponentParam.pixel_id == pixel_id)
    elif series_id:
        query = query.join(Pixel).filter(Pixel.product_series_id == series_id)
    
    if is_indoor is not None:
        query = query.join(Pixel).filter(Pixel.is_indoor == is_indoor)
    
    if technology:
        query = query.join(Pixel).filter(Pixel.technology == technology)
    
    params = query.all()
    return params 