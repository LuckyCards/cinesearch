import { useParams } from "react-router-dom";
import style from "./details.module.scss";
import VideoShow from "../../components/movieComponents/videoShow";
import { options } from "../..";
import FilmCover from "../../components/movieComponents/filmCover";
import { useEffect, useState } from "react";
import DateManager from "../../components/Utils/DateManager";

export default function MovieDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [urlBackground, setUrlBackground] = useState("");

  async function getMovieInfo() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
      options
    );
    setData(await res.json());
    console.log(data);
  }

  useEffect(() => {
    getMovieInfo();
  }, [id]);

  if (!data) return null;

  const dateInfo = DateManager(data.release_date);

  console.log(urlBackground);
  return (
    <div
      className={style.container}
      style={{
        background: `url(${urlBackground})`,
      }}>
      <div className={style.trailer}>
        <VideoShow id={id} />
      </div>
      <div className={style.thumbnail}>
        <VideoShow
          id={id}
          isThumbnail={true}
          setThumbnailUrl={setUrlBackground}
        />
      </div>
      <div className={style.main}>
        <div className={style.filmCover}>
          <FilmCover
            className={style.cover}
            url={data.poster_path}
            alt={data.original_title}
          />
        </div>

        <div className={style.boxTitles}>
          <div className={style.title}>
            <h1>
              {data.title}{" "}
              <span className={style.dateInfo}>&#40;{dateInfo.year}&#41;</span>
            </h1>
            {/* "&#40;" e "&#41;" são codigos dos parenteses*/}
          </div>

          <div className={style.boxSubTitles}>
            <span>{data.runtime} min</span>
            {data.genres.map((e, i) => (
              <span key={i} className={style.genre}>
                {e.name}
              </span>
            ))}
          </div>

          <h3 className={style.tagline}>{data.tagline}</h3>

          <p className={style.overview}>
            <span className={style.topic}>Sinopse:</span>
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
