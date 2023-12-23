import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import GetVideoKey from "./getVideoKey";
import style from "./style.module.scss";

export default function TrailerShow({ id }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const fetchKeys = async () => {
      let result = await GetVideoKey(id);
      if(!result.length){
        result = await GetVideoKey(id, "en-US");
      }
      setKeys(result);
    };
    fetchKeys();
  }, [id]);

  const _onReady = (evento) => {
    evento.target.pauseVideo();
  };

  return (
    <div className={style.container}>
      {keys[0] ? 
        <>
          <YouTube
            className={style.video}
            videoId={keys[0]}
            onReady={_onReady}
            onError={() => keys.length && setKeys([])}
          /> 
          {/* <img src={`https://img.youtube.com/vi/${keys[0]}/maxresdefault.jpg`} /> */}
        </>
      : <p>Sem vídeos disponivel</p>}
    </div>
  );
}
