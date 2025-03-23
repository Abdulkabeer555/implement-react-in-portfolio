import React from 'react';
import '../assets/css/style.css'
// import Header from './Header/header.jsx'; 
import Banner from './About-Components/banner.jsx';
import ContactForm from './Contact-Component/contactform.jsx';
import Footer from './Footer/footer.jsx';

const Contact = () => {
    console.log('events page')
    return (
      <div>
        {/* <Header   currentPage="contact"/> */}
        <Banner 
           title="CONTACT US"
           description="'At Jinnah Public School, we're here to connect with you. Whether you have questions or want to learn more about our programs, reach out today and let's make learning inspiring for all our students.'"/>
        <ContactForm />
        <Footer />
      </div>
    );
  };
  
  export default Contact;