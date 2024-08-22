import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

export default function Navbar({ toggleInfoModal, showInfoModal }) {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <IconButton sx={{ padding: "0px" }}>
          <HomeIcon
            sx={{
              fontSize: "3.5rem",
              color: "var(--bongo-yellow)",
              marginLeft: "20px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />
        </IconButton>
      </Link>
      <div className="navHeader">
        <h2>BINGOHOLMEN</h2>
      </div>
      <IconButton onClick={toggleInfoModal} sx={{ padding: "0px" }}>
        <HelpOutlineIcon
          sx={{
            fontSize: "3.5rem",
            color: showInfoModal
              ? "var(--bongo-button-selected)"
              : "var(--bongo-yellow)",
            marginLeft: "10px",
            marginRight: "20px",
            marginTop: "8px",
          }}
        />
      </IconButton>
    </div>
  );
}
