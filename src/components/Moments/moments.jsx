import "../Moments/moments.css";
import React from 'react'
import img1 from "../../assets/partyhall.jpg"
import img2 from "../../assets/karaok.jpg"



export default function moments() {
  return (
    <div>
    <div className="moments">
        <h2>Create Unforgettable Moments</h2>
      <div className="row">
        <div className="col-lg-6 sm-12 md-6 first">
            <img src={img1} alt="" />
            <p>Party Hall Extravaganza</p>
            <h5>From birthdays to special events,our multi-purpose hall sets <br />
                the stage for memorable celebrations.What kind of celebration <br />
                sparks your imagination?</h5>
                <h2></h2>
        </div>
        <div className="col-lg-6 sm-12 md-6 second">
            <img src={img2} alt="" />
            <p>Karaoke Kingdom</p>
            <h2></h2>
            <h5>Unleash your inner rock star in a space buzzing with energy.Can <br />
            you hit the high notes and steel the spotlight?</h5>
        </div>
      </div>
    </div>
    </div>
  )
}
