import { StyledH1NoAnimation, StyledH1 } from "./styled";
import Confetti from "react-confetti";

const PantePerson = (props) => {
    if (props.person) {
        return (
            <>
                <Confetti width={900} height={600} />
                <StyledH1>{props.person}</StyledH1>
            </>
        );
    } else return <StyledH1NoAnimation></StyledH1NoAnimation>;
};

export default PantePerson;
