import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError("password and confirm password does not match");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      return navigate("/articles");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <h3>create account</h3>
        {error && <p className="error">{error}</p>} <br />
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
            placeholder="your password (at least 6 characters)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          confirm password:
          <input
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button onClick={createAccount}>create account</button>
        <Link to={"/login"}>already have an account?</Link>
      </div>
    </>
  );
};
export default CreateAccountPage;
