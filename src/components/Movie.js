import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        <li>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arraryOf(PropTypes.string).isRequired,
};
export default Movie;
