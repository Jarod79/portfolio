import React from "react";
import Office from "../video/Background2.mp4";

const BackgroundVideo = ({ changeVideo }) => {
  return (
    <div className="background-content">
      {changeVideo && (
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className="background-video"
        >
          <source src={Office} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
