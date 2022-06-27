import { INCREASE_NUMBER, DECREASE_NUMBER } from "./case";

export const increase = () => {
  return {
    type: INCREASE_NUMBER,
    payload: 2,
  };
};

export const decrease = () => {
  return {
    type: DECREASE_NUMBER,
    payload: 3,
  };
};
