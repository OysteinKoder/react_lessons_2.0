import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <LandingPage />
      </div>
    </ReduxProvider>
  );
}

export default App;
