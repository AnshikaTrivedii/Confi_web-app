#!/usr/bin/env python3
"""
Production startup script for Render deployment
"""
import os
import subprocess
import sys
from pathlib import Path

def run_command(command, description):
    """Run a command and handle errors"""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e.stderr}")
        sys.exit(1)

def main():
    print("🚀 Starting production deployment...")
    
    # Set environment
    os.environ.setdefault("ENVIRONMENT", "production")
    
    # Run database migrations
    run_command("alembic upgrade head", "Running database migrations")
    
    # Seed database if it's empty (optional)
    try:
        from app.db.database import SessionLocal
        from app.models import User
        
        db = SessionLocal()
        user_count = db.query(User).count()
        db.close()
        
        if user_count == 0:
            print("🌱 Database is empty, seeding with initial data...")
            run_command("python seed_database.py", "Seeding database")
        else:
            print("📊 Database already has data, skipping seeding")
    except Exception as e:
        print(f"⚠️ Could not check database status: {e}")
    
    # Start the application
    print("🚀 Starting FastAPI application...")
    os.system("uvicorn app.main:app --host 0.0.0.0 --port $PORT")

if __name__ == "__main__":
    main() 