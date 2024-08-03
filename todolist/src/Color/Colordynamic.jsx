import React, { useState } from 'react'

const Colordynamic = () => {
  const [color,setColor]=useState('100px')
  const changeColor=(x)=>{
    setColor(x)
  }
  return (
    <div>
       <div style={{backgroundColor:"gray",width:color ,height:"300px" ,padding:"100px"}}>
 
       </div>
       <button onClick={()=>changeColor('200px')}>Increase</button>
       <button onClick={()=>changeColor('100px')}>Decrease</button>
    </div>  
  )
}
export default Colordynamic;
