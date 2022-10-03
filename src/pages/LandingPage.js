import { Routes, Route, NavLink } from "react-router-dom";
import AboutUsPage from "./landingPage/AboutUsPage";
import CatFactPage from "./landingPage/CatFactsPage";
import PantePersonSelectorPage from "./landingPage/PantePersonSelectorPage";
import StudentProjectsPage from "./landingPage/StudentProjectsPage";
import ReactLogo from "../components/ReactLogo";
import BackgroundParticles from "../components/BackgroundParticles";

const LandingPage = () => {
  return (
    <>
      <BackgroundParticles />
      {
        // "NavLink" contains the clickable link, when you click the link it is selected.
        // The "to" prop decides what "Route" is shown in the "Routes"
        // Inside "Routes" only one "Route" can be shown at a time.
      }
      <nav>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/cat-facts">Cat Api</NavLink>
        <NavLink to="/pante-person-selector">Panting</NavLink>
        <NavLink to="/student-projects">Projects</NavLink>
      </nav>
      {
        // "Routes" is a hidden box that can only show one "Route" at the time.
        // The "Route" - s are the components that can be rendered.
        // The to prop in the "NavLink" hooks it up to the path in the "Route"
      }
      <Routes>
        <Route path="*" element={<ReactLogo />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
        <Route
          path="/pante-person-selector"
          element={<PantePersonSelectorPage />}
        />
        <Route path="/student-projects" element={<StudentProjectsPage />} />
      </Routes>
    </>
  );
};

export default LandingPage;
