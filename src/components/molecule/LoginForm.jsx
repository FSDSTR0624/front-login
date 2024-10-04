import axios from "axios";
import { useState } from "react";
import { InputText } from "../atom/InputText";

export const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log(`UserName: ${username}, Password: ${password}`);
    axios
      .post("http://localhost:3000/login", { username, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        onLogin();
      });
  };

  return (
    <div>
      <div className="card bg-mantis-300 w-96 shadow-xl">
        <div className="card-body">
          <InputText
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <InputText
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <div className="card-actions justify-center">
            <button className="btn bg-mantis-50" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
