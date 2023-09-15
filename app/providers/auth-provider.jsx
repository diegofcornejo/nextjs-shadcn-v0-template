import React, { createContext, useEffect, useState, useContext } from "react";
import { getMe } from "../services/me";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const getUser = async () => {
    const { data, error } = await getMe();
    if (error) {
      push("/");
      setError(error);
      return;
    }
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, loading, error };
};

const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;