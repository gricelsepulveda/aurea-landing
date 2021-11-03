//FEATURES
import React from 'react'
//TYPES
import {GeneralTypes} from '../../types/types'
//STYLES
import './social-links.scss'

export type SocialLinksType = {
  data?: GeneralTypes['footerData']['socialLinks']
}

const SocialLinks:React.FunctionComponent<SocialLinksType> = (props) => {
  //DEST. PROPS
  const { data} = props

  //RENDER
  return (
    <ul className='au-ul social-links'>
      {
        data ? data.map((element:any, index:number) => {
          const { name, link, icon } = element
          return (
            <li 
              className='au-li social-links-element'
              key={`au-li-nav-${index}-${name.substring(0,3)}`}
            >
              <a
                className='au-a social-link'
                href={link ? link : '#'}
              >
                <i className={`aurea-font ${icon}`}/>
              </a>
            </li>
          )
        })
        : null
      }
    </ul>
  )
}

export default SocialLinks