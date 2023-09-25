import { useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "mleko", amount: 5, category: "Food" },
    { id: 2, description: "ser", amount: 1, category: "Food" },
    { id: 3, description: "banan", amount: 4, category: "Food" },
    { id: 4, description: "jajka", amount: 10, category: "Food" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
