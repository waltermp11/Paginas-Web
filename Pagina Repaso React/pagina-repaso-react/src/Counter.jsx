import React from "react";
import { useContext } from "react";
import { CounterContext } from "./context";
const Counter = () => {

    const {state,dispatch} = useContext(CounterContext);
    const {state2,action} = useContext(CounterContext);
  return (<div>
    <h1>Contador : {state.count}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}> INCREMENT ⬆️</button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}> DECREMENT ⬇️</button>

    <button onClick={()=>action()}>SUBAL {state2}</button>

  


  </div>);
};

export default Counter;
