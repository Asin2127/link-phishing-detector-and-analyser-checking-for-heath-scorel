import Navbar from "../component/navbar";
import Sidebar from "../component/slidebar";

function History() {
  const historyData = [
    {
      id: 1,
      url: "https://google.com",
      score: 98,
      risk: "Safe",
      date: "01-08-2026",
    },
    {
      id: 2,
      url: "http://fake-login.xyz",
      score: 18,
      risk: "Danger",
      date: "01-08-2026",
    },
    {
      id: 3,
      url: "https://github.com",
      score: 95,
      risk: "Safe",
      date: "31-07-2026",
    },
    {
      id: 4,
      url: "http://offer-freegift.com",
      score: 40,
      risk: "High Risk",
      date: "30-07-2026",
    },
    {
      id: 5,
      url: "https://microsoft.com",
      score: 97,
      risk: "Safe",
      date: "29-07-2026",
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Safe":
        return "#16a34a";
      case "High Risk":
        return "#f97316";
      case "Danger":
        return "#dc2626";
      default:
        return "#2563eb";
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fb" }}>
      <Sidebar />

      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>Scan History</h1>

          <p style={{ color: "#666", marginBottom: "25px" }}>
            View all previously scanned URLs and their security reports.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#2563eb", color: "#fff" }}>
                  <th style={{ padding: "12px" }}>ID</th>
                  <th>Website URL</th>
                  <th>Health Score</th>
                  <th>Risk Level</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {historyData.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td style={{ padding: "12px" }}>{item.id}</td>

                    <td>{item.url}</td>

                    <td>{item.score}/100</td>

                    <td
                      style={{
                        color: getRiskColor(item.risk),
                        fontWeight: "bold",
                      }}
                    >
                      {item.risk}
                    </td>

                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  padding: "10px 18px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Export History
              </button>

              <button
                style={{
                  padding: "10px 18px",
                  background: "#dc2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Clear History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;