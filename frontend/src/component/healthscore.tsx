import React from "react";

interface HealthScoreProps {
  score: number;
}

const HealthScore = ({ score }: HealthScoreProps) => {
  let status = "";
  let color = "";

  if (score >= 81) {
    status = "Safe";
    color = "#16a34a";
  } else if (score >= 61) {
    status = "Low Risk";
    color = "#f59e0b";
  } else if (score >= 41) {
    status = "Medium Risk";
    color = "#f97316";
  } else if (score >= 21) {
    status = "High Risk";
    color = "#ef4444";
  } else {
    status = "Danger";
    color = "#991b1b";
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Website Health Score
      </h2>

      <h1
        style={{
          textAlign: "center",
          color,
          fontSize: "48px",
        }}
      >
        {score}/100
      </h1>

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color,
          fontSize: "20px",
        }}
      >
        {status}
      </p>

      <div
        style={{
          width: "100%",
          height: "20px",
          background: "#e5e7eb",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: color,
            transition: "0.5s",
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>HTTPS: ✅</p>
        <p>SSL Certificate: ✅</p>
        <p>Blacklisted: ❌</p>
        <p>Redirects: 0</p>
      </div>
    </div>
  );
};

export default HealthScore;