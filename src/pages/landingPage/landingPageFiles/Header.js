import {
  StyledHeader,
  StyledRow,
} from "../../../components/headerStyles/styles";
import ReactLogo from "../../../components/ReactLogo";
import { StyledH1, StyledLink, StyledNav } from "./styles";
const Header = () => {
  return (
    <StyledHeader>
      <StyledRow>
        <ReactLogo />
        <StyledH1>React Lessons 2.0</StyledH1>
        <ReactLogo />
      </StyledRow>
      <StyledNav>
        <StyledLink to="/about-us">About</StyledLink>
        <StyledLink to="/cat-facts">React Hooks</StyledLink>
        <StyledLink to="/pante-person-selector">Panting</StyledLink>
        <StyledLink to="/student-projects">Projects</StyledLink>
        <StyledLink to="/redux-counter">Redux Counter</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
