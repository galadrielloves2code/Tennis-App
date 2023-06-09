import React from "react";

const Flag = ({ countryCode, altText }) => {
  const flagPath = `./assets/flags/${countryCode}.png`;

  return (
    <img
      src={flagPath}
      alt={altText}
      style={{ height: "20px", borderRadius: "2px" }}
    />
  );
};

export default Flag;
