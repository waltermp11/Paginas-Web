import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    name: "Gaming Laptop 1",
    description: "Product Description is not available",
  },
  {
    id: 2,
    name: "Gaming Laptop 2",
    description: "Product Description is not available",
  },
  {
    id: 3,
    name: "Gaming Laptop 3 ",
    description: "Product Description is not available",
  },
  {
    id: 4,
    name: "Gaming Laptop 4 ",
    description: "Product Description is not available",
  },
  {
    id: 5,
    name: "Gaming Laptop 5 ",
    description: "Product Description is not available",
  },
];
//EN ESTE CASO VAMOS A HACER LOS COMPONENTES ACA

function ProductList() {
  return (
    <>
      <div>
        <h2>Product List 📃📃📃</h2>
        <ul>
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}> {product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

//Detalle cada producto, este seria otro componente
function ProcutoDetail() {
  const { productId } = useParams(); // es el Id que nosotros cogemos de params
  const navigate = useNavigate();
  const productIndex = PRODUCTS.findIndex(
    (product) => product.id == parseInt(productId)
  ); //Me recorre mi array, cuando de true tiene que coincidir con el id que encontro en params, esta funcion almacena la posicion!

  const product = PRODUCTS[productIndex];

  const handleNextProduct = () => {
    const nextProductIndex = (productIndex + 1) % PRODUCTS.length;
    navigate(`/products/${PRODUCTS[nextProductIndex].id}`);
  };

  const handlePreProduct = () => {
    const prevProductIndex =
      (productIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
    navigate(`/products/${PRODUCTS[prevProductIndex].id}`);
  };

  //ahora renderizamos el producto que nosotros almacenamos en la variable Product
  return (
    <>
      <div>
        <h1>Detalles del Producto</h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <button onClick={handlePreProduct}>Anterior </button>
        <button onClick={handleNextProduct}>Siguiente</button>
      </div>
    </>
  );
}

import "./App.css";
//vamos a tener una lista de productos que la guardaremos en una array.
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="products">Products </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<h2>Pagina de Inicio</h2>} />
            <Route path="products" element={<ProductList/>} />
            <Route path="/products/:productId" element={<ProcutoDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
