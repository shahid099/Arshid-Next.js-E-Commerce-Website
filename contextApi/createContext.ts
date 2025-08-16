import { createContext } from "react";

export interface MyContextType {
  user: string;
  setUser: (user: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
