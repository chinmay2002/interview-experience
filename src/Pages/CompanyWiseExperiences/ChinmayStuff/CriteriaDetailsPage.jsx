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
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Criteria Details Page</h1>

        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="year" className="font-semibold">
            Search by Year:
          </label>
          <input
            type="text"
            id="year"
            placeholder="2024"
            defaultValue={"2024"}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Search
          </button>
        </div>

        {selectedYear && (
          <div className="flex flex-wrap gap-2">
            {filteredCriteria.map((criteria) => (
              <div
                key={criteria.id}
                className="bg-white w-[32%] rounded-lg shadow-xl px-4 py-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <p className="text-xl font-semibold">
                    {criteria.companyName} is Hiring{" "}
                  </p>
                  <p className="text-sm text-gray-500">{criteria.date}</p>
                </div>
                <div className="space-y-4">
                  <strong className="text-gray-700 font-semibold ">
                    CTC : <span className="font-light">{criteria.ctc}</span>{" "}
                  </strong>
                  <p className="text-gray-700 font-semibold ">
                    Job Role :{" "}
                    <span className="font-light">{criteria.jobRole}</span>
                  </p>
                  <p className="text-gray-700 font-semibold ">
                    Job Role :{" "}
                    <span className="font-light">{criteria.jobLocation}</span>
                  </p>
                  <p className="text-gray-700 font-semibold ">
                    Eligibility Criteria :{" "}
                    <span className="font-light">{criteria.jobLocation}</span>
                  </p>
                  <p className="text-gray-700 font-semibold ">
                    Eligibility Branch :{" "}
                    <span className="font-light">{criteria.jobBranch}</span>
                  </p>
                  {/* <p className="text-gray-700 ">
                Backlog : {criteria.backlogStatus}
              </p> */}
                  <p>
                    <a
                      href={criteria.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GForm Link: {criteria.gformlink}
                    </a>
                  </p>
                  <p className="font-bold">
                    Interested and Eligible Candidates are hereby Informed to
                    Fill out the Form as soon as possible
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CriteriaDetailsPage;
