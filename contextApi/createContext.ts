import { createContext } from "react";

export interface MyContextType {
  setUser: any;
  isUserLoggedIn: boolean;
  fetchUser: () => Promise<void>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
