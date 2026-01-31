import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (name === "" || email === "" || pass === "") {
      alert("Please fill all fields ❌");
      return;
    }

    alert("Signup Successful ✅ Now Login!");
  }

  return (
    <div className="authPage">
      <div className="authBox">
        <h2>Signup</h2>
        <p className="authSub">Create your account in HireHub 🚀</p>

        <form onSubmit={handleSignup} className="authForm">
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button className="btn primary full" type="submit">
            Signup
          </button>
        </form>

        <p className="authBottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Link className="backHome" to="/">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
