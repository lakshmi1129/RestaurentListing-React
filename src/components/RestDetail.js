import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import Review from "./Review";
import { useSelector } from 'react-redux';


function RestDetail() {
  // 1.get restaurand ID from url
  const urlParams =  useParams()
  console.log(urlParams.id);

   //2. create state to hold restaurent list
  //  const [restaurentList,setRestaurent] =useState([]);


   //3.api call
//    const fetchData = async()=>{
//     await fetch('/db.json')
//     .then ((data)=>data.json()
//     .then (res=>setRestaurent(res.restaurants))
    
//     )
//  }


   // to get updated state from store
   const {restList}= useSelector((state)=>state.restListReducer)
   console.log(restList);




 // 4.to load items or values when a component is created
 useEffect(()=>{
  // fetchData()
},[])
console.log(restList);

// 5. find restaurant whose id is given  in urlParams
const restaurant = restList.find(item=>(
  item.id==urlParams.id
))

console.log(restaurant);

  return (
  <div>
    {
    
    restaurant?(
      <Row className='my-3'>
        <Col md={3}>
        <Image className='border rounded mx-4' src={restaurant.photograph} fluid></Image>
        </Col>
        <Col className='mx-5' md={7}>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.neighborhood}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        
        <p>Cuisine_type: &nbsp; {restaurant.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p> Address: &nbsp; {restaurant.address}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <RestOp op={restaurant.operating_hours}/>
      </ListGroup.Item>
      <ListGroup.Item>
        
        <Row>
          <Review data={restaurant.reviews}/>
        </Row>
        
      </ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>
    ):'No Data'
    }
  </div>
  )
}
  

export default RestDetail