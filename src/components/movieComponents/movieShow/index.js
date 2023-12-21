import { useState, useEffect } from "react";
import FilmCover from "../filmCover";
import { options } from "../../..";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function MovieShow({ url, name, id }) {
  if (!url) return;
  return (
    <Link to={`/filmes/${id}/details`} className={style.container}>
      <FilmCover url={url} />
      <p className={style.name}>{name}</p>
    </Link>
  );
}
