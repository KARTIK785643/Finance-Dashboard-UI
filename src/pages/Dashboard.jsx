import { useContext } from "react";
import { useState } from "react";
import { FinanceContext } from "../context/FinanceContext";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import Charts from "../components/Charts";
import RoleSwitcher from "../components/RoleSwitcher";
import AddTransaction from "../components/AddTransaction";
import Insights from "../components/Insights";
import "./Dashboard.css";

const Dashboard = () => {
  const { transactions, role, setRole } = useContext(FinanceContext);
  const [editData, setEditData] = useState(null);
  
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="dashboard">
      <div className="header">
        <h1>FinTrack Lite</h1>
        <RoleSwitcher role={role} setRole={setRole} />
      </div>

      <div className="cards">
        <SummaryCard title="Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expense} />
      </div>

      <div className="middle">
        <Charts data={transactions} />
        <Insights transactions={transactions} />
      </div>

{role === "admin" && (
  <AddTransaction editData={editData} setEditData={setEditData} />
)}

<TransactionTable setEditData={setEditData} /></div>
  );
};

export default Dashboard;