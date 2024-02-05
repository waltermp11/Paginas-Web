import styles from "../principal.module.css"; 

function Principal() {

const pokemons = ["pika" , "Bulsbasour", "Totodie"]

    return (

        <div>

            <ul>
                {pokemons.map((item) => (
                    <li className={styles.x} key={item}>{item}</li>
                ))}



            </ul>
        </div>



    );
    
}
export default Principal;