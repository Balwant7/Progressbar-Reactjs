import { useEffect } from "react";
import { useState } from "react";

const Bar = ({ value }) => {
  const [per, setper] = useState(100);

  useEffect(() => {
    setper(Math.min(100, Math.max(value, 0)));
  });
  return (
    <>
      <div className="bar">
        <span
          className="mainbar"
          style={{ color: per > 49 ? "white" : "black" }}
        >
          {per}%
        </span>
        <div className="colordiv" style={{ width: `${value}%` }}></div>
      </div>
    </>
  );
};
export default Bar;
