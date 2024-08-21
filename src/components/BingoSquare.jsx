import { useState } from "react";
import { Icecream } from "@mui/icons-material";

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

  return (
    <div
      className={`bingoTile ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <Icecream />
      <img src={icon} alt={name} />
      <p>{name}</p>
      <p>{location}</p>
    </div>
  );
}
