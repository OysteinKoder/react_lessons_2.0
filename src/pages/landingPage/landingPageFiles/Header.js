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
    </StyledHeader>
  );
};

export default Header;
