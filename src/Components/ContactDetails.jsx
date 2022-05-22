import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


function ContactDetails({contact_id, support, support_desc}) {
  return (
    <>
        <Container className=' mt-5 mb-4 border border-1 bg-light shadow-sm'>
            <Row className='py-auto my-5 mx-2' key={contact_id}>
                <Col className='h-100 my-auto' >
                  <div className='  my-auto'>
                    <h1 className='display-4 fw-bold'>{support}</h1>
                  </div>
                </Col>
                <Col className='h-100 my-auto text-primary' >
                  <div className=' my-auto '>
                    <h1 className='fs-4 fw-light '>
                    {support_desc}
                    </h1>
                  </div>
                </Col>
            </Row>
        </Container> 

    
    
    
    </>
  )
}

export default ContactDetails