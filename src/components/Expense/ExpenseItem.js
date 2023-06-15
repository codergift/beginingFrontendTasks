import React, { useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const[title,setTitle]=useState (props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title); 
  };

  const changeExpenseHandler = () => {
    setAmount(100);
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails amount={amount} title={title} />
      <button onClick={changeExpenseHandler}>Change expense</button>
      <button onClick={clickHandler}>Change title</button>
      
    </Card>
  );
};
export default ExpenseItem;
