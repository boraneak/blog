import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      return navigate("/articles");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <h3>login</h3>
        {error && <p className="error">{error}</p>} <br/>
        <label>
          email:
          <input
            placeholder="your email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password:
          <input
            placeholder="your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={Login}>login</button>
        <Link to={"/create-account"}>dont have an account?</Link>
      </div>
    </>
  );
};
export default LoginPage;
