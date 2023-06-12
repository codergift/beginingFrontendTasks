// import logo from './logo.svg';
// import './App.css';
import './components/Expense.css'
import ExpenseItem from "./components/ExpenseItem";
// import ExpenseItem from "./components/Expense";
import Card from "./components/Card";

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
      location: ' Amazone',
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
    
    <Card className='expense'>
      <h2>Let's start</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      />

      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      location={expenses[1].location}
      />

      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      location={expenses[2].location}
      />

      <ExpenseItem 
       title={expenses[3].title}
       amount={expenses[3].amount}
       date={expenses[3].date}
       location={expenses[3].location}
       />
    </Card>
  );
}

export default App;
