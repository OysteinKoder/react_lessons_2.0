import { CounterContext } from "../../contextState/counterContext";
import { useContext } from "react";
import { StyledButton } from "../../components/styles";

const CounterContextPage = () => {
  // useContext accepts multiple states provided by the CounterContext
  // provider in app.js
  // You can look at it as a global useState where you make the state
  // global by wrapping a provider around your app.js
  const { count, setCount } = useContext(CounterContext);

  // decreases the count
  const decrease = () => {
    setCount((count) => count - 1);
  };
  // increases the count
  const increase = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <StyledButton onClick={decrease}>-</StyledButton>
      <StyledButton onClick={increase}>+</StyledButton>
    </>
  );
};

export default CounterContextPage;
