import React from "react";

import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/globalContext";
import doctorimg from "../assets/img/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  let doctores = [];
  useEffect(() => {
    doctores = localStorage.getItem("favoritos");
  }, [state]);
  
  console.log(doctores.data);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="container-cards">
        {state.data.map((doctor, index) => (
          <div key={index} className="card-container">
            <div className="card-container-img">
              <img src={doctorimg} className="doctor-image" alt={doctor.name} />
              <p>{doctor.name}</p>
              <p>{doctor.username}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
