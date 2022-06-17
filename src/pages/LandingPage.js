import { Routes, Route, Link } from "react-router-dom";
import AboutUsPage from "./landingPage/AboutUsPage";
import CatFactPage from "./landingPage/CatFactsPage";
import PantePersonSelectorPage from "./landingPage/PantePersonSelectorPage";
import PropsExample from "./landingPage/StudentProjectsPage";
import ReactLogo from "../components/ReactLogo";
import Header from "./landingPage/landingPageFiles/Header";
import BackgroundParticles from "../components/BackgroundParticles";

const LandingPage = () => {
  return (
    <>
      <BackgroundParticles />
      <Header />
      <Routes>
        <Route path="*" element={<ReactLogo />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
        <Route
          path="/pante-person-selector"
          element={<PantePersonSelectorPage />}
        />
        <Route
          path="/props"
          element={
            <PropsExample
              text="dette er text"
              headline="dette er overskrift"
              num1={2}
              num2={3}
            />
          }
        />
      </Routes>
    </>
  );
};

export default LandingPage;
