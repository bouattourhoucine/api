import React from 'react'
import Card from './Card'

function UserList({users}) {
  
  return (
    <div  style={{display:"flex",margin:"auto",width:'70%',flexWrap:"wrap",marginTop:"100px" }}>
     
    {users.map((elt,index)=>(<Card key={index}User={elt}/>))}

    </div>
  )
}

export  default  UserList