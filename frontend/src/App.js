import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    user: "",
    location: "",
    issue: "",
    description: "",
  });

  const [sentiment, setSentiment] = useState("");
  const [reportsCount, setReportsCount] = useState(0);

  // 🔥 Fetch reports count when page loads
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/reports");
      setReportsCount(res.data.length);
    } catch (error) {
      console.log("Error fetching reports");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitReport = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/report",
        form
      );

      setSentiment(res.data.sentiment);

      // 🔥 Refresh real count from database
      fetchReports();

      // Clear form
      setForm({
        user: "",
        location: "",
        issue: "",
        description: "",
      });

    } catch (error) {
      setSentiment("error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        CrowdPulse AI – Civic Intelligence System
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Submit Civic Issue</h2>

          <input
            name="user"
            placeholder="Your Name"
            value={form.user}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="issue"
            placeholder="Issue Type"
            value={form.issue}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="description"
            placeholder="Describe Issue"
            value={form.description}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button onClick={submitReport} style={styles.button}>
            Analyze & Submit
          </button>

          {sentiment && (
            <div
              style={{
                ...styles.sentimentBox,
                backgroundColor:
                  sentiment === "positive"
                    ? "#d4edda"
                    : sentiment === "negative"
                    ? "#f8d7da"
                    : sentiment === "neutral"
                    ? "#fff3cd"
                    : "#e2e3e5",
              }}
            >
              Sentiment Detected:{" "}
              <strong>{sentiment.toUpperCase()}</strong>
            </div>
          )}
        </div>

        <div style={styles.dashboard}>
          <h3>Project Dashboard</h3>
          <p>Total Reports Submitted</p>
          <h1>{reportsCount}</h1>
        </div>
      </div>

      <div style={styles.footer}>
        © 2026 CrowdPulse AI | AI-Based Civic Issue Monitoring
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI",
    background: "#f4f6f9",
    minHeight: "100vh",
  },
  navbar: {
    background: "#1e3a8a",
    color: "white",
    padding: "15px",
    fontSize: "18px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "40px",
  },
  card: {
    background: "white",
    padding: "25px",
    width: "350px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  dashboard: {
    background: "white",
    padding: "25px",
    width: "250px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    height: "70px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  sentimentBox: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "6px",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    marginTop: "30px",
    background: "#e5e7eb",
  },
};

export default App;