import styled from "styled-components";
import { keyframes } from "styled-components";

const breathe = keyframes`
 0% { font-size: 2em; }
 50% { font-size: 3em; }
 100% { font-size: 2em; }

`;

const fadeIn = keyframes`
    0% { opacity: 0; }
  100% { opacity: 1; }

`;
export const StyledH1 = styled.h1`
    margin: 0;
    font-weight: 900;
    font-size: 2em;
    color: #61dbfb;
    animation: ${breathe} 2.5s infinite, ${fadeIn} 7s;
`;
export const StyledH1NoAnimation = styled.h1`
    margin: 0;
    font-weight: 900;
    font-size: 2em;
    color: #61dbfb;
`;

export const StyledContainer = styled.div`
    margin: 0 auto;
    height: 10vh;
`;
