import Header from "./Header";
import Hero from "./Hero";
import Places from "./Places";
import Map from "./Map";
import Gradient from "./Gradient";
import Footer from "./Footer";

import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="cardSection">
        <Places
          imagePath="/img/sec2Location1.png"
          title="Terkhiin Tsagaan Lake"
        />
        <Places
          imagePath="/img/sec2Location2.png"
          title="Amarbayasgalant Monastry"
        />
        <Places imagePath="/img/sec2Location3.png" title="Khusvgul Lake" />
        <Places imagePath="/img/sec2Location4.png" title="Khorgiin Togoo" />
      </div>
      <Map />
      <Gradient />
      <Footer />
    </div>
  );
};

export default Container;
