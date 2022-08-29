import { useContext } from "react";
import { StyledMain } from "../../components/styles";
import { CounterContext } from "../../contextState/counterContext";

const ContextUsedPage = () => {
  //here we are using useContext to make CounterContext`s content
  //available from the CounterContext.provider in app.js
  const { count } = useContext(CounterContext);
  return (
    <StyledMain>
      <h2>Context Used</h2>
      <h2>{count}</h2>
    </StyledMain>
  );
};

export default ContextUsedPage;
