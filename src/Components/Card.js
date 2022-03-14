import React from "react";
import {Card} from "react-bootstrap";

function CardUser({User}) {
  
  return (
    <Card style={{  width: "11rem", height: "25rem", marginRight: "30px", marginTop: "40px", backgroundColor: "lightyellow", borderRadius: "8px"   }}>
      <Card.Body>
        <Card.Title style={{fontWeight:"bolder",fontSize:"15px",color:"cornflowerblue" }}>{User.username}</Card.Title>
        <Card.Text  style={{fontSize:"12px",fontWeight:"bold",color:"red", textAlign:"center"}} >
         {User.name} {User.bs}{User.id}{User.email}{User.phone}
        </Card.Text>
     
      </Card.Body>
    </Card>
  ) ;
}

export  default  CardUser ;