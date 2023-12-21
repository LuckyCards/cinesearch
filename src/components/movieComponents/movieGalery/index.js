import style from "./style.module.scss";
import { options } from "../../..";
import { useState, useEffect } from "react";

export default function MovieGalery({ id, type = "backdrops" }) {
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
  }, [data]);

  const imgUrl = data?.[type]?.sort((a, b) => b.vote_average - a.vote_average);

  if (imgUrl?.[0]?.file_path) {
    return (
      <img
        className={style.image}
        src={`${imageDefaultUrl}/${imgUrl?.[0]?.file_path}`}
      />
    );
  }  
}
