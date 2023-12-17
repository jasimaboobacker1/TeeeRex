import React from 'react'
import { getProducts } from '../Services/allApi'
import { Card, Col, Navbar, Row } from 'react-bootstrap';
import Navbarr from './Navbarr';
import Cards from './Cards';
import './home.css'
function Home() {
    
  return (
   <div className='bgfor'>
    <Navbarr/>
    
        <Row className='d-flex mt-5 justify-content-center w-100 ms-4 me-4' style={{height:'100%'}}>
            <Cards/>
        </Row>
    
    </div>
  )
}

export default Home