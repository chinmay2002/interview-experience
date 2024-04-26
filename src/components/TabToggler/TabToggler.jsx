import { useState } from "react";

import "./TabToggler.scss";

const TabToggler = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="tab-toggler">
      <button
        onClick={() => handleButtonClick("button1")}
        className={`button ${
          activeButton === "button1" ? "active" : "inactive"
        }`}
      >
        Interview Experiences
      </button>
      <button
        onClick={() => handleButtonClick("button2")}
        className={`button ${
          activeButton === "button2" ? "active" : "inactive"
        }`}
        disabled
        style={{ cursor: "not-allowed" }}
      >
        Preparation Guide
      </button>
    </div>
  );
};

export default TabToggler;
