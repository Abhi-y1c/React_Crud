import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Insert = () => {
  const [myData, setMyData] = useState(
    {}
  );
  // const [name, setName] = useState('');

  const loadData = () => {
    let apis = `http://127.0.0.1:8000/usersss/`;
    axios.post(apis, {myData}).then((res) => {
      setMyData([...myData, res.data]);
      console.log(res.data);
      alert("Data ")
    });
    setMyData({
      Name:""
    })
  };

  useEffect(() => {
    // You might want to fetch initial data here
  }, []);

  const handleSubmit = () => {
    loadData();
  };



  return (
    <div>
      <div className='insert'>
        <h1>Insert data</h1>
        <input
          type='text'
          placeholder='Enter name'
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Insert</button>
      </div>
     
    </div>
  );
};

export default Insert;
