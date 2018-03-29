import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AgendaItem from './AgendaItem'
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
      <div className="agenda">
        <MainHeader currentPage="agenda" />
        <h1 className="agenda-title">AGENDA</h1>
        <div className="agenda-container" >
          <div className="agenda-navigation">
            <button>Земля</button>
            <button>Весна</button>
            <button>Осень</button>
          </div>


          <div className="agenda-section agenda">
          </div>


          {this.state.agenda.map(item => 
            <AgendaItem
              key={item.id}
              {...item}
            ></AgendaItem>
          )}
        </div>
        <MainFooter />
      </div>
    )
  }
}

export default Agenda