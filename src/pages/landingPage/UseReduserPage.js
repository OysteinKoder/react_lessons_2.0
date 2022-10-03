import { useReducer } from "react";

// contains the initial state used
const initialState = {
  number: 0,
};

// the countReducer is a reducer that contains a switch case
// you can look at switch cases like if else statements
// example: when the "INCREASE" case is dispatched it changes the state in the return
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
  // here we define what reducer we will use (the reducer can change the state)
  // we also define what state should be changed (initialState)
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>{state.number}</p>
      <button
        onClick={() => {
          // with the dispatch we tell the reducer what case should be fired in
          // the reducer
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
