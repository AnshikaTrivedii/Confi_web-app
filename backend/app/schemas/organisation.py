from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class OrganisationBase(BaseModel):
    name: str
    address: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None

class OrganisationCreate(OrganisationBase):
    pass

class OrganisationUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None

class OrganisationInDB(OrganisationBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Organisation(OrganisationInDB):
    pass 