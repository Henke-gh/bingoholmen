import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Bingo from "./pages/Bingo.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import InfoModal from "./components/InfoModal.jsx";

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleInfoModal = () => {
    setShowInfoModal((prevState) => !prevState);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          toggleInfoModal={toggleInfoModal}
          showInfoModal={showInfoModal}
        />
        <Routes>
          <Route
            path="/"
            element={<Home toggleInfoModal={toggleInfoModal} />}
          />
          <Route path="/bingo" element={<Bingo />} />
        </Routes>
      </BrowserRouter>
      {showInfoModal && <InfoModal toggleInfoModal={toggleInfoModal} />}
    </>
  );
}

export default App;
