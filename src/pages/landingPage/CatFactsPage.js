import { StyledMain } from "../../components/styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CatFactPage = () => {
  const [data, setData] = useState();
  const getCatData = () => {
    axios.get("https://catfact.ninja/facts").then((res) => {
      setData(res.data.data);
    });
  };
  console.log(data);
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
  } else {
    return <div>loading</div>;
  }
};

export default CatFactPage;
