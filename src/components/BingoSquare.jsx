import { useState } from "react";
import { Icecream } from "@mui/icons-material";

export default function BingoSquare({ icon, name, onClick, isClicked }) {
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
    </div>
  );
}
