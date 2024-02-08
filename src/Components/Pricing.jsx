import React, { useState } from "react";
import { BiCaretDownFill } from "react-icons/bi";
import "./pricing.css";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const buttonStyle = (index) => ({
    backgroundColor: hoveredIndex === index ? "white" : "#ff3e66",
    borderColor: "#FF3E66",
    color: hoveredIndex === index ? "#FF3E66" : "white",
    borderRadius: "30px",
    width: "150px",
    height: "50px",
  });

  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center", fontSize: "36px", fontWeight: "800" }}>
        Simple Pricing For EveryOne
      </h3>
      <p style={{ textAlign: "center", fontWeight: "400", fontSize: "15px" }}>
        The full monty spiffing good time no biggie cack grub fantastic.
      </p>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-2">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="billingPeriod"
            id="monthly"
            value="monthly"
            checked={selectedOption === "monthly"}
            onChange={() => setSelectedOption("monthly")}
          />
          <label className="form-check-label" htmlFor="monthly">
            Monthly
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="billingPeriod"
            id="yearly"
            value="yearly"
            checked={selectedOption === "yearly"}
            onChange={() => setSelectedOption("yearly")}
          />
          <label className="form-check-label" htmlFor="yearly">
            Yearly
          </label>
        </div>
      </div>
      {selectedOption === "monthly" ? (
        <div className="container">
          <div className="row">
            {monthlyCards.map((card, index) => (
              <div className="col-md-4 mt-5" key={index}>
                <div className="card" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}>
                  <h6 className="m-3" style={{ fontSize: "20px", fontWeight: "500" }}>{card.title}</h6>
                  <span className="d-flex align-items-center m-3" style={{ fontSize: "36px", fontWeight: "700" }}>
                    {" "}
                    <i className="bi bi-currency-rupee" style={{ fontSize: "20px", fontWeight: "700", alignItems: "center" }}></i>{" "}
                    {card.price}
                  </span>
                  <p className="m-2" style={{ fontWeight: "400", fontSize: "14px" }}>{card.description}</p>
                  <hr />
                  {card.features.map((feature, idx) => (
                    <div className="m-3 d-flex" key={idx}>
                      <i className="bi bi-check-circle-fill" style={{ width: "25px", height: "25px" }}></i>
                      <p style={{ fontSize: "15px", fontWeight: "500" }}>{feature}</p>
                    </div>
                  ))}
                  <div className="m-3">
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                      style={buttonStyle(index)}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {yearlyCards.map((card, index) => (
              <div className="col-md-4 mt-5" key={index}>
                <div className="card" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}>
                  <h6 className="m-3" style={{ fontSize: "20px", fontWeight: "500" }}>{card.title}</h6>
                  <span className="d-flex align-items-center m-3" style={{ fontSize: "36px", fontWeight: "700" }}>
                    {" "}
                    <i className="bi bi-currency-rupee" style={{ fontSize: "20px", fontWeight: "700", alignItems: "center" }}></i>{" "}
                    {card.price}
                  </span>
                  <p className="m-2" style={{ fontWeight: "400", fontSize: "14px" }}>{card.description}</p>
                  <hr />
                  {card.features.map((feature, idx) => (
                    <div className="m-3 d-flex" key={idx}>
                      <i className="bi bi-check-circle-fill" style={{ width: "25px", height: "25px" }}></i>
                      <p style={{ fontSize: "15px", fontWeight: "500" }}>{feature}</p>
                    </div>
                  ))}
                  <div className="m-3">
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                      style={buttonStyle(index)}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const monthlyCards = [
  {
    title: "Fresh",
    price: "499 / month",
    description: "Get your 14 day free trial.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
  {
    title: "Sweet",
    price: "499 / month",
    description: "Billed Rs 10K per website per annually.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
  {
    title: "Juicy",
    price: "749 / month",
    description: "Billed Rs 10K per website per annually.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
];

const yearlyCards = [
  {
    title: "Fresh",
    price: "10K / year",
    description: "Get your 14 day free trial.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
  {
    title: "Sweet",
    price: "15K / year",
    description: "Billed Rs 10K per website per annually.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
  {
    title: "Juicy",
    price: "20K / year",
    description: "Billed Rs 10K per website per annually.",
    features: ["60-days chat history", "15 GB Cloud Storage", "24/7 Support On"],
  },
];

export default Pricing;
