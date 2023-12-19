import style from "./style.module.scss";
import { options } from "../../..";
import { useState, useEffect } from "react";

export default function MovieGalery({ id, type}) {
  const imageDefaultUrl = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getMovieGalery() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=pt&language=pt`,
        options
      );

      setData(await res.json());
    }

    getMovieGalery();
  }, [id]);

  useEffect(() => {
    console.log(data[type]);
  }, [data, type]);

  const imgUrl = data[type] ??? ajudaaaaa

  return <img className={style.image} src={`${imageDefaultUrl}`} />;
}
