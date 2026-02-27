# CrowdPulse AI# CrowdPulse AICrowdPulse AI

AI-Based Civic Issue Monitoring System

AI-Based Civic Issue Monitoring SystemAI-Based Civic Issue Monitoring System

## Project Overview

📖 Project Overview

CrowdPulse AI is a full-stack web application designed to collect and analyze civic issues reported by citizens. The system uses Artificial Intelligence (Sentiment Analysis) to classify public complaints as Positive, Negative, or Neutral.

## Project Overview

This project demonstrates the integration of:

- Frontend (React.js)CrowdPulse AI is a full-stack web application designed to collect and analyze civic issues reported by citizens. The system uses Artificial Intelligence (Sentiment Analysis) to classify public complaints as Positive, Negative, or Neutral.

- Backend (FastAPI)

- AI Sentiment AnalysisCrowdPulse AI is a full-stack web application designed to collect and analyze civic issues reported by citizens. The system uses Artificial Intelligence (Sentiment Analysis) to classify public complaints as Positive, Negative, or Neutral.

- REST API Communication

- Containerization (Docker)This project demonstrates the integration of:

- CI/CD Pipelines (GitHub Actions / Jenkins)

- Cloud Deployment (AWS EC2)This project demonstrates the integration of:



## Objective- Frontend (React.js)Frontend (React.js)



To build an intelligent civic issue reporting system that:- Backend (FastAPI)

- Allows users to submit public complaints.

- Performs real-time sentiment analysis.- AI Sentiment AnalysisBackend (FastAPI)

- Displays results dynamically.

- Demonstrates full-stack development with AI integration and DevOps practices.- REST API Communication



## User Stories- Containerization (Docker)AI Sentiment Analysis



- As a citizen, I want to submit a civic issue report with my location and description so that the authorities are aware of the problem.- CI/CD Pipelines (GitHub Actions / Jenkins)

- As a system administrator, I want the system to automatically analyze the sentiment of the submitted report so that issues can be prioritized based on severity.

- As a user, I want to see a confirmation and the analyzed sentiment of my report so that I know my complaint was successfully processed.- Cloud Deployment (AWS EC2)REST API Communication

- As a developer, I want the frontend and backend to communicate via REST APIs so that the application is modular and scalable.



## System Architecture

## Objective🎯 Objective

User -> React Frontend -> FastAPI Backend -> Sentiment Model -> MongoDB -> Response -> UI Display



## Technologies Used

To build an intelligent civic issue reporting system that:To build an intelligent civic issue reporting system that:

**Frontend:**

- React.js- Allows users to submit public complaints.

- Axios

- Recharts (for data visualization)- Performs real-time sentiment analysis.Allows users to submit public complaints

- HTML / CSS

- Displays results dynamically.

**Backend:**

- FastAPI- Demonstrates full-stack development with AI integration and DevOps practices.Performs real-time sentiment analysis

- Uvicorn

- Python

- PyMongo

## User StoriesDisplays results dynamically

**AI Component:**

- TextBlob (Sentiment Analysis Model / Text Classification)



**Database:**- As a citizen, I want to submit a civic issue report with my location and description so that the authorities are aware of the problem.Demonstrates full-stack development with AI integration

- MongoDB

- As a system administrator, I want the system to automatically analyze the sentiment of the submitted report so that issues can be prioritized based on severity.

**DevOps & Cloud:**

- Docker & Docker Compose- As a user, I want to see a confirmation and the analyzed sentiment of my report so that I know my complaint was successfully processed.📝 User Stories

- GitHub Actions / Jenkins

- AWS EC2- As a developer, I want the frontend and backend to communicate via REST APIs so that the application is modular and scalable.



## Project StructureAs a citizen, I want to submit a civic issue report with my location and description so that the authorities are aware of the problem.



```text## System ArchitectureAs a system administrator, I want the system to automatically analyze the sentiment of the submitted report so that issues can be prioritized based on severity.

CROWDPULSE-AI/

│As a user, I want to see a confirmation and the analyzed sentiment of my report so that I know my complaint was successfully processed.

├── .github/workflows/   # GitHub Actions CI/CD pipeline

├── backend/             # FastAPI backend source codeUser -> React Frontend -> FastAPI Backend -> Sentiment Model -> MongoDB -> Response -> UI DisplayAs a developer, I want the frontend and backend to communicate via REST APIs so that the application is modular and scalable.

├── frontend/            # React frontend source code

├── docker-compose.yml   # Docker Compose configuration

├── Dockerfile           # Multi-stage Docker build file

├── Jenkinsfile          # Jenkins CI/CD pipeline configuration## Technologies Used🏗️ System Architecture

└── README.md            # Project documentation

```



## Prerequisites**Frontend:**User → React Frontend → FastAPI Backend → Sentiment Model → Response → UI Display



Before running the project, ensure you have the following installed:- React.js

- Docker and Docker Desktop (Recommended)

- Git- Axios🛠️ Technologies Used



For manual execution without Docker:- Recharts (for data visualization)Frontend

- Node.js (v18+)

- Python (v3.9+)- HTML / CSS

- MongoDB (running locally on port 27017)

React.js

---

**Backend:**

## How to Run the Project

- FastAPIAxios

### Method 1: Using Docker (Recommended)

- Uvicorn

The easiest way to run the application is using Docker Compose, which will automatically set up the frontend, backend, and MongoDB database.

- PythonHTML / CSS (Inline Styling)

1. Clone the repository:

   ```bash- PyMongo

   git clone https://github.com/Dharanika-K/CROWDPULSE-AI.git

   cd CROWDPULSE-AIBackend

   ```

**AI Component:**

2. Build and start the containers:

   ```bash- TextBlob (Sentiment Analysis Model / Text Classification)FastAPI

   docker-compose up --build -d

   ```



3. Access the application:**Database:**Uvicorn

   - Web Interface: http://localhost:8000

   - API Documentation (Swagger): http://localhost:8000/docs- MongoDB



4. To stop the application:Python

   ```bash

   docker-compose down**DevOps & Cloud:**

   ```

- Docker & Docker ComposeAI Component

### Method 2: Manual Setup

- GitHub Actions / Jenkins

If you prefer to run the services individually without Docker, follow these steps:

- AWS EC2Sentiment Analysis Model (Text Classification)

#### Step 1: Database Setup

Ensure MongoDB is installed and running locally on mongodb://localhost:27017/.



#### Step 2: Backend Setup (FastAPI)## Project Structure📂 Project Structure

1. Navigate to the backend folder:

   ```bashCROWDPULSE-AI/

   cd backend

   ``````text│

2. Create and activate a virtual environment:

   ```bashCROWDPULSE-AI/├── backend/

   python -m venv venv

   # Windows:││   ├── main.py

   venv\Scripts\activate

   # Mac/Linux:├── .github/workflows/   # GitHub Actions CI/CD pipeline│

   source venv/bin/activate

   ```├── backend/             # FastAPI backend source code├── frontend/

3. Install dependencies:

   ```bash├── frontend/            # React frontend source code│   ├── src/

   pip install -r requirements.txt

   python -m textblob.download_corpora├── docker-compose.yml   # Docker Compose configuration│   │   ├── App.js

   ```

4. Run the backend server:├── Dockerfile           # Multi-stage Docker build file│   ├── package.json

   ```bash

   uvicorn main:app --reload├── Jenkinsfile          # Jenkins CI/CD pipeline configuration│

   ```

   The backend API will run at http://127.0.0.1:8000.└── README.md            # Project documentation└── README.md



#### Step 3: Frontend Setup (React)```🚀 How to Run the Project

1. Open a new terminal and navigate to the frontend folder:

   ```bash🔹 Step 1: Backend Setup (FastAPI)

   cd frontend

   ```## Prerequisites1️⃣ Navigate to backend folder

2. Install dependencies:

   ```bashcd backend

   npm install

   ```Before running the project, ensure you have the following installed:2️⃣ Create Virtual Environment (Optional but Recommended)

3. Start the React application:

   ```bash- Docker and Docker Desktop (Recommended)python -m venv venv

   npm start

   ```- Git

   The frontend will run at http://localhost:3000.

Activate:

---

For manual execution without Docker:

## CI/CD Pipeline and Deployment

- Node.js (v18+)Windows:

This project includes automated CI/CD pipelines configured for both GitHub Actions and Jenkins.

- Python (v3.9+)

### Pipeline Stages

1. **Checkout Repository:** Fetches the latest code from the main branch.- MongoDB (running locally on port 27017)venv\Scripts\activate

2. **Build Application:** Builds the React frontend and FastAPI backend.

3. **Create & Push Docker Image:** Builds a multi-stage Docker image and pushes it to Docker Hub.3️⃣ Install Dependencies

4. **Deploy to EC2:** Connects to an AWS EC2 instance via SSH, pulls the latest Docker image, and runs the container alongside MongoDB.

---pip install fastapi uvicorn

### AWS EC2 Deployment

The application is configured to be deployed on an AWS EC2 Ubuntu instance.

- **Port Requirements:** Ensure port 8000 (Application) and 22 (SSH) are open in the EC2 Security Group.

- **Environment Variables:** The deployment requires MONGO_URI to be set to connect the application container to the MongoDB container.## How to Run the Project(Install additional ML libraries if used)



---



## API Endpoints### Method 1: Using Docker (Recommended)4️⃣ Enable CORS (Important)



**POST /report**

- Submits a new civic issue report and returns the analyzed sentiment.

- Request Body Example:The easiest way to run the application is using Docker Compose, which will automatically set up the frontend, backend, and MongoDB database.Make sure your main.py contains:

  ```json

  {

    "user": "John Doe",

    "location": "Chennai",1. Clone the repository:from fastapi.middleware.cors import CORSMiddleware

    "issue": "Potholes",

    "description": "The main road is completely damaged and unsafe for driving."   ```bash

  }

  ```   git clone https://github.com/Dharanika-K/CROWDPULSE-AI.gitapp.add_middleware(

- Response Example:

  ```json   cd CROWDPULSE-AI    CORSMiddleware,

  {

    "message": "Report submitted",   ```    allow_origins=["*"],

    "sentiment": "negative"

  }    allow_credentials=True,

  ```

2. Build and start the containers:    allow_methods=["*"],

**GET /reports**

- Retrieves all submitted reports from the database.   ```bash    allow_headers=["*"],



**GET /risk-score**   docker-compose up --build -d)

- Calculates and returns the overall risk score based on the ratio of negative reports.

   ```5️⃣ Run Backend Server

---

uvicorn main:app --reload

## Features

3. Access the application:

- Real-time sentiment analysis using Natural Language Processing.

- Modern UI with an interactive dashboard and charts.   - Web Interface: `http://localhost:8000`Backend will run at:

- Dynamic response display and risk score calculation.

- Cross-origin communication using CORS.   - API Documentation (Swagger): `http://localhost:8000/docs`

- Fully containerized architecture for seamless deployment.

- Automated CI/CD workflows.http://127.0.0.1:8000



## Common Errors & Fixes4. To stop the application:



1. **"Module not found: axios"**   ```bashSwagger Docs available at:

   - Run npm install axios in the frontend directory.

2. **CORS Error**   docker-compose down

   - Ensure the CORS middleware is properly configured in main.py.

3. **Database Connection Error**   ```http://127.0.0.1:8000/docs

   - Ensure MongoDB is running locally or the MONGO_URI environment variable is correctly set in Docker.

🔹 Step 2: Frontend Setup (React)

### Method 2: Manual Setup1️⃣ Navigate to frontend folder

cd frontend

If you prefer to run the services individually without Docker, follow these steps:2️⃣ Install Dependencies

npm install

#### Step 1: Database Setup

Ensure MongoDB is installed and running locally on `mongodb://localhost:27017/`.If axios is not installed:



#### Step 2: Backend Setup (FastAPI)npm install axios

1. Navigate to the backend folder:3️⃣ Start React App

   ```bashnpm start

   cd backend

   ```Frontend will run at:

2. Create and activate a virtual environment:

   ```bashhttp://localhost:3000

   python -m venv venv🔗 API Endpoint

   # Windows:POST /report

   venv\Scripts\activate

   # Mac/Linux:URL:

   source venv/bin/activate

   ```http://127.0.0.1:8000/report

3. Install dependencies:

   ```bashRequest Body Example:

   pip install -r requirements.txt

   python -m textblob.download_corpora{

   ```  "user": "John",

4. Run the backend server:  "location": "Chennai",

   ```bash  "issue": "Potholes",

   uvicorn main:app --reload  "description": "Road is completely damaged and unsafe."

   ```}

   The backend API will run at `http://127.0.0.1:8000`.

Response Example:

#### Step 3: Frontend Setup (React)

1. Open a new terminal and navigate to the frontend folder:{

   ```bash  "sentiment": "negative"

   cd frontend}

   ```🧠 Features

2. Install dependencies:

   ```bashReal-time sentiment analysis

   npm install

   ```Modern UI with dashboard

3. Start the React application:

   ```bashDynamic response display

   npm start

   ```Cross-origin communication using CORS

   The frontend will run at `http://localhost:3000`.

AI-powered complaint classification

---

📊 Example Issue Types

## CI/CD Pipeline and Deployment

Potholes

This project includes automated CI/CD pipelines configured for both GitHub Actions and Jenkins.

Garbage Overflow

### Pipeline Stages

1. **Checkout Repository:** Fetches the latest code from the main branch.Power Cut

2. **Build Application:** Builds the React frontend and FastAPI backend.

3. **Create & Push Docker Image:** Builds a multi-stage Docker image and pushes it to Docker Hub.Water Leakage

4. **Deploy to EC2:** Connects to an AWS EC2 instance via SSH, pulls the latest Docker image, and runs the container alongside MongoDB.

Street Light Not Working

### AWS EC2 Deployment

The application is configured to be deployed on an AWS EC2 Ubuntu instance.Sewage Blockage

- **Port Requirements:** Ensure port `8000` (Application) and `22` (SSH) are open in the EC2 Security Group.

- **Environment Variables:** The deployment requires `MONGO_URI` to be set to connect the application container to the MongoDB container.Traffic Signal Issue



---⚠️ Common Errors & Fixes

1️⃣ "Module not found: axios"

## API Endpoints

Run:

**POST /report**

- Submits a new civic issue report and returns the analyzed sentiment.npm install axios

- Request Body Example:2️⃣ CORS Error

  ```json

  {Enable CORS middleware in FastAPI.

    "user": "John Doe",

    "location": "Chennai",3️⃣ Error Submitting Report

    "issue": "Potholes",

    "description": "The main road is completely damaged and unsafe for driving."Ensure backend server is running.

  }
  ```
- Response Example:
  ```json
  {
    "message": "Report submitted",
    "sentiment": "negative"
  }
  ```

**GET /reports**
- Retrieves all submitted reports from the database.

**GET /risk-score**
- Calculates and returns the overall risk score based on the ratio of negative reports.

---

## Features

- Real-time sentiment analysis using Natural Language Processing.
- Modern UI with an interactive dashboard and charts.
- Dynamic response display and risk score calculation.
- Cross-origin communication using CORS.
- Fully containerized architecture for seamless deployment.
- Automated CI/CD workflows.

## Common Errors & Fixes

1. **"Module not found: axios"**
   - Run `npm install axios` in the frontend directory.
2. **CORS Error**
   - Ensure the CORS middleware is properly configured in `main.py`.
3. **Database Connection Error**
   - Ensure MongoDB is running locally or the `MONGO_URI` environment variable is correctly set in Docker.
