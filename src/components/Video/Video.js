import React from "react";
import "./Video.css";
import Popup from "../Popup/Popup";

function Video({ isOpen, title, videoLink, ...props }) {

  function getLink() {
    if (videoLink.includes('youtube')) {
      return videoLink.replace('/watch?v=', '/embed/')
    }
    return videoLink
  }

  return (
    <Popup isOpen={isOpen}>
      <div className="video__container">
        <iframe
          className="video__iframe"
          width="720"
          height="405"
          src={getLink()}
          title={title}
        />
      </div>
    </Popup>
  );
}

export default Video;
