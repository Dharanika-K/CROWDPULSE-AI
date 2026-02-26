CrowdPulse AI
AI-Based Civic Issue Monitoring System
📖 Project Overview

CrowdPulse AI is a full-stack web application designed to collect and analyze civic issues reported by citizens. The system uses Artificial Intelligence (Sentiment Analysis) to classify public complaints as Positive, Negative, or Neutral.

This project demonstrates the integration of:

Frontend (React.js)

Backend (FastAPI)

AI Sentiment Analysis

REST API Communication

🎯 Objective

To build an intelligent civic issue reporting system that:

Allows users to submit public complaints

Performs real-time sentiment analysis

Displays results dynamically

Demonstrates full-stack development with AI integration

🏗️ System Architecture

User → React Frontend → FastAPI Backend → Sentiment Model → Response → UI Display

🛠️ Technologies Used
Frontend

React.js

Axios

HTML / CSS (Inline Styling)

Backend

FastAPI

Uvicorn

Python

AI Component

Sentiment Analysis Model (Text Classification)

📂 Project Structure
CROWDPULSE-AI/
│
├── backend/
│   ├── main.py
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   ├── package.json
│
└── README.md
🚀 How to Run the Project
🔹 Step 1: Backend Setup (FastAPI)
1️⃣ Navigate to backend folder
cd backend
2️⃣ Create Virtual Environment (Optional but Recommended)
python -m venv venv

Activate:

Windows:

venv\Scripts\activate
3️⃣ Install Dependencies
pip install fastapi uvicorn

(Install additional ML libraries if used)

4️⃣ Enable CORS (Important)

Make sure your main.py contains:

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
5️⃣ Run Backend Server
uvicorn main:app --reload

Backend will run at:

http://127.0.0.1:8000

Swagger Docs available at:

http://127.0.0.1:8000/docs
🔹 Step 2: Frontend Setup (React)
1️⃣ Navigate to frontend folder
cd frontend
2️⃣ Install Dependencies
npm install

If axios is not installed:

npm install axios
3️⃣ Start React App
npm start

Frontend will run at:

http://localhost:3000
🔗 API Endpoint
POST /report

URL:

http://127.0.0.1:8000/report

Request Body Example:

{
  "user": "John",
  "location": "Chennai",
  "issue": "Potholes",
  "description": "Road is completely damaged and unsafe."
}

Response Example:

{
  "sentiment": "negative"
}
🧠 Features

Real-time sentiment analysis

Modern UI with dashboard

Dynamic response display

Cross-origin communication using CORS

AI-powered complaint classification

📊 Example Issue Types

Potholes

Garbage Overflow

Power Cut

Water Leakage

Street Light Not Working

Sewage Blockage

Traffic Signal Issue

⚠️ Common Errors & Fixes
1️⃣ "Module not found: axios"

Run:

npm install axios
2️⃣ CORS Error

Enable CORS middleware in FastAPI.

3️⃣ Error Submitting Report

Ensure backend server is running.
