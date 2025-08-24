import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskManager from "./components/TaskManager.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>BakuDeku Club</h1>
      <TaskManager />
    </>
  );
}

export default App;
