//FEATURES
import React, {useState, useEffect} from 'react'
//UTILS
import {classNames} from '../../utils/classNames.js'
//TYPES
import {GeneralTypes} from '../../types/types'
import {setDimensons} from '../../utils/setDimensions.js'

export type TextareaType = {
  disabled: boolean,
  validation: boolean,
  value: string,
  placeholder: string,
  altClass: string | undefined,
  color: GeneralTypes['color'],
  theme: GeneralTypes['theme'],
  width: GeneralTypes['dimensions'],
  height: GeneralTypes['dimensions'],
  opacity: number,
  onChange: Function,
  tabIndex: number,
}

const Textarea:React.FunctionComponent<TextareaType> = (props) => {
  //DEST. PROPS
  const { disabled, validation, value, placeholder, onChange, tabIndex, width, height, opacity } = props
  //STATES
  const [_validation, _setValidation] = useState<TextareaType['validation']>(validation)
  const [_value, _setValue] = useState<TextareaType['value']>(value)

  //HANDLERS
  const handlerChange = (event:any) => {
    onChange(event.current.value)
  }

  //EFFECTS
  useEffect(() => {
    _setValue(value)
  }, [value])

  //RENDER
  return (
    <div
      className={
        `au-textarea-component ${
          classNames(props, ['validation', 'value', 'placeholder', ])
        }`
      }
      tabIndex={tabIndex}
      style={{ ...setDimensons(width, height), opacity: opacity}}
    >
      <textarea
        className='au-textarea'
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handlerChange}
      />
    </div>
  )
}

export default Textarea