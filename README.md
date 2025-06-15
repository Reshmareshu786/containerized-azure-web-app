## 🚀 Containerized Azure Web App
A simple website built with plain HTML and hosted on Azure using Docker and App Service.
This project demonstrates how to containerize and deploy a basic static web page using:

### ✅ Highlights
- Docker
- Azure Container Registry (ACR)
- Azure App Service (Linux container)
- Deployment Slots (for safe version swapping)

### 🛠 Tech Stack
- HTML (Single-page static site)
- Docker (NGINX base image)
- Azure Container Registry
- Azure App Service

### 🚀 Deployment Steps
1. Created a basic index.html with a heading and a button
2. Wrote a Dockerfile using nginx:alpine
3. Built the Docker image:
   ```bash
   docker build -t <acr-name>.azurecr.io/<container-name>:<tag> .
4. Logged into ACR
   ```bash
   docker login <acr-name>.azurecr.io
5. Tagged the image
   ```bash
   docker tag <local-image-name> <acr-name>.azurecr.io/<container-name>:<tag>
6. Pushed the image
   ```bash
   docker push <acr-name>.azurecr.io/<container-name>:<tag>
7. Updated Azure App Service → Container Settings → to use the new image tag
8. Used Deployment Slots to test and safely swap to production

### 🧪 Features
- ✅ Containerized with NGINX
- ✅ Button added in the latest version
- ✅ Supports versioned image tags for clean updates

### 🔍 Future Ideas
- Automate deployments via CI/CD with GitHub Actions
- Add HTTPS & custom domain support
- Add health checks or a basic logging endpoint
