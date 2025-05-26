import React from "react";

const SummaryInfoSideB = (props) => {
  const { info1, info2 } = props;
  return (
    <div className="p-4 ">
      <p>{info1}</p>
      <p>{info2}</p>
    </div>
  );
};

export default SummaryInfoSideB;
