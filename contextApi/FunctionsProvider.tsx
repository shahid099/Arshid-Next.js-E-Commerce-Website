"use client";
import React, { ReactNode, useState } from "react";
import MyContext, { MyContextType } from "./createContext";

interface FunctionsProviderProps {
  children: ReactNode;
}

const FunctionsProvider: React.FC<FunctionsProviderProps> = ({ children }) => {


  // State to manage user data and login status
  const [user, setUser] = useState<any>('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`/api/get-user?token=${token}`, {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setIsUserLoggedIn(true);
      } else {
        setUser('');
        setIsUserLoggedIn(false);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser('');
      setIsUserLoggedIn(false);
    }
  };

  // useEffect(() => {
  //   fetchUser();
  // }, []);



  const value: MyContextType = {
    user,
    setUser,
    isUserLoggedIn,
    fetchUser,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default FunctionsProvider;
