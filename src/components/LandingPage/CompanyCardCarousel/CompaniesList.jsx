import { COMPANY_OVERVIEW_DATA } from "../../../assets/CompanyOverviewData";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./CompanyCardCarousel.scss";

const CompaniesList = () => {
  // Step 1: Get the keys (company names) from the COMPANY_OVERVIEW_DATA object
  const companyNames = Object.keys(COMPANY_OVERVIEW_DATA);

  // Step 2: Randomly select four keys
  const randomKeys = [];
  while (randomKeys.length < 4) {
    const randomIndex = Math.floor(Math.random() * companyNames.length);
    const randomName = companyNames[randomIndex];
    if (!randomKeys.includes(randomName)) {
      randomKeys.push(randomName);
    }
  }

  // Step 3: Retrieve the corresponding company data and key for the selected keys
  const selectedCompanies = randomKeys.map((name) => ({
    key: name,
    data: COMPANY_OVERVIEW_DATA[name],
  }));

  return (
    <div className="carousel-wrapper">
      {/* Step 4: Render CompanyCard components with selected company data and key */}
      {selectedCompanies.map(({ key, data }, index) => (
        <CompanyCard key={index} companyName={key} companyData={data} />
      ))}
    </div>
  );
};

export default CompaniesList;
