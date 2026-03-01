import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer
} from "recharts";

// Backend URL (match your FastAPI port)
const BACKEND_URL = "http://localhost:8000";

function App() {
  const [form, setForm] = useState({
    user: "",
    location: "",
    issue: "",
    description: "",
  });

  const [reports, setReports] = useState([]);
  const [sentiment, setSentiment] = useState("");
  const [riskData, setRiskData] = useState({ risk: "", negative_ratio: 0 });

  useEffect(() => {
    fetchReports();
    fetchRisk();
  }, []);

  const fetchReports = async () => {
  try {
    const res = await axios.get("http://localhost:8000/reports");

    // IMPORTANT CHANGE
    setReports(res.data.data);   // 👈 use .data

  } catch (err) {
    console.error("Error fetching reports:", err);
    setReports([]);
  }
};

  const fetchRisk = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/risk-score`);
      setRiskData(res.data);
    } catch (err) {
      console.error("Error fetching risk data:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitReport = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/report`, form);
      setSentiment(res.data.sentiment);
      fetchReports();
      fetchRisk();
      // Reset form
      setForm({ user: "", location: "", issue: "", description: "" });
    } catch (err) {
      console.error("Error submitting report:", err);
      alert("Failed to submit report. Check console for details.");
    }
  };

  // Sentiment Chart Data
  const sentimentCounts = {
    positive: reports.filter(r => r.sentiment === "positive").length,
    neutral: reports.filter(r => r.sentiment === "neutral").length,
    negative: reports.filter(r => r.sentiment === "negative").length,
  };

  const pieData = [
    { name: "Positive", value: sentimentCounts.positive },
    { name: "Neutral", value: sentimentCounts.neutral },
    { name: "Negative", value: sentimentCounts.negative },
  ];

  // Location Aggregation
  const locationMap = {};
  reports.forEach(r => {
    locationMap[r.location] = (locationMap[r.location] || 0) + 1;
  });

  const barData = Object.keys(locationMap).map(loc => ({
    location: loc,
    count: locationMap[loc]
  }));

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh" }}>

      <div style={{
        background: "linear-gradient(90deg,#1e3a8a,#2563eb)",
        color: "white",
        padding: "20px",
        fontSize: "22px",
        textAlign: "center"
      }}>
        CrowdPulse AI – Civic Risk Intelligence Dashboard
      </div>

      <div style={{ display: "flex", padding: "30px", gap: "30px" }}>

        {/* LEFT PANEL */}
        <div style={{ flex: 1 }}>
          <div style={cardStyle}>
            <h3>Submit Civic Issue</h3>

            <input
              name="user"
              placeholder="Name"
              value={form.user}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              name="issue"
              placeholder="Issue Type"
              value={form.issue}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              style={inputStyle}
            />

            <button onClick={submitReport} style={buttonStyle}>Submit</button>

            {sentiment && (
              <div style={{ marginTop: "10px" }}>
                Sentiment: <b>{sentiment.toUpperCase()}</b>
              </div>
            )}
          </div>

          <div style={cardStyle}>
            <h3>Risk Intelligence</h3>
            <p>Total Reports: {reports.length}</p>
            <p>Risk Level: <b style={{
              color:
                riskData.risk === "High" ? "red" :
                  riskData.risk === "Medium" ? "orange" : "green"
            }}>{riskData.risk}</b></p>
            <p>Negative Ratio: {(riskData.negative_ratio * 100).toFixed(1)}%</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ flex: 2 }}>

          <div style={cardStyle}>
            <h3>Sentiment Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80}>
                  <Cell fill="#22c55e" />
                  <Cell fill="#facc15" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={cardStyle}>
            <h3>Reports by Location</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={cardStyle}>
            <h3>Recent Reports</h3>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Location</th>
                  <th>Issue</th>
                  <th>Sentiment</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {reports.slice(-5).reverse().map((r, i) => (
                  <tr key={i}>
                    <td>{r.user}</td>
                    <td>{r.location}</td>
                    <td>{r.issue}</td>
                    <td>{r.sentiment}</td>
                    <td style={{
                      color:
                        r.priority === "High" ? "red" :
                          r.priority === "Medium" ? "orange" : "green"
                    }}>{r.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px"
};

const buttonStyle = {
  padding: "10px",
  background: "#1e3a8a",
  color: "white",
  border: "none",
  cursor: "pointer"
};

export default App;