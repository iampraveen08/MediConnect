import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Info from "./Info";
import DoctorsCard from "./DoctorsCard";
import AboutUs from "./AboutUs";
import BottomContent from "./BottomContent";
import Footer from "./Footer";

export default function Home({ data }) {
  const infoRef = useRef(null);

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Hero scrollToInfo={scrollToInfo} />
      <div ref={infoRef}>
        <Info />
      </div>
      <DoctorsCard data={data} />
      <AboutUs />
      <BottomContent />
      <Footer />
    </div>
  );
}
