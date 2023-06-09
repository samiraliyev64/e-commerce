import React from 'react'
import CarouselImage from '../elements/CarouselImage'
import CountdownClock from '../elements/Countdownclock'
import Submenucatalog from '../elements/Submenucatalog'
import "../../assets/scss/Home.scss"
import ConsultationRequest from "../elements/ConsultationRequest"
import Discount from "../elements/Discount"
const Home=()=> {
  return (
    <div className='container pb-5 bt-5 mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-3'> 
<Submenucatalog />
        </div>
        <div className='col-md-6'>
          <CarouselImage />
          <Discount/>
        </div>

      
      <div className='col-md-3 col-12 countdown-container'>
        <CountdownClock />
      </div>
      </div>
      <ConsultationRequest />
    </div>
  
)
};

export default Home
