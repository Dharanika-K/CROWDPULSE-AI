import React, { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");

  const submitReport = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/report", {
        user,
        location,
        issue,
        description,
      });
      setResponse(`Sentiment: ${res.data.sentiment}`);
    } catch (error) {
      setResponse("Error submitting report");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>CrowdPulse AI</h2>
        <p style={styles.subtitle}>Report Civic Issues Instantly</p>

        <input
          style={styles.input}
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Issue Type"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <textarea
          style={{ ...styles.input, height: "80px" }}
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button style={styles.button} onClick={submitReport}>
          Submit Report
        </button>

        {response && <div style={styles.response}>{response}</div>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  response: {
    marginTop: "15px",
    padding: "10px",
    background: "#f0f0f0",
    borderRadius: "8px",
  },
};

export default App;