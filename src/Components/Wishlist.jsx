import React, { useContext } from 'react'
import { addcontext } from './Contextshare'
import Navbarr from './Navbarr'
import { Button, Card, Col, Row } from 'react-bootstrap'

function Wishlist() {
    const {addtocart,setaddtocart}=useContext(addcontext)
    const {addwish,setaddwish}=useContext(addcontext)
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
     <Navbarr/>
    
    {addwish.length>0?<div className='mt-5 ms-5'>
        
    <Row>
        {
            addwish?addwish?.map((products)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        
        <Card style={{ width: '18rem' }} className='mb-4 shadow rounded'>
             <Card.Img variant="top" src={products.image} style={{height:'200px',width:'100%'}} />
             <Card.Body>
               <Card.Title>{products.title.slice(0,16)}</Card.Title>
               <Card.Text>
                 $ {products.price}
               </Card.Text>
              <div className='d-flex justify-content-center'>
                 <Button variant="outline-dark me-3" onClick={e=>handlecart(e,products)}><i className="fa-solid fa-cart-shopping"></i> </Button>
                 {/* <Button variant="outline-primary me-3" onClick={e=>handleCart(e,products)}><i className="fa-solid fa-cart-shopping"></i> </Button> */}
              </div>

             </Card.Body>
           </Card>
                   </Col>
            )):"Your Wishlist Is Empty"
        }
        
        </Row>
    
</div>: <h2 className='text-danger text-center mt-5'>Wishlist Empty</h2>}
</>
  
  )
}

export default Wishlist