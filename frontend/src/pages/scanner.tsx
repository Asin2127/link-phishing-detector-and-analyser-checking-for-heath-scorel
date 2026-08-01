import { useState } from "react";
import Navbar from "../component/navbar";
import Sidebar from "../component/slidebar";
import HealthScore from "../component/healthscore";
import { calculateHealthScore } from "../services/api";

function Scanner() {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [risk, setRisk] = useState("");
  const [https, setHttps] = useState(false);

  const scanUrl = () => {
    if (url.trim() === "") {
      alert("Please enter a website URL");
      return;
    }

    const result = calculateHealthScore(url);
    setHttps(result.https);
    setScore(result.score);
    setRisk(result.risk);
  };

  return (
    <div style={{ display: "flex", background: "#f4f7fb", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>URL Scanner</h1>

          <p style={{ color: "#666", marginBottom: "20px" }}>
            Scan a website URL and check its security health.
          </p>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
            }}
          >
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "15px",
              }}
            />

            <button
              onClick={scanUrl}
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Scan URL
            </button>
          </div>

          {score !== null && (
            <>
              <div style={{ marginTop: "30px" }}>
                <HealthScore score={score} />
              </div>

              <div
                style={{
                  marginTop: "30px",
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h2>Security Report</h2>

                <table
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        Website URL
                      </td>
                      <td>{url}</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        Health Score
                      </td>
                      <td>{score}/100</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        Risk Level
                      </td>
                      <td
                        style={{
                          color:
                            risk === "Safe"
                              ? "green"
                              : risk === "Danger"
                              ? "red"
                              : "orange",
                          fontWeight: "bold",
                        }}
                      >
                        {risk}
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        HTTPS
                      </td>
                      <td>{https ? "✅ Yes" : "❌ No"}</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        SSL Certificate
                      </td>
                      <td>{https ? "Valid" : "Not Secure"}</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        Redirects
                      </td>
                      <td>0</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        Recommendation
                      </td>
                      <td>
                        {risk === "Safe"
                          ? "This website appears to be safe."
                          : "Be cautious before entering personal information."}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scanner;