import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img className="mainLogo" src="/img/logo1.png" />
      </div>

      <div className="navbar">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className="language">
        <button className="profile">EN</button>
      </div>
    </div>
  );
};

export default Header;
