import "./App.css";
import TaskManager from "./components/TaskManager.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <h1>Home Page</h1>;
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
          <Link to="/">Home</Link>
          <Link to="/TaskManagerPage">Task Manager</Link>
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
