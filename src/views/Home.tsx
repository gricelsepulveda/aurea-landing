import React, { useState } from 'react'
//COMPONENTS
import Nav from '../components/nav/nav'
//VIEWS
import Footer from './Footer'
import Welcome from './Welcome'
import Methodology from './Methodology'
import Newsletter from './Newsletter'
import WorkGallery from './WorkGallery'
import Time from './Time'
import Other from './Other'
import Contact from './Contact'
//DATA
import { 
  mainNavData
} from '../data/data'

const Home:React.FunctionComponent = () => {
  const [defaultActiveLink, setDefaultActiveLink] = useState('Nómades digitales')
  return (
    <>
      {/* NAV COMPONENT */}
      <Nav
        data={mainNavData}
        active={defaultActiveLink}
        mode='main'
      />

      {/* WELCOME SECTION */}
      <Welcome/>

      {/* WORK GALLERY SECTION */}
      <WorkGallery/>

      {/* TIME SECTION */}
      <Time/>

      {/*OTHER SECTION */}
      <Other/>

      {/*NEWSLETTER SECTION */}
      <Newsletter/>

      {/* METHODOLOGY SECTION */}
      <Methodology/>

      {/* CONTACT SECTION */}
      <Contact/>

      {/* FOOTER SECTION */}
      <Footer/>
    </>
  )
}
export default Home