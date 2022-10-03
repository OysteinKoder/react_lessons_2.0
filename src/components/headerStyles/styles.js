import styled from "styled-components";

// we import styled from "styled-components" to tell react that we are using
// styled components
// you write normal css inside the two ``

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 1rem;
  background-color: #47bbed;
`;

// you can also build on top of other components by putting the component inside of ()
// with many css libraries you can also use the components from then in the same way
// sometimes you have to put !important behind each property though
// example: color: salmon !important
export const Paragraph = styled(StyledHeader)`
  color: salmon;
`;
