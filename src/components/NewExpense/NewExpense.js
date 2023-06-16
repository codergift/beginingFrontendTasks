import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const SaveExpanseDataHandler=(enteredExpanseData)=>{
        const expanseData={
            ...enteredExpanseData,
            id: Math.random().toString(),
        };
        props.onAddExpanse(expanseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpanseData={SaveExpanseDataHandler} />
    </div>
    );
};
export default NewExpense;