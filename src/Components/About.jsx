import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AboutDetails from './AboutDetails';
import aboutus from '../images/about-us.png';
import instructors from '../images/instructors.png';
import market from '../images/market.png';
import transform from '../images/transform.png';


function About() {
  const aboutdatas = [
    { about_id: 1,
      titles:'Our Story',
      aboutimage: aboutus,
      aboutdesc: 'We were founded in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, We are a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies.'
    },
    
    { about_id: 2,
      titles:'Our Instructors',
      aboutimage: instructors,
      aboutdesc: 'Our intsructors are real people who are passionate about sharing what they know with students all over the world'
    },

    { about_id: 3,
      titles:'Transforming Lifes',
      aboutimage: transform,
      aboutdesc: 'Talented people are everywhere, but opportunities can be harder to find. With our experienced tutors, we can make life easy for everyone '
    },

    { about_id: 4,
      titles:'Our MarketPlace',
      aboutimage: market,
      aboutdesc: 'Whatever your learning style, we have courses that fits. Coming from instructors all over the world, our courses span over 60 languages.'
    },


    
  ];




  return (
    <>
      <div className='text-center mt-5'>
        <h1 className='display-4 fw-bold'>Changing learning for the better</h1>
        <Container>
          <p className=' fs-3 px-5'>
            Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination 
            for online learning, we connect people through knowledge.
          </p>
        </Container>
      </div>
      <div className='bg-light '>
        {
            aboutdatas.map((aboutdata) => (
              <AboutDetails about_id={aboutdata.about_id} titles={aboutdata.titles} aboutdesc={aboutdata.aboutdesc} aboutimage={aboutdata.aboutimage} />
            ))

        }
        
      </div>
    
    
    </>
  )
}

export default About