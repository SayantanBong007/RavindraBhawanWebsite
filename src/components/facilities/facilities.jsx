import React, { useEffect } from "react";
import Card from "./card.jsx";
import data from "./data.js";
import "../../app.css";

export default function Facilities() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const intersecting = entry.isIntersecting;
  //       // entry.target.style.backgroundColor = intersecting ? "blue" : "orange";

  //       entry.target.classList.toggle("show", intersecting);
  //     });
  //   });
  //   observer.observe(document.getElementById("about-png"));

  //   return () => {
  //     observer.unobserve(document.getElementById("about-png"));
  //   };
  // }, []);

  return (
    <React.Fragment>
      <section className="facilitiesContainer">
        <section className="aboutMain" id="About">
          <div className="aboutContent">
            <h1>About Us</h1>
            <p>
              Ravindra Bhawan, established originally as the Engineer Student's
              Hostel, was inaugurated by Shri V.V. Giri, Chancellor of the then
              University of Roorkee (now Indian Institute of Technology Roorkee)
              and Governor of Uttar Pradesh, on the auspicious day of Tuesday,
              November 24th, 1959 (3 Margshirsha 1881 Saka, according to the
              Hindi calendar). Since then, it has held a significant place among
              the hostels on this esteemed campus. <br />
              <br /> Today, Ravindra Bhawan stands as a symbol of cultural
              heritage and academic excellence within the institute. Renamed in
              honor of Gurudev Rabindranath Tagore, it reflects his legacy of
              creativity and learning. Known for its serene environment and
              well-planned architecture, the Bhawan offers spacious rooms and
              lush green surroundings that create a peaceful atmosphere for
              students. The administration has ensured top-notch facilities,
              including a well-equipped club, sports amenities such as badminton
              and volleyball courts, and a study room. With 24-hour Wi-Fi
              connectivity, a canteen, tailor, and laundry services, Ravindra
              Bhawan fosters an environment that promotes the holistic
              development of every IITian.
            </p>
          </div>
          <div className="aboutImg " id="about-png">
            <img src="./Images/about.jpg" />
          </div>
        </section>
        <section className="aboutMainMobile" id="About">
          <div className="aboutContent">
            <h1>About Us</h1>
            <div className="aboutImgMobile">
              <img src="./Images/hero-min.jpg" />
            </div>
            <p>
              Ravindra Bhawan stands as a symbol of cultural heritage and
              academic excellence in the institute. Known for its serene
              environment and well-planned architecture, it offers spacious
              rooms and lush green surroundings that create a peaceful
              atmosphere for students. Named in honor of Gurudev Rabindranath
              Tagore, the Bhawan embodies his legacy of creativity and learning.
              The administration has ensured top-notch facilities, including a
              well-equipped club, sports amenities such as badminton and
              volleyball court and a study room. With 24-hour Wi-Fi
              connectivity, a canteen, tailor, and laundry services, Ravindra
              Bhawan fosters an environment that promotes the holistic
              development of every IITian.
            </p>
          </div>
        </section>
        <section id="Facilities">
          {data.map((e) => {
            return <Card sent={e} />;
          })}
        </section>
      </section>
    </React.Fragment>
  );
}
