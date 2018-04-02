import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Speaker = ({name_r, subject, description, image, company, title}) => {
  const speakerImage = image ? require('../img/'+ image) : ''

  return (
    <div className="speaker_item">
      <img src={speakerImage} className="speaker_image"/>
      <div className="speaker_name">{name_r}</div>
      <div className="speaker_title">{/*`${title} at ${company}`*/}</div>
    </div>
  )
}

export default Speaker