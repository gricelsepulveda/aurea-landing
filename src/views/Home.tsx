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

  const handleId = (keyword:string) => {
    return sectionData.filter((
      section:GeneralTypes['section']) => section.name === keyword)[0].id
  }

  return (
    <>
      <Nav
        data={mainNavData}
        active={defaultActiveLink}
        mode='main'
      />
      <Welcome id={handleId('welcome')}/>
      <WorkGallery id={handleId('workgallery')}/>
      <Time id={handleId('time')}/>
      <Other id={handleId('other')}/>
      <Newsletter id={handleId('newsletter')}/>
      <Methodology id={handleId('methodology')}/>
      <Contact id={handleId('contact')}/>
      <Footer id={handleId('footer')}/>
    </>
  )
}
export default Home