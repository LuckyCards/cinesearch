import { options } from "../../..";

export default async function GetVideoKey(id, language= "pt-BR") {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=${language}`,
    options
  );

  const data = await res.json();

  const keys = data.results.filter(e => e.type === "Trailer").map((element) => element.key);
  console.log(keys);
  return keys;
}
