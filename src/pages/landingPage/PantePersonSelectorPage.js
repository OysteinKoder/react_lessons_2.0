import { StyledButton, StyledMain } from "../../components/styles";
import { useState } from "react";
import pantePersons from "./pantePersonSelectorPage/pantePersonsArray";
import { StyledContainer } from "./pantePersonSelectorPage/components/styled";
import PantePerson from "./pantePersonSelectorPage/components/PantePerson";

const PantePersonSelectorPage = () => {
    const [allPantePersons, setAllPantePersons] = useState(pantePersons);
    const [pantePerson, setPantePerson] = useState();

    //Picks random panteperson
    const pickPantePerson = () => {
        const randomIndex = Math.floor(Math.random() * allPantePersons.length);
        setPantePerson([allPantePersons[randomIndex]]);
    };

    return (
        <StyledMain>
            <h2>Pante Selector</h2>
            <article>
                <StyledContainer>
                    <PantePerson key={pantePerson} person={pantePerson} />
                </StyledContainer>
                <StyledButton
                    onClick={() => {
                        pickPantePerson();
                    }}
                >
                    Button of dethhhhhhhhh
                </StyledButton>
            </article>
        </StyledMain>
    );
};

export default PantePersonSelectorPage;
