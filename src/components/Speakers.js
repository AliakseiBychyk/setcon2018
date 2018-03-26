import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Speaker from './Speaker'
import { agenda } from '../../assets/agenda.json'

class Speakers extends Component {
  state = {
    agenda
  }
  render() {
    return(
      <div>
        <h1>SPEAKERS</h1>
        {this.state.agenda.map(item => 
          <Speaker
            key={item.id}
            {...item}
          ></Speaker>
        )}
      </div>
    )
  }
}

export default Speakers