import "./Gradient.css";

const PricingCard = ({ title, price, subtitle, features, popular }) => {
  return (
    <div className="pricingCard">
      <div className="pricingHeader">
        <img style={{ height: "35px" }} src="/img/heart.png" />
        <h3>{title}</h3>
      </div>

      <h1 className="price">{price}</h1>
      <div
        style={{
          display: "flex",
          gap: "60px",
        }}
      >
        <p className="subtitle">{subtitle}</p>
        {popular && <span className="popularTag">Popular</span>}
      </div>

      <div className="features">
        <h4>Includes:</h4>
        <ul>
          {features.map((feature, i) => (
            <div style={{ display: "flex", gap: "10px" }}>
              <img style={{ height: "18px" }} src="/img/check.png" />
              <li key={i}>{feature}</li>
            </div>
          ))}
        </ul>
      </div>

      <button className="selectBtn">Select package</button>
    </div>
  );
};

export default PricingCard;
