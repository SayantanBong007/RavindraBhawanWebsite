import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Footer from "./components/footer";
import Events from "./components/events";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import OtherFacilities from "./components/otherFacilities";
import TeamSection from "./components/team/teamSection";

export default function App() {
  const [pageLoaded, setPageloaded] = useState(false);

  useEffect(() => {
    setPageloaded(true);
  }, []);

  return (
    pageLoaded && (
      <React.Fragment>
        <Navbar />
        <Landing />
        <div className="landingDiv" />
        {/* <About /> */}
        <Facilities />
        {/* <OtherFacilities /> */}
        <TeamSection />

        <Events />
        <Footer />
      </React.Fragment>
    )
  );
}
