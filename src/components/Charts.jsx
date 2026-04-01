import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Charts.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = ({ data }) => {
  const expenseData = data.filter(t => t.type === "expense");

  const categoryMap = {};

  expenseData.forEach(item => {
    if (categoryMap[item.category]) {
      categoryMap[item.category] += item.amount;
    } else {
      categoryMap[item.category] = item.amount;
    }
  });

  const chartData = Object.keys(categoryMap).map(key => ({
    name: key,
    amount: categoryMap[key]
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">Spending Breakdown</h2>

      <PieChart width={300} height={300}>
        <Pie data={chartData} dataKey="amount" nameKey="name" outerRadius={100}>
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Charts;