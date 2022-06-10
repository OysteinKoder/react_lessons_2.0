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
        <StyledLink to="/about-us">About Us</StyledLink>
        <StyledLink to="/cat-facts">Cat Facts</StyledLink>
        <StyledLink to="/pante-person-selector">Pante roullete</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
