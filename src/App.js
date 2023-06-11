// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 589.0,
      date: new Date(2023, 6, 11),
      location:"Patna",
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 91.0,
      date: new Date(2023, 6, 8),
      location:'Patna',
    },
    {
      id: 'e3',
      title: 'new phone',
      amount: 5990.0,
      date: new Date(2023, 6, 3),
      location: 'amazone',
    },
    {
      id: 'e4',
      title: 'Chair',
      amount: 258.0,
      date: new Date(2023, 6, 4),
      location: 'Patna',
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      location={expenses[1].location}
      > </ExpenseItem>

      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      location={expenses[2].location}
      ></ExpenseItem>

      <ExpenseItem 
       title={expenses[3].title}
       amount={expenses[3].amount}
       date={expenses[3].date}
       location={expenses[3].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
