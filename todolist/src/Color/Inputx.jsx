import React, { useState } from 'react'

const Inputx = () => {
    const [color ,setColor]=useState('red')
    const [put,setPut]=useState("")
   const changecolor=(e)=>{
    setPut(e.target.value)
   }
   const chan=()=>{
    setColor(put)

   }
  return (
    <div>
      <div style={{background:color,width:"100px",height:"100px"}}>


      </div>
      <input type="text"
      placeholder='seach'
      value={put}
      onChange={changecolor} />
      <button onClick={chan}>Change</button>
    </div>
    
  )
}

export default Inputx
