import React, { useContext, useEffect, useState } from 'react'
import Navbarr from './Navbarr'
import { Card, Col, Row } from 'react-bootstrap'
import { addcontext } from './Contextshare'

function Cart() {
    // const [products,setproducts]=useState([])
    const {addtocart,setaddtocart}=useContext(addcontext)
    const[totprice,settotprice]=useState()
    const [checkoutclick,setcheckoutclick]=useState(false)
   
    const handlecheckout=()=>{
        setcheckoutclick(true)
        const price=addtocart.map((prices)=>{
            return prices.price
        })
        const totalprice=price.reduce((a,b)=>{
            return a+b
        })
        settotprice(totalprice)
        console.log(totalprice);
    }

    const handleorder=()=>{
        alert("Order Placed Successfully")
        setaddtocart([])
    }
  return (
    <>
    <Navbarr/>
    {addtocart.length>0?<div className='mt-5 ms-3'>
        <Row>
            <Col lg={8} sm={12} md={12} xl={8}>
            <Row>
            {
                addtocart?addtocart?.map((products)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            
            <Card style={{ width: '15rem' }} className='mb-4 shadow rounded'>
                 <Card.Img variant="top" src={products.image} style={{height:'200px',width:'100%'}} />
                 <Card.Body>
                   <Card.Title>{products.title.slice(0,16)}</Card.Title>
                   <Card.Text>
                     $ {products.price}
                   </Card.Text>
                  <div className='d-flex justify-content-center'>
                     {/* <Button variant="outline-primary me-3"><i className="fa-solid fa-cart-shopping"></i> </Button>
                     <Button variant="outline-primary"><i className="fa-solid fa-heart"></i></Button> */}
                  </div>
    
                 </Card.Body>
               </Card>
                       </Col>
                       
                )):"Your Cart Is Empty"
            }
            
            </Row>
            </Col>

            <Col lg={4} sm={0} md={0} xl={4} >
             <div className='bg-light shadow me-2 d-flex flex-column justify-content-center ' style={{height:'100%',width:'100%'}}>
             <div className='mt-5 d-flex justify-content-center'>
             <button className='btn btn-outline-success' onClick={handlecheckout}>Checkout</button>
             </div>
             <div className='d-flex flex-column mt-5'>
                {addtocart.map((newmap)=>(
                    <div className='d-flex justify-content-center'>
                         <p className='me-3 fw-bolder'>{newmap.title.slice(0,19)}...</p>
                         <p className='text-danger fw-bolder'>${newmap.price}</p>
                    </div>
                   
                ))}

             </div>
             
             <div className='d-flex justify-content-center'>
             {checkoutclick&&<h3>Total Price:  {totprice}</h3>}
             </div>
             {checkoutclick&&
             <button className='btn btn-outline-primary mt-5' onClick={handleorder}>Order Now</button>
             
             }
             </div>
            </Col>
        </Row>
      
        
    </div>: <h2 className='text-danger text-center mt-5'>Cart Empty</h2>}
                    </>
  )
}

export default Cart