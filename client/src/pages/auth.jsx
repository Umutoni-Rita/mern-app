import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      <Login />
      <Register />
    </>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return <Form 
  username={username}
  setUsername={setUsername}
  password={password}
  setPassword={setPassword}
  label = 'Login'
  />;
};
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label = 'Register'
    />
  );
};

const Form = ({ username, setUsername }, { password, setPassword }, label) => {
  return (
    <div className="auth-container">
      <form>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <input type="submit" value={label} />
      </form>
    </div>
  );
};
