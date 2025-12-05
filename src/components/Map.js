import "./Map.css";
import Day from "./Day.js";

const Map = () => {
  return (
    <div className="mapContainer">
      <div className="mapTitle">
        <h1>Destination of Our Agency</h1>
        <p className="packYourBag">Pack Your Bags And Get Ready</p>
      </div>

      <div className="locations">
        <Day
          colorPath="rgba(238, 233, 217, 1)"
          title="Sukhbaatar Square"
          location="Ulaanbaatar"
          days="Day 1"
        />
        <Day
          colorPath="rgba(139, 184, 193, 0.8)"
          title="Amarbayasgalant Monastry"
          location="Bulgan"
          days="Day 2"
        />
        <Day
          colorPath="rgba(170, 216, 215, 0.8)"
          title="Khorgiin Togoo"
          location="Arkhangai"
          days="Day 3"
        />
        <Day
          colorPath="rgba(139, 192, 189, 0.8)"
          title="Terkhiin Tsagaan Lake"
          location="Arkhangai"
          days="Day 4"
        />
        <Day
          colorPath="rgba(151, 204, 224, 0.8)"
          title="Khuvsgul Lake"
          location="Khuvsgul"
          days="Day 5"
        />
      </div>
    </div>
  );
};

export default Map;
