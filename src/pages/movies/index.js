import { useState, useEffect } from "react";
import style from "../../css/movies.module.scss";
import { options } from "../..";
import { useLocation } from "react-router-dom";
import MovieShow from "../../components/movieComponents/movieShow";

export default function Movies() {
  const [inputText, setInputText] = useState("");
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();

  async function onSubmit(e, nome) {
    e?.preventDefault();

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${nome}&include_adult=false&language=pt-BR&page=1`,
      options
    );
    const data = await res.json();

    if (data.results) {
      setMovieData(data.results);
    }
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.has("name")) {
      setInputText(query.get("name"));
      onSubmit(null, query.get("name"));
    }
  }, [location]);

  return (
    <div className={style.container}>
      <form action="" onSubmit={(e) => onSubmit(e, inputText)}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit"></button>
      </form>

      <section>
        {movieData.map((data) => (
          <MovieShow
            key={data.id}
            id={data.id}
            url={data.poster_path}
            name={data.title}
            overview={data.overview}
          />
        ))}
      </section>
    </div>
  );
}
