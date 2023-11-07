import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be wrapped by GlobalContextProvider()"
    );
  }
  return context;
}


