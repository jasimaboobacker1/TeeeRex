import React, { useContext, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from '../Services/allApi';
import { addcontext } from './Contextshare';

function Cards() {
    const [products,setproducts]=useState([])
    const {addtocart,setaddtocart}=useContext(addcontext)
    const {addwish,setaddwish}=useContext(addcontext)


    useEffect(()=>{
        handleapi()
    },[])


    const handleapi=async()=>{
        const res= await getProducts()
        console.log(res.data);
        setproducts(res.data)
       }


       const handlecart=(e,items)=>{
        // console.log(e);
        e.preventDefault()
        // var arr=[]
        // arr=arr.concat(items)
        setaddtocart(addtocart.concat(items))
        console.log(addtocart);
       }

       const handlewish=(e,items)=>{
        e.preventDefault()
        
        setaddwish(addwish.concat(items))
        console.log(addwish);

       }
   
  return (
<>
{products.map((items)=>(
<Col lg={4} xl={3} md={6} sm={12} className='mb-5'>

    <div className='' style={{ width: '18rem',borderRadius:'15%',backgroundColor:'#68AEB8' }}>
    <Card.Img className='bg-info' variant="top" src={items.image} style={{height:'220px',width:'100%'}} />
    <Card.Body>
      <Card.Title>{items.title.slice(0,20)}...</Card.Title>
      <Card.Text className='d-flex justify-content-center'>
      ${items.price}
      </Card.Text>
      <Card.Text className='d-flex justify-content-center'>
       <p className='me-2'>Ratings: </p> <p>{items.rating.rate}/{items.rating.count}</p>
      </Card.Text>
      <div className='d-flex justify-content-center'>
      <button className='btn btn-outline-dark me-3' onClick={e=>handlecart(e,items)}><i class="fa-solid fa-cart-shopping"></i></button>
      <button className='btn btn-outline-dark' onClick={e=>handlewish(e,items)}><i class="fa-solid fa-heart"></i></button>
      </div>
     
      
    </Card.Body>
  </div>
   
            </Col>))}
   
   </>
  )
}

export default Cards