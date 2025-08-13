#!/bin/bash

# Confi LED Display API Startup Script

echo "🚀 Starting Confi LED Display API..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚙️ Creating .env file from template..."
    cp env.example .env
    echo "⚠️  Please edit .env file with your database credentials and secret key"
    echo "   Then run this script again."
    exit 1
fi

# Run database migrations
echo "🗄️ Running database migrations..."
alembic upgrade head

# Seed database (optional)
read -p "🌱 Do you want to seed the database with sample data? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌱 Seeding database..."
    python seed_database.py
fi

# Start the server
echo "🌐 Starting FastAPI server..."
echo "📖 API Documentation will be available at: http://localhost:8000/docs"
echo "🔗 Health check: http://localhost:8000/health"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 