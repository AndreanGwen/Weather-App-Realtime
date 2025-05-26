import React from "react";

const Card = (props) => {
  const { date, maxTemp, image, condition, moonPhase } = props;

  return (
    <div className="border w-40 h-60 rounded-2xl flex flex-col justify-around items-center">
      <h1 className="text-sm">Date: {date}</h1>
      <h2 className="text-xs">Max Temp : {maxTemp} &deg;C</h2>
      <img src={image || "/rain.png"} alt="" style={{ width: "100px" }} />
      <p className="text-red-300">{condition}</p>
      <p className="text-xs text-center">Moon Phase : {moonPhase}</p>
    </div>
  );
};

export default Card;
