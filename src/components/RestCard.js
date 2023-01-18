import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({item}) {
  return (

    //card to display restaurant details 
    <Link to={`restaurant/${item.id}`} style={{ textDecoration: 'none' }} >
        <Card style={{height:"600px" }} className='my-2 mx-1'>
        <Card.Img  className='p-1 ' variant="top" src= {item.photograph} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <p>Cuisine:{item.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            <p> {item.neighborhood}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestCard
