import { useState, useEffect } from "react";
import { AuthService } from "../../services/auth";
import { MovieService } from "../../services/movie";
import { useNavigate, useParams } from "react-router";
import styles from "./OneFilmDetails.module.css";

export const OneFilmDetails = () => {
  const [movie, setMovie] = useState([{}]);
  const navigate = useNavigate();
  const Movie = new MovieService();
  const [goodUser, setGoodUser] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = () => {
      Movie.getMovieById(id)
        .then((res) => {
          setMovie(res);
        })
        .catch((error) => {
          console.error("Erreur de récupération du film :", error);
        });
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (movie.userId && currentUser && currentUser.id == movie.userId) {
      console.log("vrai");
      setGoodUser(true);
    }
  }, [movie]);

  const handleEdit = () => {
    navigate("/films/edit/" + movie.id);
  };
  const handleDelete = () => {
    Movie.deleteMovie(id);
    navigate("/films");
  };

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["movie-header"]}>
        <h1>{movie.title}</h1>
        <div className={`${styles["movie-actions"]} ${goodUser ? "" : "hidden"}`}>
          {/*auth*/}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className={styles["movie-content"]}>
        <img src={movie.imageUrl} alt="" className={styles["movie-image"]} />
        <div className={styles["movie-info"]}>
          <p className={styles["release-data"]}>{movie.releaseDate}</p>
          <p className={styles["description"]}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};
