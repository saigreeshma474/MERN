import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || pass === "") {
      alert("Please fill all fields ❌");
      return;
    }

    alert("Login Successful ✅");
  }

  return (
    <div className="authPage">
      <div className="authBox">
        <h2>Login</h2>
        <p className="authSub">Welcome back to HireHub 👋</p>

        <form onSubmit={handleLogin} className="authForm">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button className="btn primary full" type="submit">
            Login
          </button>
        </form>

        <p className="authBottom">
          New user? <Link to="/signup">Create account</Link>
        </p>

        <Link className="backHome" to="/">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
