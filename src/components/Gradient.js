import "./Gradient.css";

const Gradient = () => {
  return (
    <div className="gradient">
      <h1 className="gradientTitle">Pricing of Our Agency</h1>
      <p className="gradientP">Choose a package That's right for you.</p>
      <div className="pricing">
        <div className="budget">
          <div className="packageTitle">
            <img className="heart" src="/img/heart.png" />
            <p>Budget Package</p>
          </div>

          <p className="dollar">500$</p>
          <p className="desc">Essentials Covered</p>

          <p>
            <b>Includes:</b>
          </p>

          <button className="pbutton">Select Package</button>
        </div>
        <div className="standard">
          <div className="packageTitle">
            <img className="heart" src="/img/heart.png" />
            <p>Standard Package</p>
          </div>

          <p className="dollar">800$</p>
          <div className="popularDiv">
            <p className="desc">Balanced Advanture</p>
            <button className="popularButton">Popular</button>
          </div>

          <p>
            <b>Includes:</b>
          </p>

          <ul className="standardDiv">
            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Comfortable transportation (mini-bus)</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Mid-range accommodation (private yurt or lodge)</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Guided lake tour + nearby hiking</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>2 meals per day (breakfast and dinner)</p>
              </div>
            </li>
          </ul>

          <button className="pbutton">Select Package</button>
        </div>
        <div className="luxury">
          <div className="packageTitle">
            <img className="heart" src="/img/heart.png" />
            <p>Luxury Package</p>
          </div>

          <p className="dollar">1200$</p>
          <p className="desc">Ultimate Comfort</p>

          <p>
            <b>Includes:</b>
          </p>

          <ul className="luxuryDiv">
            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Private transportation (SUV)</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Luxury accommodation (lakefront lodge)</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>Guided tours (lake + reindeer herder experience)</p>
              </div>
            </li>

            <li>
              <div className="checkDiv">
                <img className="check" src="/img/check.png" />
                <p>All meals included (local cuisine)</p>
              </div>
            </li>
          </ul>

          <button className="pbutton">Select Package</button>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
