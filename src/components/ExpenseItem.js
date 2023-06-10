import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>Expense Item!</h2>
      <div className="expense-item__description">
        <h2>Food</h2>
        <h2>Petrol</h2>
        <h2>Movies</h2>
        <div className="expense-item__price">
        <p>Rs 10</p>
        <p>Rs 100</p>
        <p>Rs 200</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
