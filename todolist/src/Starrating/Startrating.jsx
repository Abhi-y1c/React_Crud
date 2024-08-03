import React, { useState } from 'react';
import './Starrating.css';

function App() {
  const [color, setColor] = useState('white');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Color Change App</h1>
      <div>
        <button onClick={() => changeColor('red')}>Red</button>
        <button onClick={() => changeColor('green')}>Green</button>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('yellow')}>Yellow</button>
        <button onClick={() => changeColor('white')}>Reset</button>
        <button onClick={()=>changeColor('gray')}>sdf</button>
      </div>
    </div>
  );
}

export default App;
