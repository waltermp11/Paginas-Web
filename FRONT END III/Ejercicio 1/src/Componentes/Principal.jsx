import Producto from './Producto'

function Principal() {

    return (
        <div className='Productos'>
            <Producto nombre="Portatil" precio= "2000000" imagen="https://media.istockphoto.com/id/479520746/es/foto/ordenador-port%C3%A1til-con-pantalla-en-blanco-en-blanco.jpg?s=612x612&w=0&k=20&c=n5SDdluMvzRdvAGX3iZHnlU_MPj4yyDyyi_kgsjgocY="/>
            <Producto nombre="Cargador Portatil" precio= "240000" imagen ="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSc08RXyUgNlxMzS_Q0UD_zqUB9D9c9vP2mVijcUKSdt7burKOg7yfLToH16bL2OJuC5BVd7FKucZu04PGeaoMka7kiw4ln&usqp=CAE"/>
            <Producto nombre="Monitor 144 Hz" precio= "1500000" imagen = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4JV2vEcd_epKlzIkZPILIix6rlvrsb0rWOG0D_yb2AezSxPe_eg2DQwP5QYoJvgSerHnErtKqdAeJLBhCBCJons6cjmrU5ZuiA9dI-n854IRqeqjdYS7O&usqp=CAE"/>
            <Producto nombre="Teclado reddragon" precio= "150000" imagen="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRepj0d6at3gx7BanfEH_jL6dstfoz5OAQqVBl6dd7VvZUiQYY2X7x0M85bNLdDVwM7QP0e_rvNP5fk3gPL8fMtAqxBMwdpaU681LoZX5eJkIkLIKlUQecD&usqp=CAE"/>

        </div>


    );
    
}
export default Principal;
