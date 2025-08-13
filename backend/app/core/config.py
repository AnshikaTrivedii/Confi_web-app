from pydantic_settings import BaseSettings
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    # Database
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./confi.db")
    
    # Handle Render's DATABASE_URL format (convert to SQLAlchemy format)
    @property
    def sqlalchemy_database_url(self) -> str:
        if self.database_url.startswith("postgres://"):
            return self.database_url.replace("postgres://", "postgresql://", 1)
        return self.database_url
    
    # JWT
    secret_key: str = os.getenv("SECRET_KEY", "your-secret-key-here-make-it-long-and-secure")
    algorithm: str = os.getenv("ALGORITHM", "HS256")
    access_token_expire_minutes: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))
    refresh_token_expire_days: int = int(os.getenv("REFRESH_TOKEN_EXPIRE_DAYS", "7"))
    
    # CORS
    allowed_origins: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "https://your-frontend-app.onrender.com",  # Update this with your frontend URL
        "https://your-frontend-app.netlify.app",   # Update this with your frontend URL
    ]
    
    # Environment
    environment: str = os.getenv("ENVIRONMENT", "development")
    
    class Config:
        env_file = ".env"

settings = Settings() 