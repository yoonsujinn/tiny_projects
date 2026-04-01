import "./App.css";
import Header from "../components/Header";

function App() {
  const wrapBase = "p-4 bg-gray-100 rounded-lg shadow-md";

  return (
    <>
      <Header wrapBase={wrapBase} />
    </>
  );
}

export default App;
