import React, {useState} from 'react'
//COMPONENTS
import Slider from '../components/slider/slider'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  otherData
} from '../data/data'

const Other:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  const [otherActive, setOtherActive] = useState('lorem-1')
  return (
    <section className='au-section other' id={props.id}>
      <Slider
        data={otherData.phoneSlider}
        mode='cards phone'
        active={otherActive}
        avatar={otherData.avatar}
      />
      <article className='au-article other-article'>
        <h2 className='au-h2'>
          { otherData.title }
        </h2>
        <p className='au-p other-article-description'>
          { otherData.description }
        </p>
        <i className='aurea-font arrow'/>
        <a className='au-a'>
          { otherData.link }
        </a>
      </article>
    </section>
  )
}
export default Other