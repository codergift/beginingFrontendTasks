import React from "react";


const ExpenseForm=()=>{
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="1" step="1"/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2023-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};
export default ExpenseForm;