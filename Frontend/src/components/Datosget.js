import axios from "axios";
import { useEffect, useState } from 'react';



const Datosget = () =>{

    useEffect(()=>{
      axios.get('http://localhost:3002/api/notes')
      .then(response => console.log(response))
      .catch(error => console.log(error))
      
    },[])
   return(
    <div className="">

    </div>
   
  )}
  
  export default Datosget;