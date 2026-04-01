import "./Insights.css";

const Insights = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === "expense");
  const total = expenses.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>Total Spending: ₹{total}</p>
      <p>You are spending more on Food 🍔</p>
    </div>
  );
};

export default Insights;