import { useState, useEffect } from "react";
import axios from "axios";




const Display=()=>{

const [myData, setdata]= useState([]);

const loadData=()=>{
       let apis = `http://127.0.0.1:8000/usersss/`
              axios.get(apis).then((res)=>{
                     setdata(res.data);
                     console.log(res.data);
              });
}
useEffect(()=>{
       loadData();

}, []);

const ans=myData.map((key)=>{
       return(
              <>
              <tr>
                     {/* <td>{key.EmployID}</td> */}
                     <td>{key.Name}</td>
                   
              </tr>
              
              </>
       );
})



       return(
        <>
       <center><h1>Display Records </h1></center> 
        <table width="100%" align="center" border="1px">
              <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Address</th>
                     <th>Salary</th>
              </tr>
              {ans}
        </table>
    
        </>
       );
}

export default Display;