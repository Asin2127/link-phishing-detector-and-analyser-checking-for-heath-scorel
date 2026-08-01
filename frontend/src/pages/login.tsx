import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #2563eb, #1e3a8a)" }}>
      <div style={{ background: "#fff", padding: "35px", borderRadius: "16px", width: "100%", maxWidth: "420px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Welcome back</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>Sign in to continue protecting your links</p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "15px" }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "20px" }} />

          <button type="submit" style={{ width: "100%", background: "#2563eb", color: "#fff", padding: "12px", borderRadius: "8px" }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: "18px", textAlign: "center" }}>
          New here? <Link to="/signup" style={{ color: "#2563eb", fontWeight: "bold" }}>Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;