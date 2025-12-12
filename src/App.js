import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Gradient from "./components/Gradient";
import Footer from "./components/Footer";
import PlacesCard from "./components/PlacesCards";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <PlacesCard />
      <Map />
      <Gradient />
      <Footer />
    </div>
  );
}

export default App;
