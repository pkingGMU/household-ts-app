import "./App.css";
import TaskManager from "./components/TaskManager.tsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function HomePage() {
  return <h1>BakuDeku Club</h1>;
}

function TaskManagerPage() {
  return (
    <>
      <h1>BakuDeku Club</h1>
      <TaskManager />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/TaskManagerPage">Task Manager</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TaskManagerPage" element={<TaskManagerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
