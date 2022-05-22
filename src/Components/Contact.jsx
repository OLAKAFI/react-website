import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactDetails from './ContactDetails';


function Contact() {
  const contactcat = [
    { contact_id: 1,
      support:'Contact Us',
      support_desc: 'Have questions? The quickest way to get in touch with us is using the contact information below.',
      
    },

    { contact_id: 2,
      support:'University Partnership Inquiries',
      support_desc: 'If you are a university interested in creating certificates or degrees on our platform, please apply here.',
      
    },

    { contact_id: 3,
      support:'ReactLearn Campus Inquiries',
      support_desc: 'If you are a university interested in enhancing your curriculum with world-class content from Us, please contact us here.',
      
    },

    { contact_id: 4,
      support:'ReactLearn Business Inquiries',
      support_desc: 'If you are an enterprise level organization interested in training your teams with world-class content from top institutions, contact us here.',
      
    },

    { contact_id: 5,
      support:'Privacy Inquiries',
      support_desc: 'If you have questions about our Privacy Notice or an enquiry about how we protect your personal information, you can contact us at privacy@reactlearn.org.',
    },


    
    
  ];


  return (
    <>
      <div>
        {
          contactcat.map((contact) => (

            <ContactDetails contact_id={contact.contact_id} support={contact.support} support_desc={contact.support_desc} />
             
          ))
        }



      </div>

      
    </>
  )
}

export default Contact