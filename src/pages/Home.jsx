import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Home({ toggleInfoModal }) {
  const navigate = useNavigate();

  const clickStartGame = () => {
    navigate("./bingo");
  };

  return (
    <div>
      <div className="homeContainer">
        <Header />
        <Stack direction="column" spacing={6} sx={{ width: "75%" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--bongo-purple)",
              color: "var(--bongo-yellow)",
              fontFamily: "var(--bongo-font)",
              fontSize: "2rem",
              width: "100%",
            }}
            onClick={clickStartGame}>
            START
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--bongo-purple)",
              color: "var(--bongo-yellow)",
              fontFamily: "var(--bongo-font)",
              fontSize: "2rem",
            }}
            onClick={toggleInfoModal}>
            OM SPELET
          </Button>
        </Stack>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
