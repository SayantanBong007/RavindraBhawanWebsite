import React from "react";
import "../app.css";

export default function Landing() {
  return (
    <section className="landingMainContainer" id="Home">
      {console.log("Developed by Sayantan")}
      {console.log("Designed by Parth")}
      <div className="landingBox">
        <img className="logo" src="./Images/logo.jpg" />
        <div className="landingContent">
          <h1 className="landingHead">Welcome to Ravindra Bhawan</h1>
          <p className="landingBody">
            In honor of the legendary poet, writer, and Nobel laureate, Gurudev
            Rabindranath Tagore
          </p>
        </div>
      </div>
      <div class="slider">
        <img src="./Images/slider.png" alt="" />
      </div>
    </section>
  );
}
