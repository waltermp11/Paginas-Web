import { createContext } from "react";
import { useReducer } from "react";

const counterReducer (state,action) => {


    switch (action.type) {
        case "INCREMENT":
            return {count:state.count+1}
            break;
        case "DECREMENT":
            return{count:state.count-1}
            break;
        default:
            break;
    }
}

export const CounterContext = createContext();
