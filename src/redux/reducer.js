import { INCREASE_NUMBER, DECREASE_NUMBER } from "./case";

const initialState = {
  number: 0,
};

function numberReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };

    case DECREASE_NUMBER:
      return {
        ...state,
        number: state.number - action.payload,
      };

    default:
      return state;
  }
}

export default numberReducer;
