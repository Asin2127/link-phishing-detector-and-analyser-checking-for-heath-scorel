import Navbar from "../component/navbar";
import Sidebar from "../component/slidebar";
import HealthScore from "../component/healthscore";
import {
  FaGlobe,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHistory,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div style={{ display: "flex", background: "#f4f7fb", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1 style={{ marginBottom: "10px" }}>Dashboard</h1>

          <p style={{ color: "#666", marginBottom: "30px" }}>
            Welcome to the Link Phishing Detection & Analyzer.
          </p>

          {/* Statistics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
              }}
            >
              <FaGlobe size={35} color="#2563eb" />
              <h3>Total URLs Scanned</h3>
              <h1>128</h1>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
              }}
            >
              <FaShieldAlt size={35} color="#16a34a" />
              <h3>Safe Websites</h3>
              <h1>105</h1>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
              }}
            >
              <FaExclamationTriangle size={35} color="#dc2626" />
              <h3>Threats Found</h3>
              <h1>23</h1>
            </div>

            {/* Card 4 */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
              }}
            >
              <FaHistory size={35} color="#f59e0b" />
              <h3>Recent Scans</h3>
              <h1>15</h1>
            </div>
          </div>

          {/* Health Score */}
          <div style={{ marginTop: "40px" }}>
            <HealthScore score={92} />
          </div>

          {/* Recent Scan Table */}
          <div
            style={{
              marginTop: "40px",
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Recent URL Scans</h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#2563eb", color: "#fff" }}>
                  <th style={{ padding: "12px" }}>URL</th>
                  <th>Health Score</th>
                  <th>Risk</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "12px" }}>https://google.com</td>
                  <td>98</td>
                  <td style={{ color: "green" }}>Safe</td>
                  <td>01-08-2026</td>
                </tr>

                <tr>
                  <td style={{ padding: "12px" }}>http://fake-login.xyz</td>
                  <td>22</td>
                  <td style={{ color: "red" }}>Danger</td>
                  <td>01-08-2026</td>
                </tr>

                <tr>
                  <td style={{ padding: "12px" }}>https://github.com</td>
                  <td>96</td>
                  <td style={{ color: "green" }}>Safe</td>
                  <td>31-07-2026</td>
                </tr>

                <tr>
                  <td style={{ padding: "12px" }}>http://offer-freegift.com</td>
                  <td>35</td>
                  <td style={{ color: "orange" }}>High Risk</td>
                  <td>30-07-2026</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Scan */}
          <div
            style={{
              marginTop: "40px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Quick URL Scan</h2>

            <input
              type="text"
              placeholder="Enter website URL..."
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <button
              style={{
                marginTop: "15px",
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;