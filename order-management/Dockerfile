# Dockerfile for order management microservice
# Specify dependencies, build steps, etc.
# Use a base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to work directory
COPY . .

# Expose port if needed
# EXPOSE 3000

# Command to run the application
CMD ["node", "src/app.js"]
