import { createContext, useState } from "react";
import { transactionsData } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  return (
    <FinanceContext.Provider
      value={{ transactions, setTransactions, role, setRole }}
    >
      {children}
    </FinanceContext.Provider>
  );
};