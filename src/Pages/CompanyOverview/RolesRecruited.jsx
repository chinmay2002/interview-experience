/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const RolesRecruited = ({ roles }) => {
  const [displayRoles, setDisplayRoles] = useState([]);

  useEffect(() => {
    const subSectionWidth =
      document.querySelector(".sub-section")?.offsetWidth || 0;
    const roleWrapper = document.querySelector(".roles-wrapper");
    const roleSeparatorWidth = 10; // Adjust as needed

    let totalWidth = 0;
    let rolesToDisplay = [];

    roles.forEach((role, index) => {
      const roleWidth =
        roleWrapper?.appendChild(document.createElement("span")).offsetWidth ||
        0;
      totalWidth += roleWidth + roleSeparatorWidth;

      if (totalWidth < subSectionWidth) {
        rolesToDisplay.push(role);
      } else {
        rolesToDisplay.push(`+${roles.length - index} More`);
        return false; // Break the loop once overflow occurs
      }
    });

    setDisplayRoles(rolesToDisplay);
  }, [roles]);

  return <div className="roles-wrapper">{displayRoles.join(" | ")}</div>;
};

export default RolesRecruited;
