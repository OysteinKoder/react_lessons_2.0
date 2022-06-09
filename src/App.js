import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BackgroundParticles>
        <LandingPage />
      </BackgroundParticles>
    </div>
  );
}

export default App;
