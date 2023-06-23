import React from 'react'
import CloudStudio from '../../sections/CloudStudio'
import Welcome from '../../sections/Welcome'
import Boxes from '../../sections/Boxes'
import TextLoop from '../../components/TextLoop'
import Collection from '../../sections/Collection'
import Roadmap from '../../sections/Roadmap'
import Faq from '../../sections/Faq'
import OurRevolutionary from '../../components/OurRevolutionary'
import OurVision from '../../components/OurVision'
import SliderSection from '../../components/Slider'
import RoboList from '../../components/RoboList'
import Token from '../../components/Token'
import RoadMap from '../../components/RoadMap'

import Footer from '../../sections/Footer'

const LandingPage = () => {
  return (
    <>
      <Welcome />
      <OurVision />
      <OurRevolutionary />
      <SliderSection />
      <RoboList />
      <Token />
      <RoadMap />
      {/* <CloudStudio /> */}

      {/* <div id="boxes-scroll">
        <div id="boxes-pin">
          <Boxes />
          <TextLoop />
          <Collection />
        </div>
      </div> */}

      <div id="roadmap-scroll">
        <div id="roadmap-pin">
          {/* <Roadmap /> */}
          {/* <Faq /> */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LandingPage
