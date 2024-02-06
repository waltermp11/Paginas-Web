 
 import styles from "../Styles/Formulario.module.css"
 function Formulario() {
    
    
    
    return (
        <div className={styles.formulario_principal}>

            <h1>Probando Componentes en Typescript para el desarrollo de las paginas  ✅✅✅</h1>

            <form className= {styles.formulario}>
                <label>Nombre </label>
                <input placeholder="Ingrese su nombre " type="text"/>
                <label>Apellido</label>
                <input placeholder="Ingrese su apellido " type="text"/>







            </form>


        </div>
    )
}

export default Formulario;