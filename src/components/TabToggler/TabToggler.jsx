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
        style={{
          backgroundColor: activeButton === "button1" ? "blue" : "grey",
        }}
      >
        Interview Experiences
      </button>
      <button
        onClick={() => handleButtonClick("button2")}
        style={{
          backgroundColor: activeButton === "button2" ? "blue" : "grey",
        }}
      >
        Preparation Guide
      </button>
      {activeButton === "button1" && <div>Content for Button 1</div>}
      {activeButton === "button2" && <div>Content for Button 2</div>}
    </div>
  );
};

export default TabToggler;
