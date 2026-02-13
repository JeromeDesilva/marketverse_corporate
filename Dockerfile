# Use Node 20 LTS
FROM node:20.20.0-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Expose port for preview
EXPOSE 4028

# Run the app
CMD ["npx", "vite", "preview", "--port", "4028"]
