import React from "react";
import "./backgroundVideo.css";
import video from "../img/Background.mp4";

const BackgroundVideo = () => {
  return (
    <div className="background-content">
      <video autoPlay="autoplay" loop="loop" muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
