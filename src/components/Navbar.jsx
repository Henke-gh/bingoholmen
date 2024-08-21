import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className="navbar">
      <Home />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
    </div>
  );
}
