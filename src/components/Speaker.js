import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Speaker = ({name, subject, description, image}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{subject}</h2>
      <p>{description}</p>
      <img src={"../img/"+ image} className="speaker_image"/>
    </div>
  )
}

export default Speaker