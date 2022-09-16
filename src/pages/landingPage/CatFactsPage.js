import { StyledMain } from "../../components/styles";
import { useState, useEffect } from "react";
import axios from "axios";

const CatFactPage = () => {
  // const [data, setData] = useState();
  // const [error, setError] = useState();

  // const apiCall = () => {};

  // useEffect(() => {
  //   axios("https://catfact.ninja/facts")
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios("https://catfact.ninja/facts")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((res) => {
        setError(res);
      });
    return setData((data) => null);
  }, []);

  if (data) {
    return (
      <article>
        {data.map((item, idx) => {
          return <p key={idx}>{item.fact}</p>;
        })}
      </article>
    );
  } else if (error) {
    <h2>Failed to load, please try again</h2>;
  } else {
    <h2>Content Loading</h2>;
  }
};

export default CatFactPage;
