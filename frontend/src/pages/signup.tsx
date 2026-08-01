import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0f172a, #2563eb)" }}>
      <div style={{ background: "#fff", padding: "35px", borderRadius: "16px", width: "100%", maxWidth: "440px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Create account</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>Join Link Shield and start scanning safely</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: "15px" }} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "15px" }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "20px" }} />

          <button type="submit" style={{ width: "100%", background: "#10b981", color: "#fff", padding: "12px", borderRadius: "8px" }}>
            Sign up
          </button>
        </form>

        <p style={{ marginTop: "18px", textAlign: "center" }}>
          Already have an account? <Link to="/login" style={{ color: "#2563eb", fontWeight: "bold" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
