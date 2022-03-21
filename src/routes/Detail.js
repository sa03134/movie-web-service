import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState(false);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return detail ? (
    <div>
      <div>
        <h2>
          <Link className={styles.home} to={`/movie/`}>
            Home
          </Link>
        </h2>
      </div>
      <Movie
        rating={detail.data.movie.rating}
        key={detail.data.movie.id}
        id={detail.data.movie.id}
        coverImg={detail.data.movie.large_cover_image}
        title={detail.data.movie.title}
        summary={detail.data.movie.description_full}
        genres={detail.data.movie.genres}
      />
    </div>
  ) : (
    false
  );
}

export default Detail;
