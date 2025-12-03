#!/bin/bash

echo "🚀 Starting automatic deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build project
echo "🛠 Building project..."
npm run build

# Path to copy build files on Windows
WIN_PATH="/mnt/c/Users/saro/Desktop/marketverse_deploy"

# Make sure the folder exists
mkdir -p "$WIN_PATH"

# Copy the build output
echo "📂 Copying build files to Windows..."
if [ -d "build" ]; then
    cp -r build/* "$WIN_PATH"/
    echo "✅ Copy complete!"
else
    echo "❌ Build folder not found. Build may have failed."
    exit 1
fi

# Install serve globally if not installed
if ! command -v serve &> /dev/null
then
    echo "📦 Installing 'serve' globally..."
    npm install -g serve
fi

# Start static server in background
echo "🌐 Starting static server on port 4028..."
serve -s build -l 4028 &

# Wait a few seconds to make sure server is up
sleep 3

# Open in browser
cmd.exe /c start http://localhost:4028

echo "🎉 Deployment complete!"
