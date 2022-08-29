import { createContext } from "react";

// Here we define a new Context.
// This can be wrapped around children to provide a state to all children:
// <CounterContext.Provider>
//  <App/>
// <CounterContext.Provider value={}/>

// The value is whatever state you want to make available throughout
// the children.
export const CounterContext = createContext();
