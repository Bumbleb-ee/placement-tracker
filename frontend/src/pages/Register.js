import { useState } from "react";
import { registerUser } from "../services/api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({ email, password });
      alert(res.message);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
