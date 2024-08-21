import { useState, useEffect } from "react";
import BingoSquare from "./BingoSquare";

export default function BingoCard({ bingo, onReshuffle }) {
  // state management for showing/hiding modal
  const [showTileBackModal, setShowTileBackModal] = useState(false);

  // state management for text shown in modal & modal className (for styling purposes)
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalClass, setModalClass] = useState("");

  // sets state for which tiles are clicked and which combinations will win based on tile's name
  const [clickedTiles, setClickedTiles] = useState([]);
  const [winningCombinations, setWinningCombinations] = useState([]);

  // sets game as won
  const [bingoAchieved, setBingoAchieved] = useState(false);

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
    setModalClass("bingoBack");
    let tile = bingo.find((item) => item.name == name);
    setModalText(tile.text);
    setModalTitle(tile.name);
    setShowTileBackModal(true);
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
        /* alert("BINGO BONGO!"); */
        setBingoAchieved(true);
        setModalText("");
        setModalTitle("");
        setModalClass("bingobongo");
        setShowTileBackModal(true);
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
      <button onClick={() => setShowTileBackModal(true)}>Show modal</button>

      {showTileBackModal && <div className="overlay"></div>}
      {showTileBackModal && (
        <div className={modalClass}>
          <p className="modalTitle">{modalTitle}</p>
          <p className="modalText">{modalText}</p>
          {bingoAchieved && <img src="../public/bingobongo.svg"></img>}

          <button
            onClick={() => {
              setShowTileBackModal(false);
            }}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
