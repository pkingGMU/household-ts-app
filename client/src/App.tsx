import "./App.css";
import TaskManager from "./components/TaskManager.tsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import VisitorManager from "./components/VisitorManager.tsx";

function HomePage() {
  return (
    <div>
      <h1>BakuDeku Club</h1>
    </div>
  );
}

function TaskManagerPage() {
  return (
    <>
      <h1>BakuDeku Club</h1>
      <TaskManager />
    </>
  );
}

function FriendJournal() {
  return (
    <>
      <h1>Friend Journal</h1>
      <VisitorManager />
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
          <NavLink to="/FriendJournal">Friend Journal</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TaskManagerPage" element={<TaskManagerPage />} />
          <Route path="/FriendJournal" element={<FriendJournal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
