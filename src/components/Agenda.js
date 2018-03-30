import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AgendaItem from './AgendaItem'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { agenda } from '../../assets/agenda.json'

class Agenda extends Component {
  state = {
    agenda,
    filter: 'all'
  }

  componentDidUpdate() {

  }

  currentStream = () => {
    const streams = {
      all: 'Все потоки',
      1: 'Поток 1: Земля - Θ Тета',
      2: 'Поток 2: Весна',
      3: 'Поток 3: Зима' 
    }
    return streams[this.state.filter]
  }

  setStream = (stream) => {
    this.setState(prevState => {
      return {
        filter : prevState.filter !== stream ? stream : 'all'
      }
    })
  }

  setEarthStream = () => {
    this.setStream('1')
  }

  setSpringStream = () => {
    this.setStream('2')
  }

  setFallStream = () => {
    this.setStream('3')
  }

  render() {
    return(
      <div className="agenda">
        <MainHeader currentPage="agenda" />
        <h1 className="agenda-title">AGENDA</h1>
        <div className="agenda-container" >
          <div className="agenda-navigation">
            <strong>Потоки:  </strong>
            <button onClick={this.setEarthStream}>Земля</button>
            <button onClick={this.setSpringStream}>Весна</button>
            <button onClick={this.setFallStream}>Осень</button>
            <strong 
              className="agenda-navigation_current_stream"
            >{this.currentStream()}</strong>
          </div>


          <div className="agenda-section agenda">
          </div>

          {this.state.agenda.map(item => 
            (item.stream === this.state.filter || this.state.filter === 'all' || item.stream === 'all') &&
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