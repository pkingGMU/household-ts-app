import { createContext, useContext } from "react";

type AdminContextType = {
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AdminContext = createContext<AdminContextType>({
  admin: false,
  setAdmin: () => {},
});

export const useAdmin = () => useContext(AdminContext);

export default function AdminPanel() {
  const { admin, setAdmin } = useAdmin();

  return (
    <div className="AdminPanel">
      <input type="text" placeholder="Enter Admin Password" />
      <button type="submit" onClick={() => setAdmin(!admin)}>
        {admin ? "Lock" : "Unlock"}
      </button>
      {admin && <p>Unlocked</p>}
    </div>
  );
}
