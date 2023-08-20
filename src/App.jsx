import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./components/Header";
import { Portf } from "./components/Portf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <About />
      <Portfolio />
      {/* <Portf /> */}
    </>
  );
}

export default App;
