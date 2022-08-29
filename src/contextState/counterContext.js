import { createContext } from "react";

// Here we define a new Context.
// This can be wrapped around children to provide a state to all children:
// The state will be stored in the value prop
// <CounterContext.Provider value={} >
//  <App/>
// <CounterContext.Provider />

// The value is whatever state you want to make available throughout
// the children.
export const CounterContext = createContext();
