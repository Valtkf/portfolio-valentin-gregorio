import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-stone-900 h-screen">
      <Header />
      <h1 className="bg-red-800 text-3xl font-bold underline mt-[96px]">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
