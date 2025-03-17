import { NavLink, useNavigate } from "react-router";
import { AuthService } from "../../services/auth";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const Auth = new AuthService();
  const handleLogout = () => {
    Auth.logout();
    navigate("/", { replace: true });
  };

  return (
    <header>
      <nav>
        <div className={styles["logo"]}>
          <img src="/src/assets/logo.png" alt="" className={styles["logo"]} />
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/films"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Films
            </NavLink>
          </li>
          <li className={Auth.isAuthenticated() ? "" : "hidden"}>
            <NavLink to={"/add-film"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Ajouter
            </NavLink>
          </li>
          <li className={Auth.isAuthenticated() ? "hidden" : ""}>
            <NavLink to={"/login"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Connexion
            </NavLink>
          </li>
          <li className={Auth.isAuthenticated() ? "hidden" : ""}>
            <NavLink to={"/signin"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Inscription
            </NavLink>
          </li>
          <li className={Auth.isAuthenticated() ? "" : "hidden"}>
            <NavLink id="logout" onClick={handleLogout}>
              Déconnexion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
