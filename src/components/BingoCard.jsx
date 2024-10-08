import { useState, useEffect, createElement } from "react";
import BingoSquare from "./BingoSquare";
import * as Icons from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

export default function BingoCard({ bingo, onReshuffle }) {
  // state management for showing/hiding modal
  const [showTileBackModal, setShowTileBackModal] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  // state management for text shown in modal & modal className (for styling purposes)
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");
  const [modalClass, setModalClass] = useState("");
  const [IconComponent, setIconComponent] = useState(null);
  const [iconProps, setIconProps] = useState({});

  // sets state for which tiles are clicked and which combinations will win based on tile's name
  const [clickedTiles, setClickedTiles] = useState([]);
  const [winningCombinations, setWinningCombinations] = useState([]);

  // sets game as won
  const [bingoAchieved, setBingoAchieved] = useState(false);
  const [winConditionMet, setWinConditionMet] = useState(false);

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
    setModalIcon(tile.icon);
    setIconComponent(Icons[tile.icon]);
    setIconProps({
      className: "bingoBackIcon",
      style: { fontSize: "58px" },
    });

    setClickedTiles((prev) => {
      let newClickedTiles;
      if (prev.includes(name)) {
        newClickedTiles = prev.filter((tile) => tile !== name);
      } else {
        setShowTileBackModal(true);
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
        setWinConditionMet(true);
        setBingoAchieved(true);
        break;
      }
    }
  };

  const handleCloseModal = () => {
    if (winConditionMet) {
      setShowTileBackModal(false);
      setShowWinModal(true);
      setWinConditionMet(false);
    } else {
      setShowTileBackModal(false);
    }
  };

  const handleCloseWinModal = () => {
    setShowWinModal(false);
    setClickedTiles([]); // reset the clicked tiles
    onReshuffle(); // reshuffle tiles for new game
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "overlay") {
      handleCloseModal();
    }
  };

  return (
    <div className="bingoWrapperBigContainer">
      {showTileBackModal && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}
      {showTileBackModal && (
        <div className={modalClass}>
          <div
            className="bingoBackWrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseIcon onClick={handleCloseModal} />
            <p className="modalTitle">{modalTitle}</p>

            <p className="modalText">{modalText}</p>
            {IconComponent && createElement(IconComponent, iconProps)}
          </div>
        </div>
      )}

      {showWinModal && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}
      {showWinModal && (
        <div className="bingobongo">
          <img src="bongo-win.svg" alt="Bingo Bongo" className="bongoWinIcon" />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--bongo-purple)",
              color: "var(--bongo-yellow)",
              fontFamily: "var(--bongo-font)",
              fontSize: "2rem",
            }}
            onClick={handleCloseWinModal}
          >
            SPELA IGEN
          </Button>
        </div>
      )}
      <h1 className="bingoHeadline">HITTA</h1>
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
      </div>
      <button className="refreshBtn" onClick={handleCloseWinModal}>
        <img src="refresh.svg" alt="Nya brickor"></img>
      </button>
    </div>
  );
}
