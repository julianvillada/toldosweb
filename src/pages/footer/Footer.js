import React from 'react'
import './Footer.css'


/*queda pendiente hacer la fecha para que se actualice*/ 
const fecha = document.querySelector('fecha')
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    // fecha.textContent = fechaHoy;
}
fechaActual();
 
export const Footer = () => {

  return (

    <div className='footer' id='contacto'>
        <div className='logo'>
            <h2>Toldos<span>Solespa</span></h2>
            <p>Todos los derechos reservados <span className='fecha'></span> &copy; By Toldos Galaxy</p>
        </div>
    </div>
  )
}



