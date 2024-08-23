import { useState, useEffect } from "react";
import BingoCard from "../components/BingoCard.jsx";
import { createBingoTiles } from "../functions/helpers.js";

export default function Bingo() {
  const [bingoTiles, setBingoTiles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBingoTiles(createBingoTiles());
  }, []);

  const reshuffleTiles = () => {
    setBingoTiles(createBingoTiles());
  };

  return <BingoCard bingo={bingoTiles} onReshuffle={reshuffleTiles} />;
}
