import React ,{ useState } from "react";
import Select from "react-select";
import styles from "../Styles/Formulario.module.css"

const Formulario = ({ onAgregarPedido }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sabor, setSabor] = useState("");
  const [direccion, setDireccion] = useState("");
  const [especificacion, setEspecificacion] = useState("");

  const saboresDePizzas = [
    { label: 'Hawaiana', value: 'Hawaiana' },
    { label: "Peperonni", value: "Peperonni" },
    { label: "Jamon y queso", value: "Jamon y queso" },
  ];
  //Funcion para prevenir el comportamiento habitual del Formulario !

  function handlerSubmit(e) {
    e.preventDefault(); //✅✅

    if (validacionCamposVacios(nombre, apellido, especificacion) == true) {
      onAgregarPedido({ nombre, sabor, direccion, especificacion }); //Desestructuramos nuestra prop que ene ste caso se mando una funcion! ✅
      setNombre("");
      setDireccion("");
      setSabor("");
      setEspecificacion("");

      alert(
        "Se guardo el pedido Exitosamente ✅" +
          nombre +
          direccion +
          especificacion +
          sabor
      );
      console.log(nombre, sabor, direccion, especificacion);
    }
  }

  //validacion de Campos Vacios

  function validacionCamposVacios(nombre, direccion, especificacion) {
    let state = false;

    if (
      nombre.length > 3 &&
      direccion.length > 3 &&
      especificacion.length > 3
    ) {
      state = true;
      alert("Si cumple con los paremtros ✅");
      return state;
    } else {
      alert("No cumple con los parametros ❌");
    }
    return state;
  }

  //funcion para capturar elemento Select
  function selectSaborDePizza({value}) {
    setSabor(value);
    console.log(sabor);
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Ingrese su Nombre : </label>
        <input
          type="text"
          placeholder="Nombre "
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Ingrese su Apellido : </label>
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Sabor de Pizza 🍕</label>

        <Select className={styles.select_sabor} options={saboresDePizzas} onChange={selectSaborDePizza} />

        <label>Ingrese la Direccion para el Domicilio 🏠 : </label>
        <input
          placeholder="Direccion"
          value={direccion}
          className={styles.direccion}
          onChange={(e) => {
            setDireccion(e.target.value);
          }}
        />
        <label>Especificaciones (Apto, Edificio y otros) : </label>
        <input
          placeholder="Instruciones"
          value={especificacion}
          onChange={(e) => {
            setEspecificacion(e.target.value);
          }}
        />

        <button type="submit">Enviar </button>
      </form>
    </div>
  );
};

export default Formulario;
