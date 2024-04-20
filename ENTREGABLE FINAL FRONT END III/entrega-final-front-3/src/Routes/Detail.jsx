import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState("");
  const { id } = useParams(); // Destructurando directamente desde useParams para simplificar el código

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data);
        console.log(dentist[0].name);
      });
  }, [id]); // Dependency array to ensure useEffect is called when id changes

  return (
    <div>
      <h1> 🥼 Detalles del Dentista con id 🥼  {id}</h1>
      {dentist && (
        <table className="table-detail">
          <tr>
            <th>Name 📃</th>
            <th>Email 📧</th>
            <th>Phone 📱</th>
            <th>Website 🌐</th>
          </tr>
          <tr>
            <td>{dentist[0].name}</td>
            <td>{dentist[0].email}</td>
            <td>{dentist[0].phone}</td>
            <td>{dentist[0].website}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Detail;
