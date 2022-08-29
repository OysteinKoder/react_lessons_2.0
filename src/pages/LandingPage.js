import { Routes, Route, Link } from "react-router-dom";
import ContextUsedPage from "./landingPage/ContextUsedPage";
import CatFactPage from "./landingPage/CatFactsPage";
import PantePersonSelectorPage from "./landingPage/PantePersonSelectorPage";
import StudentProjectsPage from "./landingPage/StudentProjectsPage";
import ReactLogo from "../components/ReactLogo";
import Header from "./landingPage/landingPageFiles/Header";
import BackgroundParticles from "../components/BackgroundParticles";
import CounterContextPage from "./landingPage/CounterContext";

const LandingPage = () => {
  return (
    <>
      <BackgroundParticles />
      <Header />
      <Routes>
        <Route path="*" element={<ReactLogo />} />
        <Route path="/Context-Used" element={<ContextUsedPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
        <Route
          path="/pante-person-selector"
          element={<PantePersonSelectorPage />}
        />
        <Route path="/student-projects" element={<StudentProjectsPage />} />
        <Route path="/context-counter" element={<CounterContextPage />} />
      </Routes>
    </>
  );
};

export default LandingPage;
