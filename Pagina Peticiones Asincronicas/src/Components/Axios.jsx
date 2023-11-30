// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";

const Axios = () => {
  const handlerComments = async () => {
    try {
      //Almacenamos nuestras variables
      //Recordar como es un fetch y AXIOS, axios
      const url = "https://jsonplaceholder.typicode.com/comments";
      const res = await axios.get(url);

      for (let i = 0; i < 100; i++) {
        console.log(res.data[i].email);
      }
    } catch (error) {
      console.log(error);
    }

    
  };

  //Vamos a hacer otro handler, pero con el metodo de HTTP que se llama POST
  const handlerPost = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const send = {
        id: 1,
        title: "Axios",
        body: "Post mediante Axios",
        userId: 1,
      };
      const res = await axios.post(url,send);
      console.log(res);
    } catch (error) {
      //Esto es por si tira error o tiene una falla
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={handlerComments}>Traer Comentarios</button>

      <button onClick={handlerPost}> Postear</button>
    </>
  );
};

export default Axios;
