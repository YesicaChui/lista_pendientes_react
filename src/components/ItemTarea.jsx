import React from 'react'
import editar from "../assets/editar.png"
import borrar from "../assets/tacho.png"
import circuloVacio from "../assets/circulo_basio.png"
import circuloLleno from "../assets/circulo_lleno.png"
import Tarea from './Tarea'
import ImgBoton from './ImgBoton'

const ItemTarea = ({estaCompletada=false, textoTarea }) => {
  return (
    <div className="flex justify-center gap-2 mb-3 items-center px-4" >
      <img src={estaCompletada?circuloLleno:circuloVacio} alt="" />
      <Tarea texto={textoTarea} tachado={estaCompletada}  />
      <ImgBoton imagen={editar} />
      <ImgBoton imagen={borrar} />
    </div>)
}

export default ItemTarea