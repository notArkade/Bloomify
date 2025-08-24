import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setCurrentUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Fake login (no backend)
  const login = async (email, password) => {
    const userData = { id: 1, name: "Demo User", email };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", "fake-token");
    setCurrentUser(userData);
    setToken("fake-token");

    return { success: true };
  };

  // Fake register (no backend)
  const register = async (userData) => {
    const user = { id: 1, name: userData.name, email: userData.email };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "fake-token");
    setCurrentUser(user);
    setToken("fake-token");

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurrentUser(null);
    setToken(null);
  };

  const value = { currentUser, token, login, register, logout, loading };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
