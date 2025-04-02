## SIT737 – Task 5.2D

## Title:  Dockerization- Publishing the microservice into the cloud 

## Student: Preeth Ramadoss

## Unit: SIT737 – Cloud-Native Application Development

## Trimester: T1 2025

## Objective

This task demonstrates the process of publishing a containerised Node.js microservice (LOOPII app) to a private container registry on Google Cloud (Artifact Registry) and verifying that it runs from the published image.

**Technology Stack**

**Component	Description**

--> Node.js	Runtime for backend Express app

--> Express.js	Web server for rendering HTML

--> Docker	Containerization of the app

--> Artifact Registry	Secure image storage on GCP

--> Google Cloud SDK	CLI tool for GCP interaction

**Step-by-Step Instructions**

**Step 1: Create a Private Container Registry on Google Cloud**

Go to: https://console.cloud.google.com/artifacts

Click “Create Repository”

Fill out the form:

Name: microservices or your choice

Format: Docker

Location Type: Region

Location: australia-southeast2

Mode: Standard

Click Create

Your registry URL becomes: australia-southeast2-docker.pkg.dev/project_id/microservices

**Step 2: Authenticate Docker with the Registry**

Instead of using docker login, Google Cloud uses its CLI to link Docker with GCP:

gcloud auth login

gcloud config set project project_id

gcloud auth configure-docker australia-southeast2-docker.pkg.dev

--> This allows Docker to push images securely to your registry using your GCP credentials.

**Step 3: Tag the Docker Image**

Tag your local Docker image to match the private registry's format:

docker tag loopii-backend-loopii australia-southeast2-docker.pkg.dev/product_id/loopii-backend-loopii:latest

--> This prepares your image for cloud upload.

**Step 4: Push the Image to the Registry**

Now publish your Docker image to Google Cloud:

docker push australia-southeast2-docker.pkg.dev/project_id/microservices/loopii-backend-loopii:latest

--> Once successful, your image will be hosted securely in Artifact Registry.

**Step 5: Run the Image from the Cloud Registry**

To verify deployment, pull and run the image from Google Cloud:

docker run -p 3040:3040 australia-southeast2-docker.pkg.dev/project_id/microservices/loopii-backend-loopii:latest

--> Open your browser: http://localhost:3040 

--> You should see your LOOPII welcome page with:

Background image

“Welcome to LOOPII World”

doll GIF

Summary of Docker Commands Used

# Authenticate

gcloud auth login

gcloud config set project project_id

gcloud auth configure-docker australia-southeast2-docker.pkg.dev

# Tag and push

docker tag loopii-backend-loopii australia-southeast2-docker.pkg.dev/project_id/microservices/loopii-backend-loopii:latest

docker push australia-southeast2-docker.pkg.dev/project_id/microservices/loopii-backend-loopii:latest

# Run from registry

docker run -p 3040:3040 australia-southeast2-docker.pkg.dev/project_id/microservices/loopii-backend-loopii:latest

## GitHub Repo Structure

sit737-2025-prac5d/
  
  Dockerfile
  
  index.js
  
  package.json
  
  public/
  
  background.jpg

    doll.gif 
  
  README.md
