import Navbar from "../component/navbar";
import Sidebar from "../component/slidebar";

function Settings() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fb" }}>
      <Sidebar />

      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>Settings</h1>
          <p style={{ color: "#666", marginBottom: "25px" }}>
            Configure your phishing detection preferences.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
              maxWidth: "700px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "bold" }}>Scan sensitivity</label>
              <input type="range" min="1" max="10" defaultValue="6" style={{ marginTop: "10px" }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "bold" }}>Alert notifications</label>
              <select style={{ width: "100%", marginTop: "8px", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option>Enabled</option>
                <option>Only high risk</option>
                <option>Disabled</option>
              </select>
            </div>

            <button style={{ background: "#2563eb", color: "#fff", padding: "12px 20px", borderRadius: "8px" }}>
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
