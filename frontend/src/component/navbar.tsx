import { Link, useLocation } from "react-router-dom";
import {
  FaShieldAlt,
  FaHome,
  FaSearch,
  FaHistory,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      style={{
        background: "#1e3a8a",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <FaShieldAlt size={28} color="#22c55e" />
        <h2 style={{ margin: 0 }}>Link Shield</h2>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: isActive("/dashboard") ? "#22c55e" : "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/scanner"
          style={{
            color: isActive("/scanner") ? "#22c55e" : "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaSearch />
          Scan URL
        </Link>

        <Link
          to="/history"
          style={{
            color: isActive("/history") ? "#22c55e" : "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaHistory />
          History
        </Link>

        <Link
          to="/profile"
          style={{
            color: isActive("/profile") ? "#22c55e" : "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaUser />
          Profile
        </Link>

        <button
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;