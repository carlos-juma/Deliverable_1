# Use an official node image as the base image
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the host machine to the container
COPY . .

# Build the app
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine
COPY --from=build /app/frontend/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
