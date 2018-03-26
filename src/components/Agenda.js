import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Heading from './Heading'
import { agenda } from '../../assets/agenda.json'

class Agenda extends Component {
  state = {
    agenda
  }
  render() {
    return(
      <div>
        <h1>AGENDA</h1>
        {this.state.agenda.map(item => 
          <Heading
            key={item.id}
            {...item}
          ></Heading>
        )}
      </div>
    )
  }
}

export default Agenda