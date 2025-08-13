# 🚀 Deployment Guide - Confi LED Display App

## 📋 Prerequisites
- GitHub account
- Render account (free tier available)

## 🔧 Backend Deployment (FastAPI on Render)

### Step 1: Push Code to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/confi-web-app.git
git push -u origin main
```

### Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Verify your email

### Step 3: Deploy Backend Service
1. **Click "New +" → "Web Service"**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name:** `confi-backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python start_production.py`
   - **Plan:** Free

### Step 4: Add Environment Variables
In your Render service dashboard, add these environment variables:

```env
DATABASE_URL=postgresql://username:password@host:port/database
SECRET_KEY=your-super-secret-key-here-make-it-long-and-secure-for-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7
ENVIRONMENT=production
ALLOWED_ORIGINS=["https://your-frontend-app.onrender.com","https://your-frontend-app.netlify.app"]
```

### Step 5: Create PostgreSQL Database
1. **Click "New +" → "PostgreSQL"**
2. **Configure:**
   - **Name:** `confi-database`
   - **Database:** `confi_db`
   - **User:** `confi_user`
   - **Plan:** Free
3. **Copy the DATABASE_URL** and update it in your backend service environment variables

## 🌐 Frontend Deployment (React on Render)

### Step 1: Configure Frontend for Production
Update the API base URL in your frontend:

```javascript
// In confi-web-app/src/services/api.js
const API_BASE_URL = 'https://your-backend-app.onrender.com/api/v1';
```

### Step 2: Deploy Frontend Service
1. **Click "New +" → "Static Site"**
2. **Connect your GitHub repository**
3. **Configure:**
   - **Name:** `confi-frontend`
   - **Build Command:** `cd confi-web-app && npm install && npm run build`
   - **Publish Directory:** `confi-web-app/build`
   - **Plan:** Free

## 🔗 Connect Frontend and Backend

### Update CORS Settings
In your backend environment variables, update `ALLOWED_ORIGINS` with your frontend URL:

```env
ALLOWED_ORIGINS=["https://your-frontend-app.onrender.com"]
```

### Update Frontend API URL
In your frontend code, update the API base URL to point to your deployed backend.

## 🧪 Test Your Deployment

1. **Backend API:** Visit `https://your-backend-app.onrender.com/docs`
2. **Frontend:** Visit `https://your-frontend-app.onrender.com`
3. **Test Login:** Use the seeded user credentials

## 📊 Monitor Your Application

- **Logs:** Check Render dashboard for application logs
- **Health:** Monitor your service health in Render dashboard
- **Database:** Check PostgreSQL connection and data

## 🔧 Troubleshooting

### Common Issues:
1. **Build Failures:** Check build logs in Render dashboard
2. **Database Connection:** Verify DATABASE_URL format
3. **CORS Errors:** Update ALLOWED_ORIGINS with correct frontend URL
4. **Environment Variables:** Ensure all required variables are set

### Debug Commands:
```bash
# Check backend logs
# View in Render dashboard

# Test API locally
curl https://your-backend-app.onrender.com/health

# Test database connection
# Check in Render PostgreSQL dashboard
```

## 🎉 Success!
Your full-stack application is now deployed and accessible worldwide!

**Backend URL:** `https://your-backend-app.onrender.com`
**Frontend URL:** `https://your-frontend-app.onrender.com`
**API Docs:** `https://your-backend-app.onrender.com/docs` 