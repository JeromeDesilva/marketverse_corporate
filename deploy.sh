#!/bin/bash

echo " Starting automatic deployment..."

npm install

echo " Building project..."
npm run build

WIN_PATH="/mnt/c/Users/saro/Desktop/marketverse_deploy"

mkdir -p "$WIN_PATH"

echo "Copying build files to Windows..."
cp -r dist/* "$WIN_PATH"/

echo " Opening browser..."
cmd.exe /c start http://localhost

echo " Deployment complete!"

