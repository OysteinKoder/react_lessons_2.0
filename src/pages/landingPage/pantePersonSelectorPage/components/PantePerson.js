import { StyledH1NoAnimation, StyledH1 } from "./styled";

const PantePerson = (props) => {
    if (props.person) {
        return (
            <>
                <StyledH1>{props.person}</StyledH1>
            </>
        );
    } else return <StyledH1NoAnimation></StyledH1NoAnimation>;
};

export default PantePerson;
