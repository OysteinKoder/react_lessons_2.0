import { StyledButton, StyledMain } from "../../components/styles";
import { useState, useCallback, useEffect } from "react";
import pantePersons from "./pantePersonSelectorPage/pantePersonsArray";
import { StyledContainer } from "./pantePersonSelectorPage/components/styled";
import PantePerson from "./pantePersonSelectorPage/components/PantePerson";
import Confetti from "react-confetti";

const PantePersonSelectorPage = () => {
    const [allPantePersons, setAllPantePersons] = useState(pantePersons);
    const [pantePerson, setPantePerson] = useState();

    //Picks random panteperson
    const pickPantePerson = () => {
        const randomIndex = Math.floor(Math.random() * allPantePersons.length);
        setPantePerson([allPantePersons[randomIndex]]);
    };

    // Width/Height for the confetti
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();

    // This updates the Height and Width of the container when a panteperson is picked
    const div = useCallback(
        (node) => {
            if (node !== null) {
                setHeight(node.getBoundingClientRect().height);
                setWidth(node.getBoundingClientRect().width);
            }
        },
        [pantePerson]
    );

    return (
        <StyledMain ref={div}>
            {pantePerson && <Confetti width={width} height={height} />}
            <h2>Pante Selector</h2>
            <article>
                <StyledContainer>
                    <PantePerson key={pantePerson} person={pantePerson} />
                </StyledContainer>
                <StyledButton onClick={pickPantePerson}>
                    Button of dethhhhhhhhh
                </StyledButton>
            </article>
        </StyledMain>
    );
};

export default PantePersonSelectorPage;
