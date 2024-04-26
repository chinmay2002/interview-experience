/* eslint-disable react/prop-types */

import "./InfoCard.css";

const InfoCard = (props) => {
  const { magnitude, label, subLabel } = props;
  return (
    <div className="info-card">
      <div className="top">
        <hr />
        <span className="magnitude">{magnitude}</span>
        {subLabel && <span className="sub-label">{subLabel}</span>}
      </div>
      <div className="bottom">
        <span className="label">{label}</span>
      </div>
    </div>
  );
};

export default InfoCard;
