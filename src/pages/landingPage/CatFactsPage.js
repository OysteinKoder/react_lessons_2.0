import { StyledButton, StyledMain } from "../../components/styles";
import { useEffect, useState } from "react";

const CatFactPage = () => {
  const [catLives, setCatLives] = useState(9);

  const addLives = () => setCatLives(catLives + 1);
  const removeLives = () => setCatLives(catLives - 1);

  useEffect(() => {
    setTimeout(addLives, 1000);
  });
  return (
    <StyledMain>
      <h2>React Hooks, useState/useEffect</h2>
      <article>
        <p>This Cat has: {catLives} lives left</p>
        <StyledButton onClick={addLives}>Add life</StyledButton>
        <StyledButton onClick={removeLives}>Remove life</StyledButton>
      </article>
    </StyledMain>
  );
  return (
    <StyledMain>
      <h2>Cat Fact Page</h2>
      <article>
        <p>Cat lives : {catLives}</p>
      </article>
    </StyledMain>
  );
};

export default CatFactPage;
