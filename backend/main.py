from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from pymongo import MongoClient
from textblob import TextBlob
from datetime import datetime
import os

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)
db = client["crowdpulse"]
collection = db["reports"]

class Report(BaseModel):
    user: str
    location: str
    issue: str
    description: str

@app.post("/report")
def create_report(report: Report):
    analysis = TextBlob(report.description)
    polarity = analysis.sentiment.polarity

    if polarity < -0.2:
        sentiment = "negative"
    elif polarity > 0.2:
        sentiment = "positive"
    else:
        sentiment = "neutral"

    # Smart Priority Detection
    priority = "Low"

    if sentiment == "negative":
        if report.issue.lower() in ["water", "power", "electricity", "hospital"]:
            priority = "High"
        else:
            priority = "Medium"

    # Smart Priority Detection
    priority = "Low"

    if sentiment == "negative":
        if report.issue.lower() in ["water", "power", "electricity", "hospital"]:
            priority = "High"
        else:
            priority = "Medium"

    data = {
        "user": report.user,
        "location": report.location,
        "issue": report.issue,
        "description": report.description,
        "sentiment": sentiment,
        "priority": priority,
        "score": polarity,
        "created_at": datetime.now()
    }

    collection.insert_one(data)

    return {"message": "Report submitted", "sentiment": sentiment}

@app.get("/reports")
def get_reports():
    reports = list(collection.find({}, {"_id": 0}))
    return reports

@app.get("/risk-score")
def risk_score():
    total = collection.count_documents({})
    negative = collection.count_documents({"sentiment": "negative"})

    if total == 0:
        return {"risk": "No Data"}

    ratio = negative / total

    if ratio > 0.6:
        risk = "High"
    elif ratio > 0.3:
        risk = "Medium"
    else:
        risk = "Low"

    return {"risk": risk, "negative_ratio": ratio}

# Serve React Frontend
frontend_build_path = os.path.join(os.path.dirname(__file__), "build")
if os.path.exists(frontend_build_path):
    app.mount("/", StaticFiles(directory=frontend_build_path, html=True), name="static")
else:
    @app.get("/")
    def home():
        return {"message": "CrowdPulse API Running (Frontend not built)"}