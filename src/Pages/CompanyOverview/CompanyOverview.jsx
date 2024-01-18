import { useParams } from "react-router-dom";

import { COMPANY_OVERVIEW_DATA } from "../../assets/CompanyOverviewData";

import "./CompanyOverview.css";

const CompanyOverview = () => {
  const { company } = useParams();
  const CompanyLogo = COMPANY_OVERVIEW_DATA[company].logo;
  return (
    <div className="company-overview-wrapper">
      <div
        style={{
          width: "max-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="company-logo-frame">
          <CompanyLogo className="company-logo" />
        </div>
        <span className="company-name">
          {COMPANY_OVERVIEW_DATA[company].name}
        </span>
      </div>
      <div className="sub-section">
        <div className="sub-section-title-wrapper">
          <hr />
          <span className="sub-section-title">About</span>
          <hr />
        </div>
        {COMPANY_OVERVIEW_DATA[company].description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="sub-section">
        <div className="sub-section-title-wrapper">
          <hr />
          <span className="sub-section-title">Campus History</span>
          <hr />
        </div>
      </div>
      <div className="sub-section">
        <div className="sub-section-title-wrapper">
          <hr />
          <span className="sub-section-title">Roles Recruited</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
