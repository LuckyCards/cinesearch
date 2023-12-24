import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import GetVideoKey from "./getVideoKey";
import style from "./style.module.scss";

export default function VideoShow({ id, isThumbnail = false, setThumbnailUrl }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const fetchKeys = async () => {
      let result = await GetVideoKey(id);
      if (!result.length) {
        result = await GetVideoKey(id, "en-US");
      }
      setKeys(result);
      if (isThumbnail && typeof setThumbnailUrl === 'function' && result[0]) {
        setThumbnailUrl(`https://img.youtube.com/vi/${result[0]}/maxresdefault.jpg`);
      }
    };
    fetchKeys();
  }, [id]);
  

  const _onReady = (evento) => {
    evento.target.pauseVideo();
  };

  if (isThumbnail == false) {
    return (
      <div className={style.container}>
        {keys[0] ? (
          <YouTube
            className={style.video}
            videoId={keys[0]}
            onReady={_onReady}
            onError={() => keys.length && setKeys([])}
          />
        ) : (
          <p>Sem vídeos disponivel</p>
        )}
      </div>
    );
  } else {
    return null;
  }
}
