import styled from "styled-components";

export const StyledMain = styled.main`
  width: 60%;
  margin: auto;
  border-radius: 15px;
  margin-top: 5rem;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border: #61dbfb solid 1px;
`;

export const StyledButton = styled.button`
  border: #61dbfb solid 1px;
  border-radius: 10px;
  padding: 0.5em;
  margin: 1rem;
  text-decoration: none;
  font-size: 1rem;
  color: #61dbfb;
  background: transparent;

  transition: 0.1s linear;
  &:hover {
    transform: scale(1.2);
  }
`;
