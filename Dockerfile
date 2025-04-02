# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Expose the app port
EXPOSE 3040

# Run the app
CMD ["node", "index.js"]

