import React from 'react'

const ImgBoton = ({imagen, color ='#11324D'}) => {
  return (
    <img src={imagen} alt="" className={`cursor-pointer bg-[${color}] rounded-xl p-[5px] w-8`} />
  )
}

export default ImgBoton