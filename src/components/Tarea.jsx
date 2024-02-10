import React from 'react'

const Tarea = ({texto,tachado=false}) => {
  return (
    <p className={`bg-[#E7E0C9] rounded-md px-[20px] w-full ${tachado?"line-through":""}`}>{texto}</p>
  )
}

export default Tarea