import { INCREASE_NUMBER, DECREASE_NUMBER } from "./case";

export const increase = () => {
  return {
    type: INCREASE_NUMBER,
    payload: 1,
  };
};

export const decrease = () => {
  return {
    type: DECREASE_NUMBER,
    payload: 1,
  };
};
