import { StyledHeader } from "../../../components/headerStyles/styles";
import { StyledH1, StyledLink, StyledNav } from "./styles";
const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>React Lessons 2.0</StyledH1>
      <StyledNav>
        <StyledLink to="/about-us">About Us Page</StyledLink>
        <StyledLink to="/cat-facts">Cat Facts Page</StyledLink>
        <StyledLink to="/pante-person-selector">
          Pante Person Selector
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;