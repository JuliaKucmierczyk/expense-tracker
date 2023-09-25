import { useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "mleko", amount: 5, category: "Groceries" },
    { id: 2, description: "ser", amount: 1, category: "Utilities" },
    { id: 3, description: "banan", amount: 4, category: "Groceries" },
    { id: 4, description: "jajka", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
