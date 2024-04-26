import { useState } from "react";

import "./TabToggler";

const TabToggler = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick("button1")}
        className={activeButton === "button1" ? "active" : "inactive"}
      >
        Interview Experiences
      </button>
      <button
        onClick={() => handleButtonClick("button2")}
        className={activeButton === "button1" ? "active" : "inactive"}
      >
        Preparation Guide
      </button>
      {activeButton === "button1" && <div>Content for Button 1</div>}
      {activeButton === "button2" && <div>Content for Button 2</div>}
    </div>
  );
};

export default TabToggler;
