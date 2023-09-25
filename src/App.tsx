import { useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

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
    <section className="form-app">
      <h3 className="m-4 align-items-center">
        Do you know where your money goes?
      </h3>
      <div className="mb-5 pb-1">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </section>
  );
}

export default App;
