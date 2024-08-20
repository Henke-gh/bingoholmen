import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Bingo from "./pages/Bingo.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bingo" element={<Bingo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
