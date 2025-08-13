from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.services.user_service import UserService
from app.core.security import create_access_token, create_refresh_token
from app.schemas.user import UserCreate, User, Token, UserLogin, UserUpdate
from app.core.auth import get_current_active_user
from datetime import timedelta

router = APIRouter(prefix="/users", tags=["authentication"])

@router.post("/register", response_model=User)
def register(user: UserCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    db_user = UserService.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Create new user
    return UserService.create_user(db=db, user=user)

@router.post("/login", response_model=Token)
def login(user_credentials: UserLogin, db: Session = Depends(get_db)):
    user = UserService.authenticate_user(db, user_credentials.email, user_credentials.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create tokens
    access_token = create_access_token(data={"sub": user.email})
    refresh_token = create_refresh_token(data={"sub": user.email})
    
    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

@router.post("/logout")
def logout(current_user: User = Depends(get_current_active_user)):
    # In a real application, you might want to blacklist the token
    # For now, we'll just return a success message
    return {"message": "Successfully logged out"}

@router.get("/me", response_model=User)
def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@router.patch("/{user_id}", response_model=User)
def update_user(
    user_id: int,
    user_update: UserUpdate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Users can only update their own profile unless they're superuser
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    updated_user = UserService.update_user(db, user_id, user_update)
    if not updated_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return updated_user 