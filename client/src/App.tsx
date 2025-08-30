import "./App.css";
import TaskManager from "./components/TaskManager.tsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import VisitorManager from "./components/VisitorManager.tsx";
import AdminPanel, { AdminContext } from "./components/AdminPanel.tsx";
import { useState } from "react";

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
  const [admin, setAdmin] = useState<boolean>(false);
  const adminValue = { admin, setAdmin };

  return (
    <>
      <BrowserRouter>
        <AdminContext.Provider value={adminValue}>
          <AdminPanel />
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
        </AdminContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
