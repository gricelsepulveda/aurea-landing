//FEATURES
import React from 'react'
//TYPES
import {GeneralTypes} from '../../types/types'
//STYLES
import './tag.scss'

export type TagType = {
  data?:GeneralTypes['tagData'][],
}

const Slider:React.FunctionComponent<TagType> = (props) => {
  //DEST. PROPS
  const { data } = props

  //RENDER
  return (
    <h1 className='au-h1 au-tag-list'>
    {
      data ? data.map((tag, index) => {
        const { link, title } = tag
        return (
          <a 
            href={link}
            className='au-a tag-element'
            key={`au-a-tag-element-${index}-${title.substring(0,2)}`}
          >
            {title}
          </a>
        )
      })
      : null
    }
    </h1>
  )
}

export default Slider

