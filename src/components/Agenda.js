import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Heading from './Heading'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { agenda } from '../../assets/agenda.json'

class Agenda extends Component {
  state = {
    agenda,
    filter: ''
  }

  render() {
    return(
      <div>
        <MainHeader currentPage="agenda" />
        <h1 className="agenda-title">AGENDA</h1>
        <div className="agenda-container" >
        <div className="agenda-navigation">
          <button>Земля</button>
          <button>Весна</button>
          <button>Осень</button>
        </div>
        <div className="stripe-dark-coral"></div>
          {this.state.agenda.map(item => 
            <Heading
              key={item.id}
              {...item}
            ></Heading>
          )}
        </div>
        <MainFooter />
      </div>
    )
  }
}

export default Agenda