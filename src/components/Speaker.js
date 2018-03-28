import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Speaker = ({name, subject, description, image}) => {
  const speakerImage = image ? require('../img/'+ image) : ''

  return (
    <div>
      <h1>{name}</h1>
      <h2>{subject}</h2>
      <p>{description}</p>
      <img src={speakerImage} className="speaker_image"/>
    </div>
  )
}

export default Speaker