import { Component } from "react";

class ProductoClass extends Component {
  constructor() {
    super();

    //Esto va a tener un estado inicial
    this.state = {
      cantidad: 0
    }
  }

  render() {
    return (
      <>
        <h2>Componente Productos</h2>
      </>
    );
  }
}

export default ProductoClass;