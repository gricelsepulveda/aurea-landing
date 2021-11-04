import React, {useState} from 'react'
//COMPONENTS
import Slider from '../components/slider/slider'
import Tag from '../components/tag/tag'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  sliderHomeData, 
  tagData, 
} from '../data/data'

const Welcome:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  const [welcomeActive, setWelcomeActive] = useState('lorem-ipsum-3')
  return (
    <section className='au-section welcome' id={props.id}>
      <Slider 
        mode='phrases'
        data={sliderHomeData}
        active={welcomeActive}
        animationSpeed={7000}
      />
      <Tag
        data={tagData}
      />
    </section>
  )
}
export default Welcome