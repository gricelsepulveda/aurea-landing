import React, {useState} from 'react'
//COMPONENTS
import Slider from '../components/slider/slider'
import Tag from '../components/tag/tag'
//DATA
import { 
  sliderHomeData, 
  tagData, 
} from '../data/data'

const Welcome:React.FunctionComponent = () => {
  const [welcomeActive, setWelcomeActive] = useState('lorem-ipsum-1')
  return (
    <section className='au-section welcome'>
      <Slider 
        mode='phrases'
        data={sliderHomeData}
        active={welcomeActive}
      />
      <Tag
        data={tagData}
      />
    </section>
  )
}
export default Welcome