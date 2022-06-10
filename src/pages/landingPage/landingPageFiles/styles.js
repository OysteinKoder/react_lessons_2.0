import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

export const StyledLink = styled(Link)`
  border: #61dbfb solid 1px;
  border-radius: 10px;
  padding: 0.5em;
  text-decoration: none;
  font-size: 1rem;
  color: #61dbfb;

  box-shadow: 0 0 1px #61dbfb, 0 0 1px #61dbfb, 0 0 1px #61dbfb, 0 0 2px #61dbfb,
    0 0 1px #61dbfb, 0 0 1px #61dbfb, 0 0 2px #61dbfb, 0 0 2px #61dbfb;

  transition: 0.1s linear;
  &:hover {
    transform: scale(1.2);

    box-shadow: 0 0 3px #61dbfb, 0 0 3px #61dbfb, 0 0 3px #61dbfb,
      0 0 2px #61dbfb, 0 0 2px #61dbfb, 0 0 2px #61dbfb, 0 0 3px #61dbfb,
      0 0 10px #61dbfb;
  }
`;

export const StyledH1 = styled.h1`
  font-weight: 900;
  color: #61dbfb;
`;

export const LayerWrapper = styled.div``;
