//FEATURES
import React, {useState, useEffect} from 'react'
//TYPES
import {GeneralTypes} from '../../types/types'
//STYLES
import './nav.scss'

export type NavType = {
  data?: GeneralTypes['link'][],
  active?: GeneralTypes['link']['label'],
  onClick?: (label: GeneralTypes['link']) => void,
  altClass?: string | undefined,
  color?: GeneralTypes['color'],
  theme?: GeneralTypes['theme'],
  width?: GeneralTypes['dimensions'],
  height?: GeneralTypes['dimensions'],
  opacity?: number,
  tabIndex?: number,
  mode?:string,
}

const Nav:React.FunctionComponent<NavType> = (props) => {
  //DEST. PROPS
  const { active, onClick, data, mode } = props
  //STATES
  const [_active, _setActive] = useState<NavType['active']>(active)
  const [_data, _setData] = useState<NavType['data']>(data)
  const [_open, _setOpen] = useState<boolean>(false)

  //HANDLERS
  const handleClick = (link:GeneralTypes['link']) => {
    _setActive(link.label)
    if (onClick && link.link !== '') {
      onClick(link)
    }
  }

  const handleActive = () => {
    let updatedData = data
    if (data && updatedData) { 
      updatedData.map((li, index) => {
        updatedData ? updatedData[index].active = li.label === _active ? true : false : null
      })
    }
    _setData(updatedData)
  }

  //EFFECTS
  useEffect(() => {
    handleActive()
  }, [_active, active])

  //RENDER
  return (
    mode == 'main' ?
    <nav className='au-nav main-nav'>
      <i 
        className='au-nav-btn'
        onClick={() => _setOpen(!_open)}
      />
      <ul className={`au-ul nav-list ${_open ? 'open' : ''}`}>
        {
          _data ? _data.map((element:GeneralTypes['link'], index) => {
            const { label, link, img } = element
            return (
              <li 
                className={`au-li nav-list-element ${img.src != '' ? 'img' : ''} ${_active === label ? 'active' : ''}`}
                onClick={() => handleClick(element)}
                key={`au-li-nav-${index}-${label.substring(0,3)}`}
              >
                <a 
                  className='au-a nav-list-link'
                  href={link != '' ? link : `#${label}`}
                >
                  { 
                    img.src === '' ? 
                      label :
                      <img src={img.src} alt={img.alt}/>
                  }
                </a>
              </li>
            )
          })
          : null
        }
      </ul>
    </nav>
    :
    <nav className='au-nav footer-nav'>
      <ul className='au-ul nav-list'>
        {
          _data ? _data.map((element:GeneralTypes['link'], index) => {
            const { label, link } = element
            return (
              <li 
                className='au-li nav-list-element'
                key={`au-li-nav-${index}-${label.substring(0,3)}`}
              >
                <a 
                  className='au-a nav-list-link'
                  href={link != '' ? link : `#${label}`}
                >
                  { label }
                </a>
              </li>
            )
          })
          : null
        }
      </ul>
    </nav>
  )
}

export default Nav