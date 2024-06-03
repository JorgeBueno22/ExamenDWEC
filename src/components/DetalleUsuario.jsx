import React from 'react'
import { useParams } from 'react-router-dom'

export const DetalleUsuario = () => {


    let {usuario} = useParams();
    let {password} = useParams();

  return (
    <>
    <p>HOLA DETALLE USUARIO</p>
    </>
  )
}
