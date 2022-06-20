import { StyledMain } from "../../components/styles";
import { PropExample } from "./studentProjectsPage/PropExample";

const PropsExample = (props) => {
  return (
    <StyledMain>
      <h2>Props</h2>
      <article>
        <p>Much wow, props such reusable, wow.</p>
      </article>

      <PropExample
        headline="title of the page"
        bananSkall="joapisdjpoåidguhaqåofrighråoui"
        num1={2}
        num2="2"
      />
    </StyledMain>
  );
};

export default PropsExample;
