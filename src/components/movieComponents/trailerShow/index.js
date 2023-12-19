import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import GetVideoKey from "./getVideoKey";
import style from "./style.module.scss";

export default function TrailerShow({ id }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const fetchKeys = async () => {
      const result = await GetVideoKey(id);
      setKeys(result);
    };
    fetchKeys();
  }, [id]);

  const _onReady = (evento) => {
    evento.target.pauseVideo();
  };

  return (
    <div className={style.container}>
      <YouTube
        className={style.video}
        videoId={keys[0]}
        onReady={_onReady}
      />
    </div>
  );
}
