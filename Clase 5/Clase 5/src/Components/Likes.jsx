import React, { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0)
  const [puntos,setPuntos] = useState(0)
  const contadorLikes =() => {
    setLikes (likes+1);
    setPuntos(puntos+100)

  }

  return (
    <>
      

      <button
        onClick={contadorLikes }
      >
        ❤️ {likes} 
      </button>
      <p>{puntos}</p>
    </>
  );
};

export default Likes;
