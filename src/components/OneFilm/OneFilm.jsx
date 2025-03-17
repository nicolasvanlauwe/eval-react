import styles from "./OneFilm.module.css";

export const OneFilm = ({ film }) => {
  return (
    <div className={styles["movie-card"]}>
      <img src={film.imageUrl} alt="" />
      <div className={styles["movie-card-content"]}>
        <h2>{film.title}</h2>
        <p>{film.releaseDate}</p>
      </div>
    </div>
  );
};
