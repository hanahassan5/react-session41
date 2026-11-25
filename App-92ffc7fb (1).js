import Cart from "./Cart";

// Plain JS goes before the return
const allData = [
  { id: 1, firstName: "فارس", lastName: "أحمد", color: "black" },
  { id: 2, firstName: "زكي", lastName: "علي", color: "red" },
  { id: 3, firstName: "مريم", lastName: "حسن", color: "blue" },
  { id: 4, firstName: "كريم", lastName: "محمود", color: "green" },
  { id: 5, firstName: "فؤاد", lastName: "سعيد", color: "yellow" },
];

function App() {
  return (
    <div className="App">
      <h1>Session 41: Props, map, if and ternary</h1>
      <Cart allData={allData} />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
