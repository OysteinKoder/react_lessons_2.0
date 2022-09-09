import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./styles";

export const FadingIn = styled.h2`
  animation: fadein 4s 1;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const names = ["Øystein", "Øystein1", "Øystein2", "Øystein3", "Øystein 4"];

function RandomName() {
  const [name, newName] = useState("Show first victim");

  return (
    <div>
      <FadingIn key={name}>{name}</FadingIn>
      <StyledButton
        onClick={() => {
          newName(names[Math.floor(Math.random() * names.length)]);
        }}
      >
        Victim
      </StyledButton>
    </div>
  );
}

export default RandomName;
