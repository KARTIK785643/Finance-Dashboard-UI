import { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/FinanceContext";
import "./AddTransaction.css";

const AddTransaction = ({ editData, setEditData }) => {
  const { transactions, setTransactions } = useContext(FinanceContext);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense"
  });

  // Prefill form when editing
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      // EDIT
      const updated = transactions.map((t) =>
        t.id === editData.id ? { ...t, ...form } : t
      );
      setTransactions(updated);
      setEditData(null);
    } else {
      // ADD
      const newTransaction = {
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        amount: Number(form.amount),
        category: form.category,
        type: form.type
      };

      setTransactions([...transactions, newTransaction]);
    }

    setForm({ amount: "", category: "", type: "expense" });
  };

  return (
    <div className="form-container">
      <h3>{editData ? "Edit Transaction" : "Add Transaction"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Food 🍔)"
          value={form.category}
          onChange={handleChange}
          required
        />

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button type="submit">
          {editData ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;