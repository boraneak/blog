import { useState } from "react";
import axios from 'axios';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('email', email);
  console.log('password', password);
  const Login = async () => {
    await axios.post('/api/login/', {
      email: email,
      password: password
    });
  }
  return (
    <>
      <div>
        <h3>login</h3>
        <label>
          email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          password:
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={Login}>login</button>
      </div>
    </>
  )
}
export default LoginPage;
