import  Button  from 'react-bootstrap'
import "./body.css"
import React from 'react'
import Marquee from 'react-fast-marquee'
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import img1 from "../../assets/corrosalimg.jpg"

export default function body() {
  return (
    <div className='tintin'>
      <Marquee direction='left' speed={100}><h2>ENT INN ADVENTURE! WELCOME TO TINTIN - WHERE</h2></Marquee>
      <h4>Discover the Ultimate Family Fun Experience!</h4>
      <p><ImQuotesLeft className='quote1' /> At TINTIN, we redefine entertainment,bringing joy to every member of the family.
         We believe in the magic of play and learning combined. <br/> Our mission is to reduce
         screen time for kids while fostering creativity and curiosity. Immerse yourself in a
         world of excitement with our diverse <br/>  range of attractions that cater to all ages.<ImQuotesRight className='quote2'/> 
      </p>
      <img src={img1} alt="" />
      <br />
      <br />
      <br />
      <div className="circle1">
    <h5>Soft Play Wonderland + STEM Lab</h5>
    <p className="circle1p"> A realm of vibrant colors and laughter awaits the <br />
    little ones. What wonders lie within?</p>
  </div>

  <div className="circle2">
    <h5>VR Gaming Galaxy</h5>
    <p className="circle2p"> Step into the future with cutting-edge VR <br />
    experiences.Can you imagine the adventures that <br />
    await in virtual realms?</p>
  </div>


  <div className="circle3">
    <h5>Nerf War Arena</h5>
    <p className="circle3p">Engage in epic battles,where strategy and skill <br />
      come to life.Will you emerge victorious? </p>
  </div>
  </div>

    
  )
}
