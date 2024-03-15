import React from "react";
import '../ContactUs/ContactUs.css'

function ContactUs() {
  return (
    <div>
        <div className="row">
            <div className="first">
                <div className="col-lg-12 col-md-12 col-sm-6" >
                <h5>Reserve Your Spot</h5>
                </div>
            </div>
        </div>


        <div className="name">
          <div className="row">


            <div className="col-lg-6 col-sm-6">
                <label htmlFor="">FULL NAME</label>
                <input type="text" placeholder="Full name"/>
            </div>

            <div className="col-lg-6 col-sm-6">
                <label htmlFor="">EMAIL ADDRESS</label>
                <input type="text" placeholder="email id"/>
            </div>

          </div>
        </div>




        <div className="num">
            <div className="row">

                <div className="col-lg-6">
                <label htmlFor="">PHONE NUMBER</label>
                <input type="tel" placeholder="Enter your Mobile num"/>
                </div>

                <div className="col-lg-6">
                    <label htmlFor="">TSELECT ACTIVITY</label>
                    <select name="" id="">
                        <option value="">Select Activity </option>
                    </select>

                </div>
                
            </div>
        </div>





        <div className="date">
            <div className="row">
                <div className="col-lg-4">
                    <label htmlFor="">DATE</label>
                    <input type="date" />
                </div>

                <div className="col-lg-4">
                    <label htmlFor="">PREFERRED TIME SLOT</label>
                    <input type="time" />
                </div>

                <div className="col-lg-4">
                    <label htmlFor="">NUMBER OF PARTICIPANTS</label>
                    <input type="text" placeholder="Enter Participants" />
                </div>
            </div>
        </div>



        <div className="request">

            <div className="row">
                <div className="col-lg-12">
                    <label htmlFor="">SPECIAL REQUESTS</label>
                    <textarea name="Enter Text" id=""  rows="5" placeholder="Enter Text"></textarea>
                </div>
            </div>

            <button>Submit</button>
        </div>


    </div>
  );
}

export default ContactUs;
