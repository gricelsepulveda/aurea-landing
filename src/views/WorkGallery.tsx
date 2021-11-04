import React, {useState} from 'react'
//COMPONENTS
import Slider from '../components/slider/slider'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  workGalleryData,
  sliderCardsData
} from '../data/data'

const WorkGallery:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  const [workGalleryActive, setWorkGalleryActive] = useState('almacen-fibra-1')
  return (
    <section className='au-section work-gallery' id={props.id}>
      <Slider
        mode='cards'
        data={sliderCardsData}
        active={workGalleryActive}
      />
      <article className='au-article work-gallery-article'>
        <h2 className='au-h2'>
          { workGalleryData.title}
        </h2>
        <h3 className='au-h3'>
          { workGalleryData.subtitle}
        </h3>
        <p className='au-p'>
          { workGalleryData.description}
        </p>
      </article>
    </section>
  )
}
export default WorkGallery