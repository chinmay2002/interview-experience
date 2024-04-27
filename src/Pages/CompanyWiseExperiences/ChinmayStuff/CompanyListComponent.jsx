import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CompanyListComponent = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companiesSnapshot = await getDocs(collection(db, "companies"));
      const companiesData = companiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCompanies(companiesData);
      console.log(companies);
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      {companies.length > 0 && (
        <Select
          displayEmpty
          onChange={(event) => onSelectCompany(event.target.value)}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="" disabled>
            Select a company
          </MenuItem>
          {companies.map((company) => (
            <MenuItem key={company.id} value={company}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      )}
    </div>
  );
};

export default CompanyListComponent;
