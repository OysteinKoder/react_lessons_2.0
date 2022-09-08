import RandomName from "../../components/randomizer";
import { StyledMain } from "../../components/styles";

const PantePersonSelectorPage = () => {
  return (
    <StyledMain>
      <h2>Pante Selector</h2>
      <article>
        <RandomName />
      </article>
    </StyledMain>
  );
};

export default PantePersonSelectorPage;
