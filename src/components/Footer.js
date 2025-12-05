import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="division">
        <div className="ficon">
          <img className="icon" src="/img/facebook.png" />
          <p>Facebook</p>
        </div>
        <div className="ficon">
          <img className="icon" src="/img/instagram.png" />
          <p>Instagram</p>
        </div>
      </div>
      <div>
        <img className="bottomLogo" src="/img/logo1.png" />
      </div>
    </div>
  );
};

export default Footer;
