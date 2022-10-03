import { StyledButton, StyledMain } from "../../components/styles";
import { useEffect, useState } from "react";

const CatFactPage = () => {
  // Contains the state that has catlives in it
  // is catLives is used when refering to the state
  // setCatLives is used to change the state (add or remove lives)
  const [catLives, setCatLives] = useState(9);

  // adds lives to the catLives
  const addLives = () => {
    setCatLives((catLives) => catLives + 1);
  };
  // removes lives from catLives
  const removeCatLives = () => {
    setCatLives((catLives) => catLives - 1);
  };
  // the adds a catLife for every 1500 ms when the function is fired
  const addCatLivesInterval = () => {
    setTimeout(() => {
      setCatLives((catLives) => catLives + 1);
    }, 1500);
  };

  // fires the function when the component is rendered when the [] is empty
  // if you want to fire the function when a state changes you put [theState]
  // inside []
  useEffect(() => {
    addCatLivesInterval();
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
