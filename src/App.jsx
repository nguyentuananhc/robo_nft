import React from 'react'
import CloudStudio from '@sections/CloudStudio'
import Welcome from '@sections/Welcome'
import Boxes from './sections/Boxes'
import TextLoop from './components/TextLoop'
import Collection from './sections/Collection'
import Roadmap from './sections/Roadmap'
import Faq from './sections/Faq'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="app">
      <Welcome />
      <CloudStudio />

      <div id="boxes-scroll">
        <div id="boxes-pin">
          <Boxes />
          <TextLoop />
          <Collection />
        </div>
      </div>

      <div id="roadmap-scroll">
        <div id="roadmap-pin">
          <Roadmap />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
