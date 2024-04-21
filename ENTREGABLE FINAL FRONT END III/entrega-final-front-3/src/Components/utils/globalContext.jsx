import { createContext, useReducer } from "react";

function reducer(state, action) {
  //actualizar el estado segun la accion.
  //la pruncion, cuando nos digan que vamos a gregar a favoritos, lo que va a estar dentro de data, lo vamos agregar al localStorage. Cuando se diga que vamos a cambiar de tema sera de light a dark.(switch )
  switch (action.type) {
    case "AGREGAR_FAVORITOS":
      //localStorage.setItem("doctorHighLights", state.data);
      if (state.data.find((n) => n.id == action.object.id)) {
        alert("Ya se agrego este doctor ❌❌");
      } else {
        state.data.push(action.object);
        localStorage.setItem("favoritos", state.data);

        console.log(state);
      }

      break;

    case "CAMBIAR_TEMA":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      console.log(state.theme);
      break;
  }
  return state;
}

export const initialState = {
  theme: "light",
  data: [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, action] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ action, state }}>
      {children}
    </ContextGlobal.Provider>
  );
};
