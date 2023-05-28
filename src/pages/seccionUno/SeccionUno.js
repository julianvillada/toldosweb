import React from 'react'
import { MyButton } from '../../Components/MyButton/MyButton'
import './SeccionStyle.css'



export const SeccionUno = () => {
  return (

    <div className='contenido-encabezado contenedor'>

        <div className='texto-encabezado'>
            <h1>Proteccion solar inteligente, 
              transformamos tu espacio</h1>
        </div>

        <form className='formulario-seccionUno'>
          <h2>Agenda una cita con nosotros</h2>

            <div className='input-seccionUno'>
              <input type={'text'} placeholder={'nombrre'}/>
            </div>

            
            <div className='input-seccionUno'>
              <input type={'mail'} placeholder={'corrreo'}/>
            </div>

            
            <div className='input-seccionUno'>
              <input type={'tel'} placeholder={'telefono'}/>
            </div>

            <MyButton variant='pink-sky'>Contactar</MyButton>
            
        </form>
        
    </div>
  )
}
