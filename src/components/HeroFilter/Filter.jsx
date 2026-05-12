import { useState } from "react";
import "./Filter.css";

const makes = ["Any Make", "Toyota", "Honda", "BMW", "Mercedes", "Ford", "Audi", "Hyundai"];
const models = ["Any Model", "Corolla", "Civic", "3 Series", "C-Class", "Mustang", "A4", "Tucson"];
const transmissions = ["Any Transmission", "Automatic", "Manual", "CVT", "Semi-Automatic"];

export default function HeroFilter() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [budget, setBudget] = useState(50000);

  const handleSearch = () => {
    console.log({ make, model, transmission, budget });
    // Hook up your search/filter logic here
  };

  return (
  <div className="hero-filter">
      <h2 className="filter-heading">Find Your Car</h2>

      <div className="filter-group">
        <label className="filter-label">Make</label>
        <select className="filter-select" value={make} onChange={(e) => setMake(e.target.value)}>
          {makes.map((m) => (
            <option key={m} value={m === "Any Make" ? "" : m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Model</label>
        <select className="filter-select" value={model} onChange={(e) => setModel(e.target.value)}>
          {models.map((m) => (
            <option key={m} value={m === "Any Model" ? "" : m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Transmission</label>
        <select
          className="filter-select"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          {transmissions.map((t) => (
            <option key={t} value={t === "Any Transmission" ? "" : t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">
          Budget <span className="budget-value">${budget.toLocaleString()}</span>
        </label>
        <input
          type="range"
          className="filter-range"
          min={5000}
          max={200000}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <div className="budget-minmax">
          <span>$5,000</span>
          <span>$200,000</span>
        </div>
      </div>

      <button className="filter-btn" onClick={handleSearch}>
        Search Cars
      </button>
    </div>
  );
}