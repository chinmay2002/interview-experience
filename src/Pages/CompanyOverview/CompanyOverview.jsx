import { useParams } from "react-router-dom";

import { COMPANY_OVERVIEW_DATA } from "../../assets/CompanyOverviewData";

const CompanyOverview = () => {
  const { company } = useParams();
  return (
    <div>
      {COMPANY_OVERVIEW_DATA[company].logo}
      <h1>{COMPANY_OVERVIEW_DATA[company].name}</h1>
      {COMPANY_OVERVIEW_DATA[company].description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default CompanyOverview;
