
import { useEffect, useState } from "react"
import ItemTarea from "./components/ItemTarea"

/* const tareas = [
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
    completado: true
  },
  {
    id:5,
    tarea:"Aprender Redux",
    completado: false
  },
  {
    id:6,
    tarea:"Aprender Node",
    completado: true
  },
]
 */
function App() {
  const [inputTarea, setInputTarea] = useState("")
  const [misTareas, setMisTareas] = useState([])
  const leerDatos = async () => {
    const res = await fetch("data.json")
    const data = await res.json()
    setMisTareas(data)
  }

  useEffect(() => {
    leerDatos()
  }, [])

  const agregarTarea = () => {
    console.log(inputTarea)
    //creo el objeto
    const tareaNueva = {
      id: misTareas.length + 1,
      tarea: inputTarea,
      completado: false
    }
    //agrego el objeto en las tareas
    //enviar a la nube y luego //almacenamiento
    setMisTareas([...misTareas, tareaNueva])

  }

  return (
    <>
      <div className=" flex text-center justify-center w-[600px] m-auto mt-5 bg-white">
        <div className=" w-[400px]  m-auto mt-5 bg-slate-400 rounded-md mb-2">
          <h1 className="font-bold text-xl text-[#11324D] my-4">Lista de Tareas</h1>
          <div className="flex justify-around ">
            <p>Nª Tarea: {misTareas.length}</p>
            <p>Pendientes: {misTareas.reduce((acu, elemento) => elemento.completado ? acu : acu + 1, 0)}</p>
          </div>
          <p className="text-[#11324D] font-semibold my-4">Agregar Tarea</p>
          <div className=" flex justify-between mb-4 mx-4">
            <input type="text"
              placeholder="¿Qué hay que hacer?"
              className="rounded-[50px] px-5"
              value={inputTarea}
              onChange={(data) => setInputTarea(data.target.value)}
            />
            <button onClick={agregarTarea} className="rounded-lg bg-[#11324D] text-white font-semibold p-[4px] text-center px-4">Agregar</button>
          </div>
          {
            misTareas.map((tarea, index) => (
              <ItemTarea key={tarea.id} textoTarea={tarea.tarea} estaCompletada={tarea.completado} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
