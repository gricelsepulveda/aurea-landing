//FEATURES
import React, {useState, useEffect} from 'react'
//TYPES
import {GeneralTypes} from '../../types/types'
//STYLES
import './slider.scss'

export type SliderType = {
  data?:GeneralTypes['sliderData'][],
  active?: string,
  mode?: string
}

const Slider:React.FunctionComponent<SliderType> = (props) => {
  //DEST. PROPS
  const { data, active, mode } = props
  const [_data, _setData] = useState<SliderType['data'] | null>(data)
  const [_active, _setActive] = useState<SliderType['active'] | null>(active)
  const [_activeIndex, _setActiveIndex] = useState<number | null>(0)

  //HANDLERS
  const handleActive = () => {
    let updatedData = data
    let activeIndex = _activeIndex
    if (data && updatedData) { 
      updatedData.map((slide, index) => {
        if (updatedData){
          updatedData[index].active = slide.name === _active ? true : false
          if (slide.name === _active){
            activeIndex = index
          }
        }
      })
    }
    _setActiveIndex(activeIndex)
    _setData(updatedData)
  }

  const handleClick = (dir:'back' | 'next') => {
    let updatedData = _data
    const operator = dir == 'back' ? '-' : '+'
    const result = eval(`${_activeIndex}${operator}${1}`)
    let slideActive:GeneralTypes['sliderData'] | undefined
    if (_data && updatedData) {
      updatedData.map((slide, index) => {
        if (updatedData){
          if ( index === result){
            slideActive = slide
            updatedData[index].active = true
          } else {
            updatedData[index].active = false
          }
        }
      })
    }
    _setActiveIndex(result)
    _setData(updatedData)
    if (slideActive != undefined){
      _setActive(slideActive.name)
    } 
  }

  const handleMode = (slide:GeneralTypes['sliderData'], index:number) => {
    const { description, name, img, title } = slide
    let result
    switch (mode) {
      case 'phrases':
        result = (
          <li 
          className='au-li slider-element'
          key={`au-li-slider-${mode}-${index}-${name.substring(0,3)}`}
          >
            <article 
              className={`au-article slider-article ${ name === _active ? 'active' : ''}`}>
              <p className='au-p slider-article-description'>
                { description }
              </p>
            </article>
          </li>
        )
        break
      case 'cards':
        result = (
          <li 
            className='au-li slider-element'
            key={`au-li-slider-${mode}-${index}-${name.substring(0,3)}`}
          >
            <article 
              className={`au-article slider-article ${ name === _active ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${img})`
              }}
            >
              <p className='au-p slider-article-description'>
                { description }
              </p>
            </article>
          </li>
        )
        break
      case 'cards phone':
        result = (
          <li 
            className='au-li slider-element'
            key={`au-li-slider-phone-${mode}-${index}-${name.substring(0,3)}`}
          >
            <article 
              className={`au-article slider-article ${ name === _active ? 'active' : ''}`}
            >
              <h4 className='au-h4 slider-article-title'>
                { title }
              </h4>
              <img src={img} alt='avatar'/>
              <i className='aurea-font like'/>
              <i className='aurea-font link'/>
              <p className='au-p slider-article-description'>
                { description }
              </p>
            </article>
          </li>
        )
    }
    return result
  }

  //EFFECTS
  useEffect(() => {
    handleActive()
  }, [_active, active])

  //RENDER
  return (
    <ul className={`au-ul slider ${mode}`}>
      {
        _data ? _data.map((slide, index) => {
          return (
            handleMode(slide, index)
          )
        })
        : null
      }
      {
        mode === 'cards' || mode === 'cards phone' ?
          <nav className='au-nav slider-controllers'>
            <ul className='au-ul nav-list'>
              <li 
                className='au-li nav-list-element back'
                onClick={() => handleClick('back')}
              >
                <i className='aurea-font caret'/>
              </li>
              <li 
                className='au-li nav-list-element next'
                onClick={() => handleClick('next')}
              >
                <i className='aurea-font caret'/>
              </li>
            </ul>
          </nav>
        : null
      }
    </ul>
  )
}

export default Slider