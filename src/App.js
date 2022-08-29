import "./App.css";
import LandingPage from "./pages/LandingPage";
import { CounterContext } from "./contextState/counterContext";
import { useState } from "react";

function App() {
  // This is the state we choose to use as a global value,
  // We do this by passing it into the value of
  // CounterContext.Provider
  // Therefore making it available in the whole app
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ count, setCount }}>
        <LandingPage />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
