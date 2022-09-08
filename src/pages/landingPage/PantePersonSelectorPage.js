import { StyledButton, StyledMain } from "../../components/styles";
import { useState } from "react";
import { PanteSelectorTitle, RandomPerson } from "./PantePersonSelectorFiles/PantePersonSelectorStyles";
import people from "./PantePersonSelectorFiles/PantePersonData";

const PantePersonSelectorPage = () => {
  const [pantePerson, setPantePerson] = useState("Welcome!");
  const [personList, setPersonList] = useState([...people]);
  const [newName, setNewName] = useState(false);

  const getRandomPerson = () => {
    setNewName(true);
    console.log(personList);
    const randomNumber = Math.floor(Math.random() * personList.length);
    const vinner = personList[randomNumber];

    setPantePerson(vinner);

    personList.splice(randomNumber, 1);
    setPersonList(personList);

    setTimeout(() => {
      setNewName(false);
    }, 10500);
  };

  return (
    <StyledMain>
      <PanteSelectorTitle>Pante sdelasadasector</PanteSelectorTitle>
      <article>
        <RandomPerson className={newName && "fade"}>
          {pantePerson ? pantePerson : "No more people to select from"}
        </RandomPerson>
      </article>
      <StyledButton onClick={getRandomPerson} disabled={newName}>
        Get random person
      </StyledButton>
    </StyledMain>
  );
};

export default PantePersonSelectorPage;
