"use client";
import React, { ReactNode, useState } from "react";
import MyContext, { MyContextType } from "./createContext";

interface FunctionsProviderProps {
  children: ReactNode;
}

const FunctionsProvider: React.FC<FunctionsProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string>("Muhammad Shahid");

  const value: MyContextType = {
    user,
    setUser,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default FunctionsProvider;
