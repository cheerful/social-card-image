import React from "react";

export default ({
  children,
  title = "Missing Title",
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
      <div class="header"></div>
      <img class="logo" alt="Noko Time Tracking" src="https://nokotime.com/assets/noko.svg" width="200"/>
      <h1>{title}</h1>
      <div class="author">
        <img src={author_avatar} alt={author_name} /> {author_name}
      </div>
      <div class="footer"></div>
    </div>
  );
};
