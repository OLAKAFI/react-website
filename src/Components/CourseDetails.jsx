import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
// import homepage from '../images/cousera-homepage-1.png';

function CourseDetails({coursename, id, vendor, courseimage}) {
  return (
    <>
    <div>
        <Card  className="mx-auto border-primary shadow-sm" key={id}>
            <div className='container-fluid ' >
                <Card.Img className='img-fluid' variant="top" style={{ height: '18rem' }} src={courseimage} />

            </div>
            
            <Card.Body>
                <Card.Title>{coursename}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-inline-block'>
                <p className="fw-bold text-primary">{vendor}</p>
                
            </Card.Footer>
        </Card>
    </div>


    
    
    
    </>
  )
}

export default CourseDetails