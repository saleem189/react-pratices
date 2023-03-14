import { useState, useEffect } from "react";

const DivPositionOnMouseMove = () => {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    border: "1px solid #ccc",
    background: "black",
  };

  const outerDivStyles = {
    width: "90%",
    height: "500px",
    border: "1px solid #ccc",
    background: "white",
  };

  const innerDivStyles = {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
    width: "50px",
    height: "50px",
    background: "red",
    pointerEvents: "none",
    border: "1px solid #ccc",
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
        setTop(Math.floor(Math.random() * 500));
        setLeft(Math.floor(Math.random() * 500));
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex-container"style={containerStyles} >
      <div style={outerDivStyles} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove}>
        <div style={innerDivStyles} onMouseLeave={handleMouseLeave}>
          <h5>Catch me</h5>
        </div>
      </div>
    </div>
  );
};

export default DivPositionOnMouseMove;
