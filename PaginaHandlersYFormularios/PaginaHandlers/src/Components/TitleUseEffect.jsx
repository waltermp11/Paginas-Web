import React from "react";
import { useState,useEffect } from "react";

const TitleUseEffect = () => {

    const [title,setTitle] = useState("Certified Tech Developer on Digital House")



    useEffect (()=> {
        document.title = title;


    },[title])
  return <>
    <title> </title>
  
  
  
  
  </>;
};

export default TitleUseEffect;
