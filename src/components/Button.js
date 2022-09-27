import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.blue ? "blue" : null)};
`;

export const Spacer = styled.div`
  margin-top: ${(props) =>
    (props.style = "small"
      ? "1rem"
      : (props.style = "medium"
          ? "3rem"
          : (props.style = "large" ? "5rem" : null)))};
`;
