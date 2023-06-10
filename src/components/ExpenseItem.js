import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>10th June 2023</div>
      <div className="expense-item__description">
        <h2> Car Insureance</h2>
      </div>
      <div className="expense-item__price">Rs 589.00</div>
    </div>
  );
}
export default ExpenseItem;
