import React from 'react';
import './WAbout.css';
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";

function WAbout() {
  return (
    <div>
      <div className="wup">


      <div className="row">
        <div className="col-lg-12 sm-6 md-12 family">
            <h3>Join the TINTIN Family</h3>
            <p><ImQuotesLeft className='quote1' />Explore exciting opportunities to become a part of the TINTIN success story .Whether you're interested in franchising or establishing
            <br /> parternships, we welcome you to join our dynamic family of entertainment.<ImQuotesRight className='quote2' />
           </p>
        </div>
      </div>
          <br />

      <div className="row">
      <div className="col-lg-12 sm-6 md-12 partner">
            <h3>Why Partner with TINTIN?</h3>
            <p><ImQuotesLeft className='quote3' /><strong>Proven Success:</strong> Benefit from our established brand and successfull business model. <br />
                <strong>Diverse Offerings:</strong> Tap into a wide range of entertainment activities and offering. <br />
                <strong>Supportive Team:</strong>  Receive ongoing support and guidance from our experiences team. <br />
                <strong>Innovation:</strong>  Stay at the forefront of the entertainment industry with our innovative concepts. <br />
                <strong>Franchise Opportunities:</strong>  Become a franchises and bring the joy of TINTIN to new locations. <br />
                Leverage our brand recognition and proven operational excellence.<ImQuotesRight className='quote4' /></p>
                <br />
                <span><strong>Parternship Venture: </strong>   Explore various partnership oppourtunities,including collaborations,sponserships,and mutually beneficial ventures. </span>
      </div>
      </div>

      <br /><br />
      <div className="row">
        <div className="col-lg-12 sm-6 md-12 partnership">
            <h3>Why Choose a Parternship with Us?</h3>
            <p><ImQuotesLeft className='quote5'/><strong>Flexible Models:</strong>  Tailor partnerships to suit your goals and vision. <br />
            <strong>Brand Visibility:</strong>    Leverage our brand recognition for mutual success. <br />
            <strong>Innovation Collaboration:</strong>    Co-create innovative experiences for our auidences. <br />
            Join us and Let's Build Success Together! <ImQuotesRight className='quote6' /></p>
            </div>
      </div>
    </div>
      <br /> <br />
      <div className="wdown">
        <br />
        <h3>Inquire Now</h3>

        <label htmlFor="name">Full Name</label>
        <input type="text" />

        <label htmlFor="email">Email Address</label>
        <input type="email" />

        <label htmlFor="number">Phone Number</label>
        <input type="tel" />

        <label htmlFor="enquiry">Type of Enquiry</label>
        <select name="" id="">
          
        </select>
        
        
        <label htmlFor="details">Details</label>
        <textarea name="" id="" cols="30" rows="5"></textarea>

        <button>Submit</button>
      </div>
    <br /><br />
    </div>
  )
}

export default WAbout
