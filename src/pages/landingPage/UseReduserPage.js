import { useReducer } from "react";

const initialState = {
  number: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1 };
    case "DECREASE":
      return { number: state.number - 1 };
    default:
      return null;
  }
};

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>{state.number}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default UseReducerPage;
