//CODIGO DE PAGINA
//objeto donde voy a cargar mis datos
function capturarDatosFormulario() {
  let usuario = {
    nombre: "",
    apellido: "",
    direccion: "",
    condicion: "",
  };
  //capturamos los elementos primero
  const nombre = document.getElementById("nombre");
  console.log(nombre);
  const apellido = document.getElementById("apellido");
  console.log(apellido);
  const direccion = document.getElementById("direccion");
  console.log(direccion);
  const terminosYCondiciones = document.querySelectorAll("[name=condicion]");


//cargar los datos
usuario.nombre = nombre.value;
usuario.apellido = apellido.value;
usuario.direccion = direccion.value;
terminosYCondiciones.forEach((decision)=>{
  if(decision.checked){
    usuario.condicion=decision.id;
  }
});

return usuario;
}
// Evento submit
let formulario1 = document.getElementById("formulario1");
formulario1.addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = capturarDatosFormulario();
  console.log(datos);
  
  console.log(validarformulario());
});

//funciones.
function validarformulario() {
  setTimeout(() => {
    formulario1.reset();
  }, "5000");
}