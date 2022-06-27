import { INCREASE_NUMBER, DECREASE_NUMBER } from "./case";

const initialState = {
  number: 1,
};
function numberReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER:
      console.log(state);
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE_NUMBER:
      console.log(state);
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default numberReducer;
