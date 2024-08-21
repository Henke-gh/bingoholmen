import { useState, useEffect } from "react";
import BingoSquare from "./BingoSquare";

export default function BingoCard({ bingo, onReshuffle }) {
  // sets state for which tiles are clicked and which combinations will win based on tile's name
  const [clickedTiles, setClickedTiles] = useState([]);
  const [winningCombinations, setWinningCombinations] = useState([]);

  useEffect(() => {
    setWinningCombinations(generateWinningCombinations(bingo));
  }, [bingo]);

  const generateWinningCombinations = (bingo) => {
    const combinations = [];
    const size = Math.sqrt(bingo.length);

    // horizontal winning combinations
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(bingo[i * size + j].name);
      }
      combinations.push(row);
    }

    // vertical winning combinations
    for (let i = 0; i < size; i++) {
      const column = [];
      for (let j = 0; j < size; j++) {
        column.push(bingo[j * size + i].name);
      }
      combinations.push(column);
    }

    // diagonal winning combinations
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
      diagonal1.push(bingo[i * size + i].name);
      diagonal2.push(bingo[i * size + (size - i - 1)].name);
    }
    combinations.push(diagonal1);
    combinations.push(diagonal2);

    return combinations;
  };

  const handleTileClick = (name) => {
    setClickedTiles((prev) => {
      let newClickedTiles;
      if (prev.includes(name)) {
        newClickedTiles = prev.filter((tile) => tile !== name);
      } else {
        newClickedTiles = [...prev, name];
        checkForWin(newClickedTiles);
      }
      return newClickedTiles;
    });
  };
  const checkForWin = (clickedTiles) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      let allTilesClicked = true;

      for (let j = 0; j < combination.length; j++) {
        const tile = combination[j];
        if (!clickedTiles.includes(tile)) {
          allTilesClicked = false;
          break;
        }
      }

      if (allTilesClicked) {
        alert("BINGO BONGO!");
        setClickedTiles([]); // reset the clicked tiles
        break;
      }
    }
  };

  return (
    <div className="bingoWrapper">
      {bingo.map((tile, index) => (
        <BingoSquare
          key={index}
          icon={tile.icon}
          name={tile.name}
          text={tile.text}
          location={tile.location ? tile.location : ""}
          onClick={handleTileClick}
          isClicked={clickedTiles.includes(tile.name)}
        />
      ))}
      <button onClick={onReshuffle}>Reshuffle Tiles</button>
    </div>
  );
}
