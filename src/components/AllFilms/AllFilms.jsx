import { OneFilm } from "../OneFilm/OneFilm";
import { MovieService } from "../../services/movie";
import styles from "./AllFilms.module.css";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

export const AllFilms = () => {
  const Movie = new MovieService();
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    Movie.getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div className={styles["movies-page"]}>
      <h1>Films</h1>
      <div className={styles["movies-grid"]}>
        {movies.length !== 0 ? (
          movies.map((movie) => {
            return (
              <NavLink to={`/films/${movie.id}`}>
                <OneFilm film={movie} />
              </NavLink>
            );
          })
        ) : (
          <p>Aucun film trouvé</p>
        )}
      </div>
    </div>
  );
};
