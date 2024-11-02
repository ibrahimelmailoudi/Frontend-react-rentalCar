import { createContext, useState, useEffect } from "react";
import apiRequest from "../Api/apiRequest";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  });

  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  const logout = async () => {
    try {
      setLoggingOut(true); // Set loggingOut to true when logout process starts
      await apiRequest.post("/auth/logout");
      setCurrentUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout error: ", error);
    } finally {
      setLoggingOut(false); // Set loggingOut back to false when logout process is complete
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, logout }}>
      {!loggingOut ? (
        <>
          {children}
        </>
      ) : (
        <div>Loading...</div> // Display a loading indicator while logging out
      )}
    </AuthContext.Provider>
  );
};
