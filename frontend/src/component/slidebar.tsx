import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaSearch,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Scan URL",
      path: "/scanner",
      icon: <FaSearch />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#0f172a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {/* Logo */}
      <div>
        <div
          style={{
            padding: "25px",
            textAlign: "center",
            borderBottom: "1px solid #1e293b",
          }}
        >
          <FaShieldAlt
            size={45}
            color="#22c55e"
            style={{ marginBottom: "10px" }}
          />

          <h2>Link Shield</h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Phishing Detector
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            padding: "15px",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "14px",
                marginBottom: "10px",
                borderRadius: "8px",
                textDecoration: "none",
                color:
                  location.pathname === item.path ? "#22c55e" : "#ffffff",
                background:
                  location.pathname === item.path
                    ? "#1e293b"
                    : "transparent",
                transition: "0.3s",
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #1e293b",
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;