//FEATURES
import React, {useState} from 'react'
//UTILS
import {classNames} from '../../utils/classNames.js'
//TYPES
import {GeneralTypes} from '../../types/types'
import {setDimensons} from '../../utils/setDimensions.js'

export type ButtonType = {
  kind: 'icon' | 'full' | 'min',
  disabled: boolean,
  validation: boolean,
  value: string,
  altClass: string | undefined,
  color: GeneralTypes['color'],
  theme: GeneralTypes['theme'],
  width: GeneralTypes['dimensions'],
  height: GeneralTypes['dimensions'],
  opacity: number,
  onClick: (val: string) => void,
  tabIndex: number,
}

const Button:React.FunctionComponent<ButtonType> = (props) => {
  //DEST. PROPS
  const { disabled, validation, value, onClick, tabIndex, width, height, opacity } = props
  //STATES
  const [_validation, _setValidation] = useState<ButtonType['validation']>(validation)

  //HANDLERS
  const handlerClick = (event:any) => {
    !disabled ? onClick(event.current.value) : null
  }

  //RENDER
  return (
    <div
      className={
        `au-button-component ${
          classNames(props, ['validation', 'value', ])
        }`
      }
      tabIndex={tabIndex}
      style={{ ...setDimensons(width, height), opacity: opacity}}
    >
      <button
        className='au-button'
        type='button'
        disabled={disabled}
        value={value}
        onClick={handlerClick}
      />
    </div>
  )
}

export default Button