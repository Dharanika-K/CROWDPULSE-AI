# CrowdPulse AI

AI-Based Civic Issue Monitoring System

## Project Overview

CrowdPulse AI is a full-stack web application designed to collect and analyze civic issues reported by citizens. The system uses Artificial Intelligence (Sentiment Analysis) to classify public complaints as Positive, Negative, or Neutral.

This project demonstrates the integration of:

- Frontend (React.js)
- Backend (FastAPI)
- AI Sentiment Analysis using TextBlob
- REST API Communication
- Containerization using Docker
- CI/CD Pipelines using GitHub Actions and Jenkins
- Cloud Deployment on AWS EC2

## Objective

To build an intelligent civic issue reporting system that allows citizens to submit public complaints, performs real-time sentiment analysis, displays results dynamically, and demonstrates full-stack development integrated with DevOps practices.

## User Stories

- As a citizen, I want to submit a civic issue report with my location and description so that the authorities are aware of the problem.
- As a system administrator, I want the system to automatically analyze the sentiment of the submitted report so that issues can be prioritized based on severity.
- As a user, I want to see a confirmation and the analyzed sentiment of my report so that I know my complaint was successfully processed.
- As a developer, I want the frontend and backend to communicate via REST APIs so that the application is modular and scalable.

## System Architecture

User -> React Frontend -> FastAPI Backend -> TextBlob Sentiment Model -> MongoDB -> Response -> UI Display

## Technologies Used

Frontend:
- React.js
- Axios
- Recharts for data visualization
- HTML and CSS

Backend:
- FastAPI
- Uvicorn
- Python
- PyMongo

AI Component:
- TextBlob for Sentiment Analysis and Text Classification

Database:
- MongoDB

DevOps and Cloud:
- Docker and Docker Compose
- GitHub Actions and Jenkins for CI/CD
- AWS EC2 for cloud deployment

## Project Structure

    CROWDPULSE-AI/
    |
    |-- .github/workflows/    GitHub Actions CI/CD pipeline
    |-- backend/              FastAPI backend source code
    |-- frontend/             React frontend source code
    |-- docker-compose.yml    Docker Compose configuration
    |-- Dockerfile            Multi-stage Docker build file
    |-- Jenkinsfile           Jenkins CI/CD pipeline configuration
    |-- README.md             Project documentation

## Prerequisites

Before running the project, ensure the following are installed:

For Docker method (Recommended):
- Docker Desktop
- Git

For manual method:
- Node.js v18 or higher
- Python 3.9 or higher
- MongoDB running locally on port 27017

---

## How to Run the Project

### Method 1: Using Docker (Recommended)

Docker Compose will automatically set up the frontend, backend, and MongoDB database together.

Step 1: Clone the repository.

    git clone https://github.com/Dharanika-K/CROWDPULSE-AI.git
    cd CROWDPULSE-AI

Step 2: Build and start all containers.

    docker-compose up --build -d

Step 3: Access the application.

    Web Interface:           http://localhost:8000
    API Documentation:       http://localhost:8000/docs

Step 4: To stop the application.

    docker-compose down

### Method 2: Manual Setup

#### Backend Setup (FastAPI)

Step 1: Navigate to the backend folder.

    cd backend

Step 2: Create and activate a virtual environment.

    python -m venv venv

    On Windows:
    venv\Scripts\activate

    On Mac or Linux:
    source venv/bin/activate

Step 3: Install Python dependencies.

    pip install -r requirements.txt
    python -m textblob.download_corpora

Step 4: Start the backend server.

    uvicorn main:app --reload

The backend API will be available at http://127.0.0.1:8000.
The interactive API documentation will be available at http://127.0.0.1:8000/docs.

#### Frontend Setup (React)

Step 1: Open a new terminal and navigate to the frontend folder.

    cd frontend

Step 2: Install Node.js dependencies.

    npm install

Step 3: Start the React development server.

    npm start

The frontend will be available at http://localhost:3000.

---

## CI/CD Pipeline

This project includes automated CI/CD pipelines for both GitHub Actions and Jenkins.

### Pipeline Stages

1. Checkout Repository: Fetches the latest code from the main branch.
2. Build Application: Installs dependencies and builds the React frontend and FastAPI backend.
3. Create and Push Docker Image: Builds a multi-stage Docker image and pushes it to Docker Hub.
4. Deploy to EC2: Connects to an AWS EC2 instance via SSH, pulls the latest Docker image, and runs the container.

### GitHub Actions

The workflow is defined in .github/workflows/deploy.yml and is triggered automatically on every push or pull request to the main branch. The following secrets must be configured in the GitHub repository settings:

- DOCKER_USERNAME: Your Docker Hub username.
- DOCKER_PASSWORD: Your Docker Hub access token.
- EC2_HOST: The public IPv4 address of the AWS EC2 instance.
- EC2_USER: The SSH username for the EC2 instance (typically ubuntu).
- EC2_SSH_KEY: The private key contents of the .pem file for the EC2 instance.
- MONGO_URI: The MongoDB connection string for the deployed environment.

### Jenkins

The pipeline is defined in the Jenkinsfile at the root of the repository. Configure the same credentials in Jenkins as environment variables or credentials store before running the pipeline.

---

## AWS EC2 Deployment

The application is configured to be deployed on an AWS EC2 Ubuntu instance.

Requirements:
- Instance type: t2.micro or higher (free tier eligible)
- Operating system: Ubuntu 22.04 LTS
- Port 22 must be open for SSH access
- Port 8000 must be open for application access

Docker must be installed on the EC2 instance before the pipeline can deploy. To install Docker on the EC2 instance, SSH into it and run:

    sudo apt update
    sudo apt install docker.io -y
    sudo usermod -aG docker ubuntu

---

## API Endpoints

POST /report

Submits a new civic issue report and returns the analyzed sentiment.

Request Body:

    {
      "user": "John Doe",
      "location": "Chennai",
      "issue": "Potholes",
      "description": "The main road is completely damaged and unsafe for driving."
    }

Response:

    {
      "message": "Report submitted",
      "sentiment": "negative"
    }

GET /reports

Retrieves all submitted reports from the database.

GET /risk-score

Calculates and returns the overall risk score based on the ratio of negative sentiment reports.

---

## Features

- Real-time sentiment analysis using Natural Language Processing.
- Interactive dashboard with pie charts and bar charts for sentiment distribution.
- Dynamic risk score calculation based on submitted reports.
- Cross-origin communication using CORS middleware.
- Fully containerized architecture for consistent and seamless deployment.
- Automated CI/CD workflows reducing manual deployment effort.

## Common Issues and Fixes

Issue 1: Module not found for axios.
Fix: Run npm install axios inside the frontend directory.

Issue 2: CORS error when frontend tries to reach backend.
Fix: Ensure the CORSMiddleware is properly configured in backend/main.py.

Issue 3: Database connection error.
Fix: Ensure MongoDB is running locally, or verify that the MONGO_URI environment variable is correctly configured in Docker or on the EC2 instance.

Issue 4: Docker containers fail to start.
Fix: Ensure Docker Desktop is running and re-run docker-compose up --build.
