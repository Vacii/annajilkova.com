import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Main } from "./components/Main";
import { About } from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
      <About />
    </>
  );
}

export default App;
