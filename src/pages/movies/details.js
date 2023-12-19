import { useParams } from "react-router-dom";
import style from "./details.module.scss";
import TrailerShow from "../../components/movieComponents/trailerShow";
import { options } from "../..";
import FilmCover from "../../components/movieComponents/filmCover";
import MovieGalery from "../../components/movieComponents/movieGalery";
import { useEffect, useState } from "react";

export default function MovieDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getMovieInfo() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
        options
      );
      setData(await res.json());
    }

    getMovieInfo();
  }, [id]);

  if (!data) return null;

  return (
    <div className={style.container}>
      <TrailerShow id={id} />
      <MovieGalery id={id} type={"posters"}/>
      <FilmCover url={data.poster_path} alt={data.original_title} />

    </div>
  );
}
