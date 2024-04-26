// CriteriaDetailsPage.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CriteriaDetailsPage = () => {
  const [criteriaDetails, setCriteriaDetails] = useState([]);
  const [filteredCriteria, setFilteredCriteria] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const fetchCriteriaDetails = async () => {
    try {
      const criteriaSnapshot = await getDocs(collection(db, "criteria"));
      const criteriaData = criteriaSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCriteriaDetails(criteriaData);
    } catch (error) {
      console.error("Error fetching criteria details: ", error);
    }
  };

  useEffect(() => {
    fetchCriteriaDetails();
  }, []);

  const handleSearch = async () => {
    try {
      const filteredData = criteriaDetails.filter(
        (criteria) => criteria.date && criteria.date.includes(selectedYear)
      );

      // Sort criteria by date in descending order
      const sortedData = filteredData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      // Update filtered criteria state
      setFilteredCriteria(sortedData);
    } catch (error) {
      console.error("Error during search: ", error);
    }
  };

  return (
    <div>
      <h1>Criteria Details Page</h1>

      <div>
        <label htmlFor="year">Search by Year:</label>
        <input
          type="text"
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {selectedYear && (
        <ul>
          {filteredCriteria.map((criteria) => (
            <li key={criteria.id}>
              <strong>Date:</strong> {criteria.date},{" "}
              <strong>Selection Message:</strong> {criteria.selectionMessage},{" "}
              <strong>Link:</strong> {criteria.link},{" "}
              <strong>Company Name:</strong> {criteria.companyName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CriteriaDetailsPage;
