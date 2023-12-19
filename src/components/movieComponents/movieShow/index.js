import { useState, useEffect } from "react";
import FilmCover from "../filmCover";
import { options } from "../../..";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function MovieShow({ url, name, id }) {
  const [casting, setCasting] = useState([]);

  async function getMovieCredits() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`,
      options
    );
    const data = await res.json();

    if (data.cast) {
      setCasting(data.cast);
    }
  }

  useEffect(() => {
    getMovieCredits();
  }, []);

  if (!url) return;

  return (
    <Link to={`/filmes/${id}/details`} className={style.container}>
      <FilmCover url={url} />
      <p className={style.name}>{name}</p>
    </Link>
  );
}
