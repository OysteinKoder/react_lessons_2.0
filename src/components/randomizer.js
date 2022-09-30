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

// TODO: move persons into seperate data file
const bergenA = ["Mads N", "Rasmus", "Ingrid", "Mia", "Vetle", "Orion", "Suganthi", "Bettina", "Iben", "Remi"];
const bergenB = ["Christian", "Erlend", "Julie", "Sailaja", "Steffen", "Thomas"];
const bergenC = [ "Cathrine V", "Nisitha", "Simon", "Vivvian", "Bjørn Andre", "Marcus", "Marius", "Monica", "Nikolai"];
const bergenD = ["Andreas T", "Markus M", "Sondre F"];
const bergenE = ["Michael H", "Ketil"];
const bergenS = ["Øyvind", "Margrethe Sofie", "Ram", "Andreas O", "Christian SB", "James D", "Kenneth L", "Knut C", "Morthen", "Sander", "Sondre H", "Stian T"];
const names = bergenA.concat(bergenB, bergenC, bergenD, bergenE, bergenS);

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
