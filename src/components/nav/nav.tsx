//FEATURES
import React, {useState, useEffect} from 'react'
//UTILS
import {classNames} from '../../utils/classNames.js'
//TYPES
import {GeneralTypes} from '../../types/types'

export type NavType = {
  data: GeneralTypes['link'][],
  active: GeneralTypes['link']['label'],
  onClick: (label: GeneralTypes['link']) => void,
  altClass: string | undefined,
  color: GeneralTypes['color'],
  theme: GeneralTypes['theme'],
  width: GeneralTypes['dimensions'],
  height: GeneralTypes['dimensions'],
  opacity: number,
  tabIndex: number,
}

const Nav:React.FunctionComponent<NavType> = (props) => {
  //DEST. PROPS
  const { active, onClick, data } = props
  //STATES
  const [_active, _setActive] = useState<NavType['active']>(active)

  //HANDLERS
  const handlerClick = (link:GeneralTypes['link']) => {
    _setActive(link.label)
    onClick(link)
  }

  //EFFECTS
  useEffect(() => {
  }, [_active])

  //RENDER
  return (
    <nav className='au-nav main-nav'>
      <ul className='au-ul nav-list'>
        {
          data.map((element:GeneralTypes['link']) => {
            <li 
              className={`au-li nav-list-element ${classNames(props, [])}`}
              onClick={() => handlerClick(element)}
            >
              <a 
                className='au-a nav-list-link'
                href={element.link != '' ? element.link : `#${element.label}`}
              >
                { 
                  element.img.src != '' ? 
                    element.label :
                    <img src={element.img.src} alt={element.img.alt}/>
                }
              </a>
          </li>
          })
        }
      </ul>
  </nav>
  )
}

export default Nav