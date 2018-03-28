import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Speaker = ({name_r, subject, description, image}) => {
  const speakerImage = image ? require('../img/'+ image) : ''

  return (
    <div>
      <img src={speakerImage} className="speaker_image"/>
      <h2>{name_r}</h2>
    </div>
  )
}

export default Speaker