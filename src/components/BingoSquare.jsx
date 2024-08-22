import { useState, createElement } from "react";
import * as Icons from "@mui/icons-material";

export default function BingoSquare({
  icon,
  name,
  text,
  location,
  onClick,
  isClicked,
}) {
  const handleClick = () => {
    onClick(name);
  };

  const IconComponent = Icons[icon];
  const iconProps = {
    className: "bingoIcon",
    style: { fontSize: "70px" },
  };

  return (
    <div
      className={`bingoTile ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <p className="tileName">{name}</p>
      {IconComponent && createElement(IconComponent, iconProps)}
      {/* <img src={icon} alt={name} /> */}
      {location && (
        <div className="locationWrapper">
          <p className="tileLocation">{location}</p>
        </div>
      )}
    </div>
  );
}
