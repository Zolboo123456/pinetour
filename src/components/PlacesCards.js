import Places from "./Places";
import "./PlacesCard.css";

const PlacesCard = () => {
  return (
    <div className="cardSectionContainer">
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
    </div>
  );
};

export default PlacesCard;
