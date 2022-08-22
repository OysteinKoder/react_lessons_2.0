import { StyledButton, StyledMain } from "../../components/styles";
import { useEffect, useState } from "react";

const CatFactPage = () => {
  const [catLives, setCatLives] = useState(9);

  const addLives = () => {
    setCatLives((catLives) => catLives + 1);
  };

  const removeCatLives = () => {
    setCatLives((catLives) => catLives - 1);
  };

  const example = () => {
    setTimeout(() => {
      setCatLives((catLives) => catLives + 1);
    }, 1500);
  };

  useEffect(() => {
    example();
    // eslint-disable-next-line
  }, []);
  return (
    <StyledMain>
      <h2>React Hooks, useState/useEffect</h2>
      <article>
        <p>This Cat has: {catLives} lives left</p>
        <StyledButton onClick={addLives}>Add life</StyledButton>
        <StyledButton onClick={removeCatLives}>Remove life</StyledButton>
      </article>
    </StyledMain>
  );
};

export default CatFactPage;
