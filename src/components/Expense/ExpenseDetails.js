import "./ExpenseDate.css";
import "./ExpenseItem.css";

const ExpenseDetails=(props)=>{
return(
    <div className='expense-item__description'>
        <div className='expense-item__description'><h2>{props.title}</h2></div>
        <div className='expense-item__price'><h2>Rs {props.amount}</h2></div> 
        {/* <div className='expense-item__description'><h3>{props.location}</h3></div> */}
        
    </div>
    
)
}
export default ExpenseDetails;
