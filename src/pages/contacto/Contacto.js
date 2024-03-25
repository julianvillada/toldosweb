import React from 'react'
import './Contacto.css'

export const Contacto = () => {
  return (
    <div className='contacto-empresa'>
        <div className='contacto-empresaListas'>
          <div className='contacto-nosotros'>
          <h2>CONTACTA CON NOSOTROS</h2>
          <ul>
          <li>direccion</li>
          <li>correo electronico</li>
          <li>numero de telefono</li>
          </ul>
          </div>
          <div className='contacto-menuRapido'>
            <h2>MENU RAPIDO</h2>
          <ul>
            <li>inicio</li>
            <li>empresa</li>
            <li>productos</li>
            <li>servicios</li>
          </ul>
          </div>
          <div className='contacto-notasLegles'>
          <h2>NOTAS LEGALES</h2>
          <ul>
            <li>Aviso Legal</li>
            <li>Politicas de privacidad</li>
            <li>Politica de cookies</li>

          </ul>
          </div>
          <div className='contacto-siguenosEnRedes'>
          <h2>SIGUENOS</h2>
          </div>


        </div>
    </div>
  )
}

