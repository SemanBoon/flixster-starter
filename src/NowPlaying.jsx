import React from "react";
import "./NowPlaying.css";

function NowPlaying({ onNowPlayingClick }) {

  return (
    <button className="now-playing-button" onClick={onNowPlayingClick}>
      Now Playing
    </button>
  );
}

export default NowPlaying;
