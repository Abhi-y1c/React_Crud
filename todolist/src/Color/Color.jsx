import React, { useState } from 'react'
import './color.css'
const Color = () => {
const [color,setColor]=useState("white") 
const changeColor=(newa)=>{
    setColor(newa);
}
  return (
    <div>
         <div style={{backgroundColor:color  }}>

         <button onClick={()=>changeColor('red')}>RED</button>
         <button onClick={()=>changeColor('blue')}>RED</button>
         <button onClick={()=>changeColor('green')}>RED</button>
         </div>
    </div>
  )
}
export default Color
