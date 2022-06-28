import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </ReduxProvider>
  );
}

export default App;
