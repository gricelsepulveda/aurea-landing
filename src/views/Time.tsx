import React from 'react'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  timeData
} from '../data/data'

const Time:React.FunctionComponent<GeneralTypes['section']> = (props) => {
  return (
    <section className='au-section time' id={props.id}>
      <h3 className='au-h3'>
        { timeData.title }
      </h3>
      <div className='au-bar'>
        <button type='button' className='bar-button'/>
      </div>
      <p className='au-p'>
      { timeData.description }
      </p>
    </section>
  )
}
export default Time
