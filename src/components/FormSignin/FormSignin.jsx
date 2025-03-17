import { useNavigate } from "react-router";
import { AuthService } from "../../services/auth";
import styles from "./FormSignin.module.css";
import { useState } from "react";

export const FormSignin = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const Auth = new AuthService();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Auth.register(formData.nickname, formData.email, formData.password);
    navigate("/films");
  };
  return (
    <div className={styles["auth-form"]}>
      <h1>Inscription</h1>
      <form action="" id="register-form" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles["form-group"]}>
          <label htmlFor="nickname">Pseudo</label>
          <input
            type="text"
            id="nickname"
            onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};
