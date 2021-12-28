import React from "react";
import Earth from "../img/Background.mp4";

const BackgroundVideoEarth = ({ changeVideo }) => {
  return (
    <div className="background-content">
      {!changeVideo && (
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className="background-video"
        >
          <source src={Earth} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default BackgroundVideoEarth;
