import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./landingPage/AboutUsPage";
import CatFactPage from "./landingPage/CatFactsPage";
import PantePersonSelectorPage from "./landingPage/PantePersonSelectorPage";
import StudentProjectsPage from "./landingPage/StudentProjectsPage";
import ReactLogo from "../components/ReactLogo";
import Header from "./landingPage/landingPageFiles/Header";
import BackgroundParticles from "../components/BackgroundParticles";
import ReduxCounterPage from "./landingPage/ReduxCounterPage";

const LandingPage = () => {
  return (
    <>
      <BackgroundParticles />
      <Header />
      <Routes>
        <Route path="*" element={<ReactLogo />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
        <Route path="/redux-counter" element={<ReduxCounterPage />} />
        <Route path="/pante-person-selector" element={<PantePersonSelectorPage />} />
        <Route path="/student-projects" element={<StudentProjectsPage />} />
      </Routes>
    </>
  );
};

export default LandingPage;
