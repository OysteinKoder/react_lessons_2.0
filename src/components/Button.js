import styled from "styled-components";

export const StyledButton = styled.button`
  border: #61dbfb solid 1px;
  border-radius: 10px;
  padding: 0.5em;
  text-decoration: none;
  font-size: 1rem;
  color: #61dbfb;
  background-color: transparent;
  margin-bottom: 1.5rem;

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
