import React from 'react'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  newsletterData
} from '../data/data'

const Newsletter:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  return (
    <section className='au-section newsletter' id={props.id}>
      <h2 className='au-h2 newsletter'>
        { newsletterData.title }
      </h2>
    <div className='au-fragment'>
      <p className='au-p newsletter-description'>
        { newsletterData.description }
      </p>
      <div className='au-form'>
        <div className='au-input-component'>
          <input type='text' className='au-input' placeholder={newsletterData.placeholder}/>
        </div>
        <button type='button' className='au-button primary-4'>
          {newsletterData.buttonText}
        </button>
      </div>
    </div>
  </section>
  )
}
export default Newsletter