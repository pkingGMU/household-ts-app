import { createContext, useContext } from "react";
import { useState } from "react";
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
  const [passwordText, setPasswordText] = useState<string>("");

  const correctPassword: string = "pie";

  const checkPassword = () => {
    if (passwordText === correctPassword) {
      setAdmin(!admin);
    }
  };

  return (
    <div className="AdminPanel">
      <input
        type="text"
        placeholder="Enter Admin Password"
        value={passwordText}
        onChange={(e) => setPasswordText(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          checkPassword();
          setPasswordText("");
        }}
      >
        {admin ? "Lock" : "Unlock"}
      </button>
    </div>
  );
}
