import { useState, useEffect } from "react";
import BingoCard from "../components/BingoCard.jsx";
import { createBingoTiles } from "../functions/helpers.js";

export default function Bingo() {
  // sets bingo tiles with our helper function & useEffect hook
  const [bingoTiles, setBingoTiles] = useState([]);

  useEffect(() => {
    setBingoTiles(createBingoTiles());
  }, []);

  // defines a reshuffle function that we pass to the BingoCard component so it can do the reshuffle thing
  const reshuffleTiles = () => {
    setBingoTiles(createBingoTiles());
  };

  return <BingoCard bingo={bingoTiles} onReshuffle={reshuffleTiles} />;
}
