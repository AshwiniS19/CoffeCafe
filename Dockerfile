# Use official lightweight Nginx image on Alpine Linux
FROM nginx:alpine

# Set working directory to Nginx default html directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy project files into the Nginx web root
COPY index.html ./
COPY style.css ./
COPY app.js ./
COPY assets/ ./assets/

# Expose HTTP port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
