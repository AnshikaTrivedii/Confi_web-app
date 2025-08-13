from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.models.organisation import Organisation
from app.schemas.organisation import Organisation as OrganisationSchema, OrganisationCreate, OrganisationUpdate
from app.core.auth import get_current_active_user

router = APIRouter(prefix="/organisations", tags=["organisations"])

@router.put("/", response_model=OrganisationSchema)
def create_organisation(
    organisation: OrganisationCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Create a new organisation"""
    db_organisation = Organisation(**organisation.dict())
    db.add(db_organisation)
    db.commit()
    db.refresh(db_organisation)
    return db_organisation

@router.patch("/{org_id}", response_model=OrganisationSchema)
def update_organisation(
    org_id: int,
    organisation_update: OrganisationUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_active_user)
):
    """Update an organisation"""
    db_organisation = db.query(Organisation).filter(Organisation.id == org_id).first()
    if not db_organisation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Organisation not found"
        )
    
    update_data = organisation_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_organisation, field, value)
    
    db.commit()
    db.refresh(db_organisation)
    return db_organisation 