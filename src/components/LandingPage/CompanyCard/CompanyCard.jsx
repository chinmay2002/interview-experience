import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Gradient } from "../../../Pages/CompanyOverview/Gradient";
import { getColorPalette } from "../../../functions/Color";

import "./CompanyCard.scss";

const CompanyCard = (props) => {
  const { companyName, companyData } = props;
  const [colorPalette, setColorPalette] = useState({});

  useEffect(() => {
    const canvas = document.getElementById(`${companyData.name}`);
    console.log("Canvas:", canvas); // Log canvas element
    if (canvas) {
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
        const palette = getColorPalette(`${companyName}`);
        setColorPalette(palette);
        const gradient = new Gradient();
        gradient.initGradient(`${companyName}`);
      };
      image.src = companyData.logo;
    }
  }, [companyData]);

  return (
    <Link
      style={{ display: "flex", flex: 1 }}
      to={`/companyoverview/${companyName}`}
    >
      <div className="card">
        {colorPalette && (
          // <canvas style={colorPalette} id={`${companyName}`} data-transition-in>
          <>
            <div className="logo-wrap">
              <canvas
                id={`${companyData.name}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <span className="name">
              {companyData.name.length > 10
                ? companyData.abbreviation
                : companyData.name}
            </span>
          </>
          // </canvas>
        )}
      </div>
    </Link>
  );
};

export default CompanyCard;
