import imgsides from "../../assets/footerimg.jpg"
import "../../components/Footer/Footer.css"
import { GiCoffeeCup } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

import React from 'react'

function Footer() {
  return (
    <div>
      <div className="foot">
        <div className="row">

            <div className="col-lg-6 ">

              <div className="out">
              <h1></h1>
                <h3>Blend Work and Play</h3>
                <h6>Ready to Dive Deeper? Explore What Awaits!</h6>
              </div>

                

                <div className="work">
                <TbTargetArrow className="icon1" />
                  <h4>Co-Working Oasis</h4>
                  <p>Experience a workspace like no other.Can you imagine <br />
                     finding inspiration in every corner?</p>
                </div>


                <div className="cafe">
                <GiCoffeeCup className="icon2" />
                  <h4>Cafe + Board Games Lounge</h4>
                  <p>Savor delightful treats while challenging friends to board <br />
                  games.What flavours and games await your discovery?</p>
                </div>
                
            </div>
            <div className="col-lg-6" imgsides>
                <img src={imgsides} alt="" />
            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
