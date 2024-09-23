import React from "react";

export default function Footer() {
  return (
    <>
      <section className="footerMain" id="ContactUs">
        <img className="footerTopBg" src="./Images/RadialCircle.svg" />
        <img className="footerBottomBg" src="./Images/RadialCircle.svg" />

        <div className="leftSection">
          <div className="topLeftSection">
            <h1 className="footerHead">Contact Us</h1>
            <p>
              <a
                href="mailto:ravindrabhawan@iitr.ac.in"
                style={{ zIndex: "50" }}
              >
                ravindrabhawan@iitr.ac.in
              </a>
            </p>
            <br />
            <p>9456318500</p>
            <br />
            <p>
              Ravindra Bhawan, <br />
              IIT Roorkee, Roorkee-247667 <br />
              Uttrakhand, IN
            </p>{" "}
            <br />
          </div>
          <div className="bottomLeftSection">
            <p>
              <a href="https://channeli.in/bhawan_app/complain" target="_blank">
                Feedback Form
              </a>
            </p>
            <p>
              <a href="https://channeli.in/bhawan_app/complain" target="_blank">
                Register a Complaint
              </a>
            </p>
            <p>
              <a
                href="https://channeli.in/bhawan_app/book_room"
                target="_blank"
              >
                Book Guest Room
              </a>
            </p>
          </div>
        </div>

        <div className="rightSection">
          <h1 className="footerHead">Find Us here</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.9824063060346!2d77.89002727619649!3d29.86478122705954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb30062a1302f%3A0x1a25a2679532dc9b!2sRavindra%20Bhawan!5e0!3m2!1sen!2sin!4v1726145303422!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
