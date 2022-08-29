import { StyledMain } from "../../components/styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CatFactPage = () => {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();
  const getCatData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch(setApiError(true));
  };
  useEffect(() => {
    getCatData();
  }, []);

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
