import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ year, rating, id, coverImg, title, summary, genres }) {
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.movie}>
        <div className={styles.img}>
          <img alt={title} src={coverImg} className={styles.movie__img} />
        </div>
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
          <h3 className={styles.movie__year}> {year}</h3>

          <h1> {rating}</h1>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.protoTypes = {
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
