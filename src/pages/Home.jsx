import { useEffect } from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Home({ toggleInfoModal }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clickStartGame = () => {
    navigate("./bingo");
  };

  return (
    <div className="homeWrapperBigContainer">
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
          >
            Start Game
          </Button>
        </Stack>
        <Footer />
      </div>
    </div>
  );
}
