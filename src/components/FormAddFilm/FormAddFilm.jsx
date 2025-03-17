import { useNavigate } from "react-router";
import { MovieService } from "../../services/movie";
import styles from "./FormAddFilm.module.css";
import { useState } from "react";

export const FormAddFilm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  const Movie = new MovieService();
  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title: formData.title,
      description: formData.description,
      releaseDate: formData.releaseDate,
      imageUrl: formData.imageUrl,
    };
    Movie.createMovie(movieData);
    navigate("/films");
  };
  return (
    <div className={styles["movie-form"]}>
      <h1>Connexion</h1>
      <form id="movie-form" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            required
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">Déscription</label>
          <textarea
            id="description"
            required
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">Date de sortie</label>
          <input
            type="date"
            id="releaseDate"
            required
            onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">URL de l'image</label>
          <input
            type="url"
            id="imageUrl"
            required
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};
