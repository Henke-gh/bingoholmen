import { Stack } from "@mui/material";
import { Button } from "@mui/material";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <Stack direction="column" spacing={2}>
        <Button variant="contained" sx={{ color: "pink" }}>
          START
        </Button>
        <Button variant="contained">OM SPELET</Button>
      </Stack>
      <Footer />
    </div>
  );
}
