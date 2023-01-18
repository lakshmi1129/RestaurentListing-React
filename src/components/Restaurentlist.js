import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RestCard from './RestCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestList } from '../actions/restListAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Restaurentlist() {

    // create state to hold restaurent list
    //  const [restaurentList,setRestaurent] =useState([]);

    // api call
    // const fetchData = async()=>{
      //  await fetch('/db.json')
      //  .then ((data)=>data.json()
      //  .then (res=>setRestaurent(res.restaurants))
       
      //  )
    // }

    // to use useDispatchhook
    const dispatch = useDispatch()


    // to get updated state from store
    const {restList}= useSelector((state)=>state.restListReducer)
    console.log(restList);

    // to load items or values when a component is created
    useEffect(()=>{
      
      // fetchData()

      // dispatch the action
     dispatch( RestList())
    },[])
    // console.log(restaurentList);

  return (

    // Restaurent Card
    <Row>
    {
      restList.map(restaurant =>(
       <Col md={6} lg={4} xl={3}>
       {/* child */}
        <RestCard item= {restaurant}/>
        </Col>
      ))
    }
    </Row>
  )
}

export default Restaurentlist