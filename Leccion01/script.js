//alert ("This is an alert!");

//confirm ("do yo want continue with the procedure");

/*let fullName=prompt ("Hello, please type your name to continue with the inscription in the GYM");

console.log(fullName);*/

//Example how to do a simple validation with Js

/*.let firstConfirmation = confirm("Do you agree with the paperwork?");


if (firstConfirmation ) {

  let name = prompt("Hello, please sign you full name: ");
  
  if (name==null) {
    alert("Pls write type your name.")
  }
  else{
    alert("Hello, " + name + " How are you?");
  }
} else {
  alert("We can't continue with the procedure :c");
}*/

/*let personaje = {
  nombre: "Walter",
  apellido: "Montoya",
  edad: 22
};

for (const caracteristica in personaje) {
console.log(caracteristica,personaje[caracteristica]);
        
    }


    let series = ["The Greys Anatomy",  "Kimetsu","Marvel"];

    for (const serie of series) {
        console.log(serie);
    }*/

    /*for (let i = 0; i < series.length; i++) {
        let positionOfMarvel =  series.indexOf('Marvel');
        console.log("La posicion de la pelicula Marvel es :"+ positionOfMarvel);
        
    }*/
//let elh1 = document.querySelector("h1");
// console.log(elh1);

// let ul = document.querySelector(".lista1"); // asi es por clase
// console.log(ul);

// let losParrafos = document.querySelectorAll("p");


//Ejemplode For Each

const arrayPrueba =["1","22","5"];

arrayPrueba.forEach(function  (element,index) {
  console.log(index);
  console.log(element);

  
})

