import React from 'react'
import { Cabecera } from './components/Cabecera'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { DetalleUsuario } from './components/DetalleUsuario';
import { Login } from './components/Login';
import { Inicio } from './components/Inicio';

export const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Cabecera></Cabecera>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route> 
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/detalle/:usuario/:password" element={<DetalleUsuario></DetalleUsuario>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}
