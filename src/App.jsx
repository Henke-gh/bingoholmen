import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import items from "./constants/items_array";

function App() {
  const [count, setCount] = useState(0);
  console.log(items[0].name);
  return (
    <>
      <h1>Bingoholmen</h1>
    </>
  );
}

export default App;
