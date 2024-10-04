import { LoginForm } from "../molecule/LoginForm";

export const Login = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1>Login</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};
