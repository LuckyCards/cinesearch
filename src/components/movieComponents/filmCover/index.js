import style from "./style.module.scss";

export default function FilmCover({ url, alt, ...rest }) {
  const imageDefaultUrl = "https://image.tmdb.org/t/p/original";
  if (!url) return;

  return (
    <div className={style.film_cover}>
      <img className={style.image} src={`${imageDefaultUrl}/${url}`} alt={alt} {...rest}></img>
    </div>
  );
}
