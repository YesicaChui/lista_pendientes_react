import circuloVacio from "../src/assets/circulo_basio.png"
import circuloLleno from "../src/assets/circulo_lleno.png"
import editar from "../src/assets/editar.png"
import borrar from "../src/assets/tacho.png"
import ImgBoton from "./components/ImgBoton"
import ItemTarea from "./components/ItemTarea"

import Tarea from "./components/Tarea"

const tareas = [
  {
    id:1,
    tarea:"Aprender React",
    completado: false
  },
  {
    id:2,
    tarea:"Aprender Python",
    completado: true
  },
  {
    id:3,
    tarea:"Aprender Tailwind",
    completado: false
  },
  {
    id:4,
    tarea:"Aprender Animaciones",
    completado: false
  },
]

function App() {

  return (
    <>
      <div className=" flex text-center justify-center w-[600px] h-[500px] m-auto mt-5 bg-white">
        <div className=" w-[400px]  m-auto mt-5 bg-slate-400 rounded-md">
          <h1 className="font-bold text-xl text-[#11324D] my-4">Lista de Tareas</h1>
          <div className="flex justify-around ">
            <p>Nª Tarea: 3</p>
            <p>Pendientes: 2</p>
          </div>
          <p className="text-[#11324D] font-semibold my-4">Agregar Tarea</p>
          <div className=" flex justify-between mb-4 mx-4">
            <input type="text" placeholder="¿Qué hay que hacer?" className="rounded-[50px] px-5" />
            <button className="rounded-lg bg-[#11324D] text-white font-semibold p-[4px] text-center px-4">Agregar</button>
          </div>
          {
            tareas.map((tarea,index)=>(
             <ItemTarea key={tarea.id} textoTarea={tarea.tarea} estaCompletada={tarea.completado}/>
            ))
          }      
        </div>
      </div>
    </>
  )
}

export default App
