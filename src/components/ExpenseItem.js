import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate= new Date();
  const expenseTitle='Car Insurance';
  const expensePrice= 589.00
  const LocationOfExpenditure='Royal Auto, Patna';
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div> 
      <h4>{LocationOfExpenditure}</h4> 
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
      </div>
      <div className="expense-item__price">Rs {expensePrice}</div>
    </div>
  );
}
export default ExpenseItem;
