import Cart from "./Cart";

// Plain JS goes before the return
const allData = [
  { id: 1, firstName: "Fares", lastName: "Ahmed", color: "black" },
  { id: 2, firstName: "Zaki", lastName: "Ali", color: "red" },
  { id: 3, firstName: "Mariam", lastName: "Hassan", color: "blue" },
  { id: 4, firstName: "Karim", lastName: "Mahmoud", color: "green" },
  { id: 5, firstName: "Fouad", lastName: "Saeed", color: "yellow" },
];

function App() {
  return (
    <div className="App">
      <Cart allData={allData} />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
