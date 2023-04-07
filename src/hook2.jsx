import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
let Hoook2=()=>{
    let [a,seta]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((val)=>{
            // console.log(val.data);
            seta(val.data)
        })
    })
    let aa=a?.map((val,ind)=>{
        return(
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={val.image} />
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
              <Card.Text>
                {val.description}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </div>
        )
    })

    return(
        <>
         <h1>Child</h1>
         {aa}
        </>
    )
}
export default Hoook2