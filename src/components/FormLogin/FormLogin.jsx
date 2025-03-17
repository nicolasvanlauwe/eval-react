import { useState } from "react";
import { AuthService } from "../../services/auth";
import styles from "./FormLogin.module.css";
import { useNavigate } from "react-router";

export const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const Auth = new AuthService();
  const handleSubmit = (e) => {
    e.prevendDefault();
    Auth.login(formData.email, formData.password);
    navigate("/films");
  };
  return (
    <div className={styles["auth-form"]}>
      <h1>Connexion</h1>
      <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};
