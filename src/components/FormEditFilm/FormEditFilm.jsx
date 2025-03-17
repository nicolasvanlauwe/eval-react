import { useNavigate, useParams } from "react-router";
import { MovieService } from "../../services/movie";
import styles from "./FormEditFilm.module.css";
import { useEffect, useState } from "react";

export const FormEditFilm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    imageUrl: "",
  });
  const Movie = new MovieService();

  useEffect(() => {
    // Récupérer les informations du film par son ID
    Movie.getMovieById(id).then((res) => {
      setMovie(res);
    });
  }, [id]);

  // Dès que movie est disponible, mettre à jour formData
  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title,
        description: movie.description,
        releaseDate: movie.releaseDate,
        imageUrl: movie.imageUrl,
      });
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title: formData.title,
      description: formData.description,
      releaseDate: formData.releaseDate,
      imageUrl: formData.imageUrl,
    };
    // Appel pour mettre à jour le film
    Movie.updateMovie(id, movieData);
    navigate("/films");
  };
  if (!movie) {
    return;
  }
  return (
    <div className={styles["movie-form"]}>
      <h1>Connexion</h1>
      <form id="movie-form" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">Titre</label>
          <input
            value={movie.title}
            type="text"
            id="title"
            required
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="description">Déscription</label>
          <textarea
            value={movie.description}
            id="description"
            required
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="releaseDate">Date de sortie</label>
          <input
            value={movie.releaseDate}
            type="date"
            id="releaseDate"
            required
            onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="imageUrl">URL de l'image</label>
          <input
            value={movie.imageUrl}
            type="url"
            id="imageUrl"
            required
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
        </div>
        <button type="submit">Changer</button>
      </form>
    </div>
  );
};
