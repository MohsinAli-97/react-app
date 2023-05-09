import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insuarance ", amount: 299.87, date: new Date(2021, 0, 14) },
    { title: "Tv ", amount: 219.87, date: new Date(2021, 2, 14) },
    { title: "Movie ticket ", amount: 9.87, date: new Date(2021, 6, 14) },
    { title: "Computer build ", amount: 239.87, date: new Date(2021, 5, 14) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense/>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
