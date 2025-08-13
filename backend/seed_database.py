#!/usr/bin/env python3
"""
Database seeding script for Confi LED Display API
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.db.database import SessionLocal
from app.utils.seed_data import seed_all_data

def main():
    """Main function to seed the database"""
    db = SessionLocal()
    try:
        seed_all_data(db)
        print("✅ Database seeded successfully!")
    except Exception as e:
        print(f"❌ Error seeding database: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    main() 