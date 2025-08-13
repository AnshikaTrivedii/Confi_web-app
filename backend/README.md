# Confi LED Display API

A comprehensive FastAPI backend for managing LED display products, quotes, and user authentication.

## Features

- 🔐 **JWT Authentication** with access and refresh tokens
- 🗄️ **PostgreSQL Database** with SQLAlchemy ORM
- 📊 **Product Management** - Series, Pixels, Parameters
- 🎛️ **Controller Management** - Controllers and Pricing
- 🔧 **Hardware Management** - Hardware components and pricing
- 💰 **Quote System** - Quote creation, management, and pricing
- 👥 **User Management** - User registration, authentication, and authorization
- 🏢 **Organisation Management** - Multi-tenant organisation support
- 🔄 **Database Migrations** - Alembic for schema management
- 🌐 **CORS Support** - Ready for React frontend integration
- 🚀 **Render Ready** - Optimized for cloud deployment

## Tech Stack

- **FastAPI** - Modern, fast web framework
- **PostgreSQL** - Robust relational database
- **SQLAlchemy** - Python SQL toolkit and ORM
- **Alembic** - Database migration tool
- **Pydantic** - Data validation using Python type annotations
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Uvicorn** - ASGI server

## Project Structure

```
backend/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth.py         # Authentication endpoints
│   │   ├── token.py        # Token management
│   │   ├── products.py     # Product endpoints
│   │   ├── controllers.py  # Controller endpoints
│   │   ├── hardware.py     # Hardware endpoints
│   │   ├── organisations.py # Organisation endpoints
│   │   ├── quotes.py       # Quote endpoints
│   │   └── __init__.py     # API router
│   ├── core/               # Core configuration
│   │   ├── config.py       # Settings management
│   │   ├── security.py     # Security utilities
│   │   └── auth.py         # Authentication dependencies
│   ├── db/                 # Database configuration
│   │   └── database.py     # Database setup
│   ├── models/             # SQLAlchemy models
│   │   ├── user.py         # User model
│   │   ├── organisation.py # Organisation model
│   │   ├── product.py      # Product models
│   │   ├── controller.py   # Controller models
│   │   ├── hardware.py     # Hardware model
│   │   ├── quote.py        # Quote models
│   │   └── __init__.py     # Model imports
│   ├── schemas/            # Pydantic schemas
│   │   ├── user.py         # User schemas
│   │   ├── organisation.py # Organisation schemas
│   │   ├── product.py      # Product schemas
│   │   ├── controller.py   # Controller schemas
│   │   ├── hardware.py     # Hardware schemas
│   │   ├── quote.py        # Quote schemas
│   │   └── __init__.py     # Schema imports
│   ├── services/           # Business logic
│   │   └── user_service.py # User service
│   ├── utils/              # Utilities
│   │   └── seed_data.py    # Database seeding
│   └── main.py             # FastAPI application
├── alembic/                # Database migrations
│   ├── env.py              # Alembic environment
│   └── script.py.mako      # Migration template
├── requirements.txt        # Python dependencies
├── alembic.ini            # Alembic configuration
├── env.example            # Environment variables template
├── seed_database.py       # Database seeding script
├── Procfile               # Render deployment
└── README.md              # This file
```

## API Endpoints

### Authentication
- `POST /api/v1/users/register` - Register new user
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/logout` - User logout
- `GET /api/v1/users/me` - Get current user
- `PATCH /api/v1/users/{id}` - Update user

### Tokens
- `GET /api/v1/token/` - Get access token
- `GET /api/v1/token/refresh` - Refresh token

### Products
- `GET /api/v1/products/product-series` - List product series
- `GET /api/v1/products/pixels/{series_id}` - List pixels for series
- `GET /api/v1/products/product-params` - List product parameters
- `GET /api/v1/products/component-params` - List component parameters

### Controllers
- `GET /api/v1/controllers/` - List controllers
- `GET /api/v1/controllers/price` - List controller prices

### Hardware
- `GET /api/v1/hardware/price` - List hardware prices

### Organisations
- `PUT /api/v1/organisations/` - Create organisation
- `PATCH /api/v1/organisations/{id}` - Update organisation

### Quotes
- `GET /api/v1/quotes/{user_id}` - List user quotes
- `PUT /api/v1/quotes/{user_id}` - Create quote
- `PATCH /api/v1/quotes/{user_id}` - Update quote
- `GET /api/v1/quotes/price/{quote_id}` - List quote prices
- `PUT /api/v1/quotes/price/{quote_id}` - Create quote price
- `PATCH /api/v1/quotes/price/{quote_id}` - Update quote price

## Local Development Setup

### Prerequisites

- Python 3.8+
- PostgreSQL
- pip

### 1. Clone and Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Database Setup

```bash
# Create PostgreSQL database
createdb confi_db

# Set up environment variables
cp env.example .env
# Edit .env with your database credentials and secret key
```

### 3. Environment Variables

Create a `.env` file with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/confi_db

# JWT Configuration
SECRET_KEY=your-secret-key-here-make-it-long-and-secure
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# CORS Configuration
ALLOWED_ORIGINS=["http://localhost:3000", "http://localhost:5173"]

# Environment
ENVIRONMENT=development
```

### 4. Database Migrations

```bash
# Initialize Alembic (first time only)
alembic init alembic

# Create initial migration
alembic revision --autogenerate -m "Initial migration"

# Run migrations
alembic upgrade head
```

### 5. Seed Database

```bash
# Seed the database with sample data
python seed_database.py
```

### 6. Run the Application

```bash
# Development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Production server
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:

- **Interactive API Docs (Swagger UI)**: `http://localhost:8000/docs`
- **Alternative API Docs (ReDoc)**: `http://localhost:8000/redoc`
- **OpenAPI JSON**: `http://localhost:8000/openapi.json`

## Testing the API

### 1. Register a User

```bash
curl -X POST "http://localhost:8000/api/v1/users/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "username": "testuser",
    "full_name": "Test User",
    "password": "password123"
  }'
```

### 2. Login

```bash
curl -X POST "http://localhost:8000/api/v1/users/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 3. Use the API

```bash
# Get product series (requires authentication)
curl -X GET "http://localhost:8000/api/v1/products/product-series" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Deployment to Render

### 1. Prepare for Deployment

1. Ensure all files are committed to your repository
2. Make sure `requirements.txt` and `Procfile` are in the root of your backend directory

### 2. Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `confi-api` (or your preferred name)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend` (if your backend is in a subdirectory)

### 3. Environment Variables

Add these environment variables in Render:

```env
DATABASE_URL=postgresql://username:password@host:port/database
SECRET_KEY=your-production-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7
ALLOWED_ORIGINS=["https://your-frontend-domain.com"]
ENVIRONMENT=production
```

### 4. Database Setup

1. Create a PostgreSQL database in Render
2. Update the `DATABASE_URL` environment variable
3. Run migrations:
   ```bash
   # Connect to your Render instance and run:
   alembic upgrade head
   python seed_database.py
   ```

## Default Users

After seeding the database, you can use these default accounts:

### Admin User
- **Email**: `admin@techcorp.com`
- **Password**: `admin123`
- **Role**: Superuser

### Regular Users
- **Email**: `john.doe@techcorp.com`
- **Password**: `password123`
- **Role**: Regular user

- **Email**: `jane.smith@digitaldisplay.com`
- **Password**: `password123`
- **Role**: Regular user

## Database Schema

The application includes the following main entities:

- **Users** - User accounts with authentication
- **Organisations** - Multi-tenant organisation support
- **ProductSeries** - Product line categories
- **Pixels** - Individual LED display products
- **ProductParam** - Product specifications
- **ComponentParam** - Component specifications
- **Controllers** - Display controllers
- **ControllerPrice** - Controller pricing
- **HardwarePrice** - Hardware component pricing
- **Quotes** - Customer quotes
- **QuoteLine** - Individual quote items
- **QuotePrice** - Quote pricing information
- **QuoteLinePrice** - Individual quote line pricing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team. 