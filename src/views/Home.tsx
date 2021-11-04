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
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  mainNavData,
  sectionData,
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
      <Welcome
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'welcome')[0].id}
      />

      {/* WORK GALLERY SECTION */}
      <WorkGallery
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'workgallery')[0].id}
      />

      {/* TIME SECTION */}
      <Time
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'time')[0].id}
      />

      {/*OTHER SECTION */}
      <Other
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'other')[0].id}
      />

      {/*NEWSLETTER SECTION */}
      <Newsletter
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'newsletter')[0].id}
      />

      {/* METHODOLOGY SECTION */}
      <Methodology
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'methodology')[0].id}
      />

      {/* CONTACT SECTION */}
      <Contact
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'contact')[0].id}
      />

      {/* FOOTER SECTION */}
      <Footer
        id={sectionData.filter((section:GeneralTypes['section']) => section.name === 'footer')[0].id}
      />
    </>
  )
}
export default Home