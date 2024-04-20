import React, { useEffect, useState } from "react";

import doctorimg from "../assets/img/doctor.jpg";
import favorito from "../assets/img/favorito.png.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/globalContext";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const {action} = useContext(ContextGlobal);
  console.log(action);

  const API_USERS = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(API_USERS)
      .then((response) => response.json())
      .then((data) => {setDataApi(data); console.log(data)});
      
  }, []);



  return (
    <main className="home">
      <h1>Home</h1>
      <div className="container-cards">
        {dataApi.map((doctor, index) => (
          <div key={index} className="card-container">
            <Link to={`/dentist/${doctor.id}`}>
              <div className="card-container-img">
                <img
                  src={doctorimg}
                  className="doctor-image"
                  alt={doctor.name}
                />
                <p>{doctor.name}</p>
                <p>{doctor.username}</p>
              </div>
            </Link>
            <button className="enviar" onClick={()=>action({type:"AGREGAR_FAVORITOS",object:doctor})} >
              <img src={favorito} className="favorito-icono" alt="Favorito" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
