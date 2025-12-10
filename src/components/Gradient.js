import "./Gradient.css";
import PricingCard from "./PricingCard";

const Gradient = () => {
  const packages = [
    {
      title: "Budget Package",
      price: "500$",
      subtitle: "Essentials Covered",
      features: [
        "Group transportation (shared van/bus)",
        "Standard accommodation (yurt or guesthouse)",
        "Guided lake tour",
        "1 meal per day (breakfast)",
      ],
      popular: false,
    },
    {
      title: "Standard Package",
      price: "800$",
      subtitle: "Balanced Adventure",
      features: [
        "Comfortable transportation (mini-bus)",
        "Mid-range accommodation (private yurt or lodge)",
        "Guided lake tour + nearby hiking",
        "2 meals per day (breakfast and dinner)",
      ],
      popular: true,
    },
    {
      title: "Luxury Package",
      price: "1200$",
      subtitle: "Ultimate Comfort",
      features: [
        "Private transportation (SUV)",
        "Luxury accommodation (lakefront lodge)",
        "Guided tours (lake + reindeer herder experience)",
        "All meals included (local cuisine)",
      ],
      popular: false,
    },
  ];

  return (
    <div className="gradient">
      <h1>Pricing of Our Agency</h1>
      <p>Choose a Package That's Right For You</p>

      <div className="pricingContainer">
        {packages.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Gradient;
