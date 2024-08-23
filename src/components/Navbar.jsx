import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

export default function Navbar({ toggleInfoModal, showInfoModal }) {
  return (
    <div className="navbar">
      <Link to={"/"} className="linkTagHome">
        <IconButton
          sx={{
            padding: 0,
            margin: 0,
            width: "fit-content",
            height: "fit-content",
          }}>
          <HomeIcon
            sx={{
              fontSize: "3.3rem",
              color: "var(--bongo-yellow)",
              margin: 0,
              padding: 0,
            }}
          />
        </IconButton>
      </Link>
      <div className="navHeader">
        <h2>BINGOHOLMEN</h2>
      </div>
      <IconButton
        onClick={toggleInfoModal}
        sx={{
          padding: 0,
          margin: 0,
          width: "fit-content",
          height: "fit-content",
        }}>
        <HelpOutlineIcon
          sx={{
            fontSize: "3.3rem",
            color: showInfoModal
              ? "var(--bongo-button-selected)"
              : "var(--bongo-yellow)",
            margin: 0,
            padding: 0,
          }}
        />
      </IconButton>
    </div>
  );
}
