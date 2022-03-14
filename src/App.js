import  './App.css' ;

import axios from "axios";
import React,{useEffect,useState} from "react";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";


function App  ( ) { 
  const [state, setstate] = useState([]);
 useEffect ( () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      setstate(response.data) } )} , [ ] )
      
    
       
      
      
 

  return (
    <div>
   
      <UserList users={state}/> 
    </div>
  ) ;
}

export  default  App ;
