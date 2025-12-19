import "./Day.css";

const Day = (props) => {
  return (
    <div className="ehniiOdor" style={{ backgroundColor: props.colorPath }}>
      <div>
        <h1>{props.title}</h1>
        <div className="locationDiv">
          <img className="pin" src="/img/pin.png" alt="pin" />
          <p>{props.location}</p>
        </div>
      </div>

      <div className="dayiinBaruunTaliinBackground">{props.days}</div>
    </div>
  );
};

export default Day;
