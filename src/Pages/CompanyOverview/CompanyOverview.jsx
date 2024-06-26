import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gradient } from "./Gradient";
import { COMPANY_OVERVIEW_DATA } from "../../assets/CompanyOverviewData";
import { getColorPalette } from "../../functions/Color";
import TabToggler from "../../components/TabToggler/TabToggler";

import InfoCard from "./InfoCard/InfoCard";
// import RolesRecruited from "./RolesRecruited";
import PlacementDetailsComponent from "../CompanyWiseExperiences/ChinmayStuff/PlacementDetailsComponent";

import "./CompanyOverview.scss";

const CompanyOverview = () => {
  const { company } = useParams();
  // const CompanyLogo = COMPANY_OVERVIEW_DATA[company].logo;
  const [displayRoles, setDisplayRoles] = useState([]);
  const [colorPalette, setColorPalette] = useState({});

  useEffect(() => {
    const canvas = document.getElementById("company-logo");
    const context = canvas.getContext("2d");

    const image = new Image();
    image.onload = () => {
      context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const palette = getColorPalette();
      setColorPalette(palette);
      const gradient = new Gradient();
      gradient.initGradient("#dynamic-gradient");
    };
    image.src = COMPANY_OVERVIEW_DATA[company].logo;
  }, []);

  useEffect(() => {
    const updateDisplayRoles = () => {
      const subSectionWidth =
        document.querySelector(".sub-section")?.offsetWidth || 0;
      // console.log("Sub Section Width is", subSectionWidth);
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
          // console.log("Added", role);
          // console.log("total Width is", totalWidth);
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
  console.log(COMPANY_OVERVIEW_DATA[company].name);
  return (
    <div className="company-overview-wrapper">
      <div className="company-banner">
        {colorPalette && (
          <canvas
            style={colorPalette}
            id="dynamic-gradient"
            data-transition-in
          />
        )}
        <div className="logo-wrapper">
          <div className="logo-frame">
            {/* <CompanyLogo className="company-logo" /> */}
            {/* <img
              src={TCS}
              id="company-logo"
              alt="TCS LOGO"
              style={{ width: "100%" }}
            /> */}
            <canvas
              id="company-logo"
              style={{ width: "100%", height: "100%" }}
            />
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
          <TabToggler />
          <div className="w-full ">
            <PlacementDetailsComponent
              selectedCompany={COMPANY_OVERVIEW_DATA[company].name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
