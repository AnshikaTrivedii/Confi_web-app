#!/bin/bash

echo "🔗 UPDATE FRONTEND API URL"
echo "=========================="
echo ""

echo "Enter your backend URL from Render (e.g., https://confi-backend.onrender.com):"
read -p "Backend URL: " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Remove trailing slash if present
BACKEND_URL=${BACKEND_URL%/}

# Update the API URL in the frontend
sed -i.bak "s|const API_BASE_URL = 'http://localhost:8000/api/v1';|const API_BASE_URL = '${BACKEND_URL}/api/v1';|g" confi-web-app/src/services/api.js

echo "✅ API URL updated successfully!"
echo "   New URL: ${BACKEND_URL}/api/v1"
echo ""
echo "🔄 Committing changes..."
git add confi-web-app/src/services/api.js
git commit -m "Update API URL for production deployment"
git push origin main

echo "✅ Changes pushed to GitHub!"
echo "   Your frontend will automatically redeploy on Render."
echo "" 