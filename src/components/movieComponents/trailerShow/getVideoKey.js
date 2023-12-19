import { options } from "../../..";

export default async function GetVideoKey(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`,
    options
  );

  const data = await res.json();

  const keys = data.results.map((element) => element.key);

  return keys;
}
