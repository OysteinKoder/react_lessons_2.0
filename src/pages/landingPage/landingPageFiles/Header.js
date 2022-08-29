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
        <StyledLink to="/context-used">Context Used</StyledLink>
        <StyledLink to="/cat-facts">React Hooks</StyledLink>
        <StyledLink to="/pante-person-selector">Panting</StyledLink>
        <StyledLink to="/student-projects">Projects</StyledLink>
        <StyledLink to="context-counter">Context</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
