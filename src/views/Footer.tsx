import React from 'react'
//COMPONENTS
import Nav from '../components/nav/nav'
import SocialLinks from '../components/socialLinks/socialLinks'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  footerData,
  footerNavData,
} from '../data/data'

const Footer:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  return (
    <footer className='au-section footer' id={props.id}>
      <div className='au-fragment filosophy'>
        <h3 className='au-h3'>
          {footerData.title}
        </h3>
        <p className='au-p'>
          {footerData.description }
        </p>
      </div>
      <div className='au-fragment links'>
        <h3 className='au-h3'>
          {footerData.subtitle}
        </h3>
        <Nav
          data={footerNavData}
          mode='footer'
        />
      </div>
      <div className='au-fragment social'>
        <a className='au-a logo'>
          <img 
            src={footerData.logo.src}
            alt={footerData.logo.alt}
          />
        </a>
        <SocialLinks
          data={footerData.socialLinks}
        />
      </div>
    </footer>
  )
}
export default Footer