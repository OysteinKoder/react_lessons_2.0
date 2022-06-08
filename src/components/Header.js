import logo from "../logo.svg";
import { StyledHeader } from "./headerStyles/styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>React Lessons 2.0</h1>
      <img src={logo} className="App-logo" />
    </StyledHeader>
  );
};

export default Header;
