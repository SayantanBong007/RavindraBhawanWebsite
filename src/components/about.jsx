import React from "react";
import "../app.css";

export default function About() {
  return (
    <section className="aboutMain" id="About">
      <div className="aboutContent">
        <h1>About Us</h1>
        <p>
          Ravindra Bhawan stands as a symbol of cultural heritage and academic
          excellence in the institute. Known for its serene environment and
          well-planned architecture, it offers spacious rooms and lush green
          surroundings that create a peaceful atmosphere for students. Named in
          honor of Gurudev Rabindranath Tagore, the Bhawan embodies his legacy
          of creativity and learning. The administration has ensured top-notch
          facilities, including a well-equipped club, sports amenities such as
          badminton and volleyball court and a study room. With 24-hour Wi-Fi
          connectivity, a canteen, tailor, and laundry services, Ravindra Bhawan
          fosters an environment that promotes the holistic development of every
          IITian.
        </p>
        {console.log("hi")}
      </div>
      <div className="aboutImg">
        <img className="aboutImg" src="./Images/about.jpg" />
      </div>
    </section>
  );
}
