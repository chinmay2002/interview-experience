/* eslint-disable react/prop-types */

import { COMPANY_OVERVIEW } from "../../assets/TempCompanyDetials";

const CompanyOverview = () => {
  return (
    <div>
      <COMPANY_OVERVIEW.tcs.logo />
      <h1>{COMPANY_OVERVIEW.tcs.name}</h1>
      {COMPANY_OVERVIEW.tcs.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default CompanyOverview;
