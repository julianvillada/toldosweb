import React, { useState } from 'react';

import Hamburger from 'hamburger-react'
import { SeccionUno } from '../seccionUno/SeccionUno';
import { InfoVentajas } from '../infoVentajas/InfoVentajas';
import { Nosotros } from '../nosotros/Nosotros';
import { Servicios } from '../servicios/Servicios';
import { Footer } from '../footer/Footer';
import { Contacto } from '../contacto/Contacto';

import './EncabezadoStyle.css';


export const Encabezado = () => {

const enlaces = document.querySelectorAll('.navegacion a');
const navegacion = document.querySelector ( '.navegacion')

const [menu, setMenu ] = useState (true)
const toggleMenu = () =>{
  setMenu(!menu)
}


function cerrarMenu () {
  enlaces.forEach( enlace =>{
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);
      cambioSeccion(seccion);
      if(e.target.tagName === 'A'){
        navegacion.classList.add('ocultar')
      }
    })
  })
}

function cambioSeccion(seccion){
  seccion.scrollIntoView({
    behavior:'smooth'
  })
}



cerrarMenu();

    return (
        <header className='encabezado' id='inicio'>
           <div className="contenedor-navegacion">
              <div className='logo'>
                <h2>Toldos <span>Galaxy </span></h2>
                <p className='titulo-p'>Especialistas en Toldos</p>
              </div>

              <nav className= { `navegacion ${ menu ? 'ocultar' : ''}`}>
                <a href='#inicio'>Inicio</a>
                <a href='#nosotros'>Nosotros</a>
                <a href='#servicios'>Servicios</a>
                <a href='#contacto'>Contacto</a>
              </nav>

              <div className='hamburguesa' onClick={ toggleMenu}>
                <Hamburger  
                rounded 
                size={40} 
                duration={0.8} 
                color = '#07070A'
                />
              </div>
              
          </div>
          <SeccionUno/>
          <InfoVentajas/>
          <Nosotros/>
          <Servicios/>
          <Contacto/>
          <Footer/>
        </header>
       
      );
}



