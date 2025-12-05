import "./Places.css";

const Places = (props) => {
  return (
    <div className="hesguudDiv">
      <div
        className="hesguud"
        style={{ backgroundImage: `url(${props.imagePath})` }}
      >
        <h3>{props.title.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export default Places;
