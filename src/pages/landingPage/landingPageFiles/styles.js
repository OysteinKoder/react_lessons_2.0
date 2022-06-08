import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

export const StyledLink = styled(Link)`
  border: solid white 0.75em;
  border-radius: 15px;
  padding: 0.5em;
  text-decoration: none;
  font-size: 1.25rem;
  color: black;
`;

export const StyledH1 = styled.h1`
  font-weight: 900;
`;
