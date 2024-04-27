import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesSnapshot = await getDocs(collection(db, "companies"));
      const companiesData = companiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCompanies(companiesData);
    };

    fetchCompanies();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedCompany) {
      const lowercaseCompany = selectedCompany.toLowerCase().replace(/\s/g, "");
      navigate(`/companyoverview/${lowercaseCompany}`);
    }
  };

  return (
    <div className="w-full mx-auto flex items-center justify-center gap-2">
      <select
        value={selectedCompany}
        onChange={handleSelectChange}
        option
        className="block w-1/2 border-[#313866] focus:ring-indigo-500 focus:border-indigo-500 border-2 text-base rounded-md px-4 py-2 "
      >
        <option value="" disabled selected className="text-gray-500">
          Select a company
        </option>
        {companies.map((company) => (
          <option
            key={company.id}
            value={company.name}
            style={{ backgroundColor: "white" }}
            className="text-gray-900"
          >
            {company.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#313866] text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
