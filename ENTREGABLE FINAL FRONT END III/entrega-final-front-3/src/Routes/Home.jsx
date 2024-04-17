import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import doctorimg from "../assets/img/doctor.jpg";

const Home = () => {
  const [dataApi, setDataApi] = useState([]);

  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  //Aca tengo que consumir la API
  const API_USERS = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(API_USERS)
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data);
        console.log(data);
      });
  }, []);
  return (
    <main className="home">
      <h1>Home</h1>

      <div className="container-cards">
        {dataApi.map((doctor, id) => (
          <div key={id} className="card-grid">
            <img src={doctorimg} className="doctor-image" />
            <p>{doctor.name}</p>
            <p>{doctor.username}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
