import { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [array10Personas, setArray10Personas] = useState([]);
  const [covidData,setCovidData]= useState([]); //CoviData me va almacenar el  DATA

  const API_DOG_URL = "https://dog.ceo/api/breeds/image/random";
  const API_COVID_URL = "https://api.covidtracking.com/v1/us/daily.json";

//Aca estoy probando haciendo fetch de una API, donde muestro los datos, nos tira una promesa, en esa promesa con el otro then cogemos la informacion, podemos almacenarla en algun lado mientras, 
  useEffect(() => {
    fetch(API_DOG_URL)
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener la imagen", error);
      });
  }, []);

  useEffect(() => {
    fetch(API_COVID_URL)
      .then((response) => response.json())
      .then((data) => {
        setCovidData(data);
        const array1=data.slice(0,10);
        console.log(data);
        setArray10Personas(array1)
      })
      .catch((error) => {
        console.log("Error al obtener los datos de COVID", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Mirandoperros.com</h1>
      {loading ? (
        <p>cargando ...</p>
      ) : (
        <div>
          <img src={dogImage} alt="un Perro !" />
        </div>
      )}

      <h1>Api de Covid</h1>
      <h2>Resultados:</h2>
      <ul>
        {array10Personas.map((paciente, index) => (
          <li key={index}>El paciente tiene los siguientes datos -- Date: {paciente.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
