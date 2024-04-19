import { useReducer, useEffect } from "react";
import { createContext } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export const CounterContext = createContext(); // el contexto lo voy a usar en otros componentes. ✅

const CounterProvider = ({ children }) => {
  //es children, vamos a usar un contador que va almacenar el valor y con el LocalStorage vamos a poner en el estado que estaba anteriormente.

  const initialState = {
    count: parseInt(localStorage.getItem("count")) || 0, //Condicional sin tener un if ✅✅, lo que haces es que si tenemos algun valor en el localStorage que lo ponga, de lo contrario si no tenemos un valor, sera =0. 
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("count", state.count.toString());
  }, [state.count]);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
