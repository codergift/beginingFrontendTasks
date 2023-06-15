import React, { useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const[title,setTitle]=useState (props.title);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title); 
  };

  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails amount={props.amount} title={title} />
      
      <button onClick={clickHandler}>Change title</button>
      
    </Card>
  );
};
export default ExpenseItem;
