import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

   useEffect(() => {
  try {
    const admin = localStorage.getItem("admin");

    if (admin && admin !== "undefined") {
      setUser(JSON.parse(admin));
    }
  } catch (error) {
    console.error("Invalid admin data in localStorage:", error);

    localStorage.removeItem("admin");
    localStorage.removeItem("token");
  } finally {
    setLoading(false);
  }
}, []);

    const login = (admin, token) => {
  if (!admin || !token) {
    console.error("Invalid login data", { admin, token });
    return;
  }

  localStorage.setItem("token", token);
  localStorage.setItem("admin", JSON.stringify(admin));

  setUser(admin);
};

    const logout=()=>{

        localStorage.removeItem("token");

        localStorage.removeItem("admin");

        setUser(null);

    }

    return(

        <AuthContext.Provider value={{

            user,

            loading,

            login,

            logout,

            isAuthenticated:!!user

        }}>

            {children}

        </AuthContext.Provider>

    )

}

export default AuthProvider;