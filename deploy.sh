#!/bin/bash

echo "🚀 Starting automatic deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build project for production
echo "🛠 Building project..."
npm run build || { echo "❌ Build failed!"; exit 1; }

# Deployment folder inside WSL
DEPLOY_PATH="$HOME/marketverse_deploy"

# Create folder if not exists
mkdir -p "$DEPLOY_PATH"

# Copy build output from Vite's 'build' folder
echo "�� Copying build files to WSL deploy folder..."
cp -r build/* "$DEPLOY_PATH"/ || { echo "❌ Copy failed!"; exit 1; }

echo "✅ Files copied to: $DEPLOY_PATH"

# Install 'serve' if not installed
if ! command -v serve &> /dev/null
then
    echo "📦 Installing 'serve' globally..."
    npm install -g serve
fi

# Kill previous server if running
pkill -f "serve -s" >/dev/null 2>&1

# Start static server
echo "🌐 Starting static server on port 4028..."
serve -s "$DEPLOY_PATH" -l 4028 &

sleep 2

# Open in browser
cmd.exe /c start http://localhost:4028

echo "🎉 Deployment complete! Visit: http://localhost:4028"
