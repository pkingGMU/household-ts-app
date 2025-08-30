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

function AdminPanelPage() {
  return <AdminPanel />;
}

function App() {
  const [admin, setAdmin] = useState<boolean>(false);
  const adminValue = { admin, setAdmin };

  return (
    <>
      <BrowserRouter>
        <AdminContext.Provider value={adminValue}>
          <nav>
            <NavLink to="/">Home</NavLink>
            {admin && <NavLink to="/TaskManagerPage">Task Manager</NavLink>}
            <NavLink to="/FriendJournal">Friend Journal</NavLink>
            <NavLink to="/AdminPanelPage">Admin</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TaskManagerPage" element={<TaskManagerPage />} />
            <Route path="/FriendJournal" element={<FriendJournal />} />
            <Route path="/AdminPanelPage" element={<AdminPanelPage />} />
          </Routes>
        </AdminContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
