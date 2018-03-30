import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Speaker from './Speaker'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { agenda } from '../../assets/agenda.json'

class Speakers extends Component {
  state = {
    agenda
  }
  render() {
    return(
      <div>
        <MainHeader currentPage="speakers"/>

        <h1 className="speakers-title">OUR SPEAKERS</h1>      
        <div className="speakers-container" >
          {this.state.agenda.map(item => 
            item.name !== 'info' && 
            <Speaker
              key={item.id}
              {...item}
            ></Speaker>
          )}
        </div>
        
        <MainFooter />
      </div>
    )
  }
}

export default Speakers