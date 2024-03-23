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
              <input type={'text'} placeholder={'nombre'}/>
            </div>

            
            <div className='input-seccionUno'>
              <input type={'mail'} placeholder={'coreo'}/>
            </div>

            
            <div className='input-seccionUno'>
              <input type={'number'} placeholder={'telefono'}/>
            </div>

            
            <div className='input-seccionUno'>
              <h2>danos un poco de información</h2>
              <textarea type={'text'}/>
            </div>

            <MyButton variant='pink-or'>Contactar</MyButton>
            
        </form>
        
    </div>
  )
}
