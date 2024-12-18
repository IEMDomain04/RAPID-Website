import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Introtext from './Introtext'
import LearnProg from './LearnProg'
import RapidFeat from './RapidFeat'
import Contacts from './Contacts'


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introtext />
      <LearnProg />
      <RapidFeat />
      <Contacts />
    </div>
  )
}

export default Home
