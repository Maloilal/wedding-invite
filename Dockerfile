# Build stage
FROM node:20 as builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage (static file server)
FROM nginx:alpine

# Copy build files to nginx public dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Nginx runs by default

