import { useState } from "react";
import { authUser } from "../utils/auth";

const AuthForm = ({ setToken, registerOrLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    // <form onSubmit={registerUser}>
    <form
      onSubmit={(e) =>
        authUser(e, registerOrLogin, setToken, username, password)
      }
    >
      <label>Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
