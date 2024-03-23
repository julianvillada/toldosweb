import React from 'react'
import { MyButton } from '../../Components/MyButton/MyButton'
import  './Nosotros.css'

export const Nosotros = () => {
  return (
    <div className='nosotros contenedor' id='nosotros'>
        <h2>Sobre nosotros</h2>
        <div className='contenido-nosotros'>
            <div className='texto-nosotros'>
                <h3>Transformamos tu espacio</h3>
                <p>Eficiencia en la compra: En nuestra empresa,
                   nos enfocamos en brindar a nuestros clientes una experiencia de compra rápida y sencilla. </p>
                   <MyButton variant='blue-sky' size={280}>
                    Saber mas
                   </MyButton>
            </div>
        </div>
    </div>
  )
}
