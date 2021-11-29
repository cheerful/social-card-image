import React from "react";

export default ({
  children,
  title = "However there is an escape hatch that you can use to add an asset outside of the module system.",
  width = "1024px",
  height = "512px",
  author_avatar = "https://nokotime.com/icon-256.png",
  author_name = "Amy Hoy"
}) => {
  const styles = {
    width: width,
    height: height,
  };
  return (
    <div id="social-card" className="social-card" style={styles}>
      <div class="inner-wrapper">
      <div class="header"></div>
      <img class="logo" alt="Noko Time Tracking" src="/noko.svg" height="45" />
      <h1>{title}</h1>
      <div class="try">
        <span>Try Noko Time Tracking free today</span>
      </div>
      <div class="footer"></div>
      </div>
    </div>
  );
};
