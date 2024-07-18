import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-stone-900 h-screen">
      <Header />
      <Body />
      {/* <h1 className="bg-red-800 text-3xl font-bold underline mt-[96px]">
        Hello world!
      </h1> */}
    </div>
  );
}

export default App;
