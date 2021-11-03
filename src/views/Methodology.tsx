import React from 'react'
//TYPES
import { GeneralTypes } from '../types/types'
//DATA
import { 
  methodologyData
} from '../data/data'

const Methodology:React.FunctionComponent = () => {
  return (
    <section className='au-section methodology'>
      <article className='au-article work-gallery-article'>
        <h2 className='au-h2'>
          {methodologyData.title}
        </h2>
        <p className='au-p'>
          {methodologyData.description}
        </p>
      </article>
      <ul className='au-ul cards'>
        {
          methodologyData.cards.map((card:GeneralTypes['methodologyCard'], index:number) => 
            <li 
              className='au-li card-element'
              key={`au-li-card-element-methodology-${index}`}
            >
              <article className='au-article card-article'>
                <i className={`aurea-font ${card.icon}`}/>
                <p className='au-p card-article-description'>
                  {
                    card.title
                  }
                </p>
              </article>
            </li>
          )
        }
      </ul>
    </section>
  )
}
export default Methodology