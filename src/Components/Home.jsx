import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button} from 'react-bootstrap';

import CourseDetails from './CourseDetails';
import homepage from '../images/cousera-homepage-1.png';
import digmarket from '../images/dig-marketing.png';
import socialmedia from '../images/social-media.png';
import techsupport from '../images/tech-support.png';
import frontend from '../images/frontend-dev.png';
import mobildev from '../images/mobile-dev.png';
import datanalytics from '../images/data-analytics.png';
import productdesign from '../images/product-design.png';
import projectmanage from '../images/project-manage.png';
import salesdev from '../images/sales-dev.png';



function Home() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }
  
  const coursedatas = [
    { id: 1,
      coursename:'Digital Marketing',
      courseimage: digmarket,
      vendor: 'Google',
      desc: '',
    },


    { 
      id: 2, 
      coursename:'Social Media Marketing', 
      courseimage: socialmedia, 
      vendor: 'Meta', 
      desc: ''
    },


    { 
      id: 3, 
      coursename:'Technical Support', 
      courseimage: techsupport, 
      vendor: 'IBM', 
      desc: ''
    },


    { 
      id: 4, 
      coursename:'Front End Development', 
      courseimage: frontend, 
      vendor: 'KodeCamp', 
      desc: ''
    },

    { 
      id: 5, 
      coursename:'Data Analytics', 
      courseimage: datanalytics, 
      vendor: 'Google', 
      desc: ''
    },


    { 
      id: 6, 
      coursename:'Sale Dev Representative', 
      courseimage: salesdev, 
      vendor: 'SaleForce', 
      desc: ''
    },

    { 
      id: 7, 
      coursename:'Project Management', 
      courseimage: projectmanage, 
      vendor: 'Google', 
      desc: ''
    
    },

    { 
      id: 8, 
      coursename:'Mobile Development', 
      courseimage: mobildev, 
      vendor: 'KodeCamp',
      desc: ''
    
    },

    { 
      id: 9, 
      coursename:'Product Design', 
      courseimage:productdesign , 
      vendor: 'KodeCamp', 
      desc: ''
    
    },
    
  ];
  
  return (
    <>
      <div className='home-body-1 mt-4'>
        <Container className='mt-4'>
          <Row className='py-auto'>
            <Col sm={12} lg={6} className=' my-auto' >
              <div>
                <h1 className='display-4 fw-bold'>Learn Without Limit</h1>
              </div>
              <div className='mt-3 '>
                <h5 className="fw-light pe-3">Get that "ready for anything" feeling with more than 5,000 courses, 
                  Professional Certificates, and degrees from world-class universities
                  and companies.
                </h5>
              </div>
              <Row className='mt-4 '>
                <Col className=''>
                  <Button variant="primary" size='lg'>
                    Join for Free
                  </Button>
                </Col>
                <Col className='ms-auto' >
                  <Button variant="outline-primary "  size='lg' >
                    Explore Here
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} lg={6} className=''>
              <div className='mt-5'>
                <img src={homepage} alt="" className='img-fluid '/>
              </div>
            </Col>
          </Row>
        </Container>

      </div>

      <div className='container-fluid bg-light mt-5 mb-4'>
        <Row xs={1} md={2} lg={3} className="g-4">

          {
            coursedatas.map((data) => (

              <Col className=' '>
                <CourseDetails coursename={data.coursename} id={data.id} vendor={data.vendor} courseimage={data.courseimage}/>
              
              </Col>

            ))

          }
        </Row>
          
          

        {/* <Row xs={1} md={2} lg={3} className="g-4">
            {
              user.map(induser => (
                (
                  <Col>
                    <CardDesign user={induser} key={induser.id}/>
                  
                  </Col>
                  
                )
              ))
            }
          </Row> */}

      </div>
      
        
    </>
  );
}

export default Home