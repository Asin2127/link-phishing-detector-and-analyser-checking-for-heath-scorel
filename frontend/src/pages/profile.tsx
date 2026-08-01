import Navbar from "../component/navbar";
import Sidebar from "../component/slidebar";
import { FaUserCircle, FaEnvelope, FaShieldAlt } from "react-icons/fa";

function Profile() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fb" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>My Profile</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Manage your account information.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "700px",
              boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
            }}
          >
            {/* Profile Icon */}
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <FaUserCircle size={100} color="#2563eb" />
              <h2 style={{ marginTop: "10px" }}>John Doe</h2>
              <p style={{ color: "#777" }}>Cyber Security User</p>
            </div>

            {/* Name */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "bold" }}>Full Name</label>
              <input
                type="text"
                value="John Doe"
                readOnly
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "bold" }}>
                <FaEnvelope /> Email
              </label>

              <input
                type="email"
                value="john@example.com"
                readOnly
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Security */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "bold" }}>
                <FaShieldAlt /> Account Security
              </label>

              <input
                type="text"
                value="Protected"
                readOnly
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  color: "green",
                  fontWeight: "bold",
                }}
              />
            </div>

            {/* Statistics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "20px",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h3>120</h3>
                <p>Total Scans</p>
              </div>

              <div
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h3>95</h3>
                <p>Safe Websites</p>
              </div>

              <div
                style={{
                  background: "#dc2626",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h3>25</h3>
                <p>Threats Found</p>
              </div>
            </div>

            {/* Buttons */}
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "15px",
              }}
            >
              <button
                style={{
                  padding: "12px 25px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Edit Profile
              </button>

              <button
                style={{
                  padding: "12px 25px",
                  background: "#dc2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;