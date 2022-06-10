import { StyledMain } from "../../components/styles";
import { people } from "./panteRoulette/peopleConst";
import { useEffect, useState } from "react";
import { StyledButton } from "../../components/Button";

const PantePersonSelectorPage = () => {
  const [person, setPerson] = useState("Winner is....");
  const [num, setNum] = useState();

  const selectRandomPerson = () => {
    setNum(Math.floor(Math.random() * 41));
    setPerson(people[num]);
    console.log("working");
  };

  useEffect(() => {
    setNum(Math.floor(Math.random() * 41));
  }, []);

  return (
    <StyledMain>
      <h2>Pante Selector</h2>
      <article>
        <p>Panteperson:</p>
        <p>{person}</p>
        <StyledButton onClick={selectRandomPerson}>Roll Dice</StyledButton>
      </article>
    </StyledMain>
  );
};

export default PantePersonSelectorPage;
