import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Christian");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container">
      <h1>LoginPage</h1>

      <button onClick={onLogin}>Login</button>
    </div>
  );
};
