import React from "react";
import "./VideoReviewSection.css";
import reviewVideo from "./video.mp4"; // Place the video in the same folder

function VideoReviewSection() {
  return (
    <section className="video-review-section">
      <div className="parallax-background">
        <div className="content-video">
          <h2>Видеообзор</h2>
          <video src={reviewVideo} controls className="review-video"></video>
          <p>В этом видеоролике представлен обзор возможностей и преимуществ суперприложений.</p>
        </div>
      </div>
    </section>
  );
}

export default VideoReviewSection;
