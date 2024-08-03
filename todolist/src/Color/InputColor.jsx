// import React, { useState } from 'react';
// import './ap.css';  // Ensure the correct file name and path

// function Ap() {
//   const [color, setColor] = useState('white');

//   const handleColorChange = (event) => {
//     const newColor = event.target.value;
//     setColor(newColor);
//   };

//   return (
//     <div className="App">
//       <h1>Dynamic Color Change with Input</h1>
//       <div style={{ backgroundColor: color }}>
       
//       </div>
//       <input
//           type="text"
//           placeholder="Enter color"
//           value={color}
//           onChange={handleColorChange}
//         />
//     </div>
//   );
// }

// export default Ap;

// ==========================================================

import React, { useState } from 'react';

const Inputx = () => {
  const [color, setColor] = useState('red');
  const [input, setInput] = useState('');

  const colorChange = (e) => {
    setInput(e.target.value);
  };

  const change= () => {
    setColor(input);
    setInput('');
  };

  return (
    <div style={{ marginLeft: '500px', marginTop: '100px' }}>
      <div style={{ backgroundColor: color, width: '175px', height: '50px' }}></div>
      <input
        type="text"
        placeholder="Enter a color"
        value={input}
        onChange={colorChange}
      />
      <button onClick={change}>Change</button>
    </div>
  );
};
export default Inputx;
