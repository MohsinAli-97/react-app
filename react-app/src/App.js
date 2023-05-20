import React, {useState} from 'react';

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insuarance ",
    amount: 299.87,
    date: new Date(2021, 0, 14),
  },
  { id: "e2", 
    title: "Tv ",
    amount: 219.87,
    date: new Date(2021, 2, 14),
  },
  {
    id: "e3",
    title: "Movie ticket ",
    amount: 9.87,
    date: new Date(2021, 6, 14),
  },
  {
    id: "e4",
    title: "Computer build ",
    amount: 239.87,
    date: new Date(2021, 5, 14),
  },
];

const App = () => {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [ expense, ...expenses]
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
