import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AgendaItem from './AgendaItem'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { agenda } from '../../assets/agenda.json'

const STREAMS = {
  ALL: 'all',
  EARTH: '1',
  SPRING: '2',
  AUTUMN: '3'
};

class Agenda extends Component {
  state = {
    agenda,
    filter: STREAMS.ALL
  }

  componentDidUpdate() {

  }

  currentStream = () => {
    const streams = {
      [STREAMS.ALL]: 'Все потоки',
      [STREAMS.EARTH]: 'Поток 1: Земля - Θ Тета',
      [STREAMS.SPRING]: 'Поток 2: Весна',
      [STREAMS.AUTUMN]: 'Поток 3: Осень' 
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

  render() {
    return(
      <div className="agenda">
        <MainHeader currentPage="agenda" />
        <h1 className="agenda-title">AGENDA</h1>
        <div className="agenda-container" >
          <div className="agenda-navigation">
            <strong>Потоки:  </strong>
            <button onClick={() => this.setStream(STREAMS.EARTH)}>Земля</button>
            <button onClick={() => this.setStream(STREAMS.SPRING)}>Весна</button>
            <button onClick={() => this.setStream(STREAMS.AUTUMN)}>Осень</button>
            <div className="agenda-navigation_current_stream">
              <div>
                <strong>{this.currentStream()}</strong>
              </div>
              <div>В расписании возможны изменения</div>
            </div>
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