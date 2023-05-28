import { Route, Routes } from "react-router"
import { Encabezado } from "../pages/encabezado/Encabezado"
import { SeccionUno } from "../pages/seccionUno/SeccionUno"


export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='encabezado' element = {<Encabezado/>}/>
            <Route path='seccionUno' element = {<SeccionUno/>}/>
        </Routes>
    </div>
  )
}
