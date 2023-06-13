import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  const deleteExpenseHandler = () => {
    // Perform the delete expense operation here
    console.log('Deleting expense...');
    // You can manipulate the DOM or trigger an API call to delete the expense
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        amount={props.amount}
        // location={props.location}
        title={props.title}
      />
      <button on onClick={clickHandler}>Change title</button>

      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
};
export default ExpenseItem;
