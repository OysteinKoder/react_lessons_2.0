import { StyledMain } from "../../components/styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CatFactPage = () => {
  return (
    <StyledMain>
      <h2>Cat Fact Page</h2>
      <article>
        <p>Cats are cool yo</p>
      </article>
    </StyledMain>
  );
};

export default CatFactPage;
