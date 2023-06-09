import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandler = () => {
    setIsFormVisible(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpanseData(expenseData);

    // Reset form values
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return (
      <div>
        <button onClick={showFormHandler}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input
          type="number"
          min="1"
          step="1"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2023-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={hideFormHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
