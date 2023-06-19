import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    if (filteredYear === "") {
      return true; // No filter selected, show all expenses
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  let expensesContent = <p className="msg">No expenses found.</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ));

    if (filterExpenses.length === 1) {
      expensesContent = (
        <React.Fragment>
          {expensesContent}
          <p className="msg">Only single Expense here. Please add more...</p>
        </React.Fragment>
      );
    }
  }

  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expense;
