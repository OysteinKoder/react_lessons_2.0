import { StyledMain } from "../../components/styles";

const PropsExample = (props) => {
  const { headline, text, num1, num2 } = props;
  console.log(num1 + num2);
  return (
    <StyledMain>
      <h2>{headline}</h2>
      <article>
        <p>{text}</p>
      </article>
    </StyledMain>
  );
};

export default PropsExample;
