import { useContext } from "react";
import { AuthContext } from "../context/auth";

function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("AuthContext's value is undefined.");
  }

  return value;
}

export { useAuth };
