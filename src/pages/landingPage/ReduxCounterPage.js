import { StyledButton } from "../../components/styles";
import { increase, decrease } from "../../redux/actions";
import store from "../../redux/store";
import { useSelector } from "react-redux/es/exports";

const ReduxCounterPage = () => {
  const increaseCount = () => store.dispatch(increase());
  const decreaseCount = () => store.dispatch(decrease());

  const counter = useSelector((state) => state.currentNumber.number);

  return (
    <div>
      <StyledButton onClick={increaseCount}>add</StyledButton>
      <p>{counter}</p>
      <StyledButton onClick={decreaseCount}>subtract</StyledButton>
    </div>
  );
};

export default ReduxCounterPage;
