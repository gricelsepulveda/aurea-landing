import React from 'react'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  contactData
} from '../data/data'

const Contact:React.FunctionComponent = () => {

  const renderForm = (data:GeneralTypes['contact']['form']) => {
    const renderInput = (control:GeneralTypes['control'], index:number) => (
      <div 
        className='au-input-component secondary-2'
        key={`au-input-component-${index}-${control.name}`}
      >
        <input 
          type='text'
          name={control.name}
          className='au-input'
          placeholder={control.placeholder}
        />
      </div>
    )

    const renderTextarea = (control:GeneralTypes['control'], index:number) => (
      <div 
        className='au-textarea-component secondary-2'
        key={`au-input-component-${index}-${control.name}`}
      >
        <textarea 
          name={control.name}
          className='au-textarea'
          placeholder={control.placeholder}
        />
      </div>
    )
    return data.map((control, index) =>
      control.type === 'text' ? renderInput(control, index) : renderTextarea(control, index)
    )
  }

  return (
    <section className='au-section contact'>
      <div className='au-group heading'>
        <h2 className='au-h2'>
          { contactData.title }
        </h2>
        <p className='au-p'>
          { contactData.description }
        </p>
      </div>
      <form className='au-form'>
        {
          renderForm(contactData.form)
        }
        <button type='button' className='au-button disabled primary-1' disabled>
          { contactData.button }
        </button>
      </form>
    </section>
  )
}
export default Contact