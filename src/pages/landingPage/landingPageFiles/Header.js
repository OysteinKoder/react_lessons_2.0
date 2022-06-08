import { StyledHeader } from "../../../components/headerStyles/styles";
import { StyledLink, StyledNav } from "./styles";
const Header = () => {
  return (
    <StyledHeader>
      <h1>React Lessons 2.0</h1>
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
