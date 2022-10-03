import axios from "axios";
import { useState, useEffect } from "react";

const CatFactPage = () => {
  // contains sate for error and the data which will be used in the api call
  const [data, setData] = useState();
  const [error, setError] = useState();

  // contains api call that will be lunched when the component loads
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
        {
          // data.map is an array method that goes through every index in the array
          // and lets you fire a function for every step
          // in each step the content in the index is also available
          // here we return a p containing content from that array index
        }
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
