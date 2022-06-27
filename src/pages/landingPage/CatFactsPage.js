import { StyledButton, StyledMain } from "../../components/styles";
import { useEffect, useState } from "react";

const CatFactPage = () => {

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

  if (data) {
    return (
      <StyledMain>
        <h2>Cat Fact Page</h2>
        <article>
          {data.map((item, idx) => {
            return <p key={idx}>{item.fact}</p>;
          })}
        </article>
      </StyledMain>
    );
  } else if (apiError) {
    return (
      <StyledMain>
        <h2>Cat Fact Page</h2>
        <article>
          <p>Content failed to load, please try again</p>
        </article>
      </StyledMain>
    );
  } else {
    return (
      <StyledMain>
        <h2>Cat Fact Page</h2>
        <article>
          <p>The content is loading</p>
        </article>
      </StyledMain>
    );
  }
};

export default CatFactPage;
