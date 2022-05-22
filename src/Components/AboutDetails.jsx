import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function AboutDetails({aboutdesc, about_id, titles, aboutimage}) {



    


  return (
    <>
        <div className='border border-1'>
            <Container>
                <Row key={about_id}>
                    <Col>
                        <div className='container-fluid py-4'>
                            <img src={aboutimage} alt="" className='img-fluid' />

                        </div>
                        
                    </Col>
                    <Col className='my-auto'>
                    <h3 className='display-5'>{titles}</h3>
                    <p className='fs-5'>
                        {aboutdesc}
                    </p>
                    </Col>
                </Row>

            </Container>
        </div>

    
    
    
    
    
    </>
  )
}

export default AboutDetails