import { INCREASE_NUMBER, DECREASE_NUMBER } from "./case";

const initialState = {
  number: 0,
};

function numberReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        number: number + 1,
      };
    case DECREASE_NUMBER:
      return {
        ...state,
        number: number - 1,
      };
    default:
      return state;
  }
}

export default numberReducer;
