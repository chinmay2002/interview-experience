import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-white border p-2 border-[#313866] rounded-md shadow-sm focus:outline-none focus:[#313866] focus:[#313866]"
      >
        <option value="companyform">Company Form</option>
        <option value="placementform">Placement Form</option>
        <option value="companycriteriaform">Company Criteria Form</option>
      </select>
      {selectedOption && (
        <Link to={`/${selectedOption}`}>
          <button className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#313866] rounded-md hover:bg-[#313866] focus:outline-none focus:bg-[#313866]">
            Go
          </button>
        </Link>
      )}
      <h2>Hello World</h2>
    </div>
  );
};

export default Dropdown;
