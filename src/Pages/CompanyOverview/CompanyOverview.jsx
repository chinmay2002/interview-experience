import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Gradient } from "./Gradient";
import { COMPANY_OVERVIEW_DATA } from "../../assets/CompanyOverviewData";

import InfoCard from "./InfoCard/InfoCard";
// import RolesRecruited from "./RolesRecruited";

import "./CompanyOverview.scss";

const CompanyOverview = () => {
  const { company } = useParams();
  const CompanyLogo = COMPANY_OVERVIEW_DATA[company].logo;
  const [displayRoles, setDisplayRoles] = useState([]);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#dynamic-gradient");
  }, []);

  useEffect(() => {
    const updateDisplayRoles = () => {
      const subSectionWidth =
        document.querySelector(".sub-section")?.offsetWidth || 0;
      console.log("Sub Section Width is", subSectionWidth);
      const roleSeparatorWidth = 10; // Adjust as needed

      let totalWidth = 0;
      let rolesToDisplay = [];

      for (const role of COMPANY_OVERVIEW_DATA[company].rolesRecruited) {
        const span = document.createElement("span");
        span.textContent = role;
        document.body.appendChild(span); // Append to body for accurate measurements
        const roleWidth = span.getBoundingClientRect().width * 2.5;
        document.body.removeChild(span);
        totalWidth += roleWidth + roleSeparatorWidth;

        if (totalWidth < subSectionWidth) {
          rolesToDisplay.push(role);
          console.log("Added", role);
          console.log("total Width is", totalWidth);
        } else {
          rolesToDisplay.push(
            `+${
              COMPANY_OVERVIEW_DATA[company].rolesRecruited.length -
              rolesToDisplay.length
            } More`
          );
          break; // Stop processing roles once overflow occurs
        }
      }

      setDisplayRoles(rolesToDisplay);
    };

    // Call the function when the component mounts and when the window is resized
    updateDisplayRoles();
    window.addEventListener("resize", updateDisplayRoles);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDisplayRoles);
    };
  }, [company]);

  return (
    <div className="company-overview-wrapper">
      <div className="company-banner">
        <canvas
          style={{
            "--gradient-color-1": "#ef008f",
            "--gradient-color-2": "#6ec3f4",
            "--gradient-color-3": "#7038ff",
            "--gradient-color-4": "#e2e2e2",
          }}
          id="dynamic-gradient"
          data-transition-in
        />
        <div className="logo-wrapper">
          <div className="logo-frame">
            <CompanyLogo className="company-logo" />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="card-bottom">
          <span className="company-name">
            {COMPANY_OVERVIEW_DATA[company].name}
          </span>
          <div className="sub-section">
            <div className="sub-section-title-wrapper">
              <hr />
              <span className="sub-section-title">About</span>
              <hr />
            </div>
            {COMPANY_OVERVIEW_DATA[company].description.map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
          <div className="sub-section">
            <div className="sub-section-title-wrapper">
              <hr />
              <span className="sub-section-title">Campus History</span>
              <hr />
            </div>
            <div style={{ display: "flex", gap: "32px", width: "100%" }}>
              <InfoCard
                magnitude={
                  COMPANY_OVERVIEW_DATA[company].campusHistory
                    .onCampusRecruitments
                }
                label="On-Campus Recruitments*"
              />
              <InfoCard
                magnitude={
                  COMPANY_OVERVIEW_DATA[company].campusHistory
                    .lastYearRecruitments
                }
                label="Last-year Recruitments*"
              />
              <InfoCard
                magnitude={
                  COMPANY_OVERVIEW_DATA[company].campusHistory.topPackage
                }
                label="Top package offered*"
                subLabel="LPA"
              />
              <InfoCard
                magnitude={
                  COMPANY_OVERVIEW_DATA[company].campusHistory.averagePackage
                }
                label="Average package*"
                subLabel="LPA"
              />
            </div>
          </div>
          <div className="sub-section">
            <div className="sub-section-title-wrapper">
              <hr />
              <span className="sub-section-title">Roles Recruited</span>
              <hr />
            </div>
            <span>{displayRoles.join(" | ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
