import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './components/Expense/Expense.css'
// import ExpenseItem from "./components/Expense/ExpenseItem";
import Expense from "./components/Expense/Expense";
// import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense"

const App=()=> {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 589.0,
      date: new Date(2023, 6, 11),
      location: 'Patna',
    },
    {
      id: 'e2',
      title: 'School Fee',
      amount: 91.0,
      date: new Date(2023, 4, 8),
      location: 'Patna',
    },
    {
      id: 'e3',
      title: '',
      amount: 5990.0,
      date: new Date(2023, 6, 3),
      location: 'Amazone',
    },
    {
      id: 'e4',
      title: 'Chair',
      amount: 258.0,
      date: new Date(2023, 3, 4),
      location: 'Patna',
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return(
    <div>
      <NewExpense onAddExpanse={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
