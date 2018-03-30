import React from 'react'
import ParticipationSectionItem from './ParticipationSectionItem'

const ParticipationSection = ({summary}) => {
  return (
    <section className="participations-section ">
      <div className="participations-section--wrapper col-1">
        <div className="participations-section__row col-1-2 mob-1">
          {summary.slice(0, 2).map(item => 
            <ParticipationSectionItem 
              key={item.id}
              {...item}
            />
          )}
        </div>
        <div className="participations-section__row col-1-2 mob-1">
        {summary.slice(2, 4).map(item => 
          <ParticipationSectionItem 
            key={item.id}
            {...item}
          />
        )}
        </div>
      </div>
    </section>
  )
}

export default ParticipationSection