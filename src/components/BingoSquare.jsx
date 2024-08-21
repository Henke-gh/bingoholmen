import { useState } from "react";

export default function BingoSquare({ icon, name, onClick, isClicked }) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div
      className={`bingoSquare ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}
