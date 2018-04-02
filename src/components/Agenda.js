import AgendaItem from './AgendaItem'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import React, { Component } from 'react'
import classnames from 'classnames';
import { Link, Route } from 'react-router-dom'
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

  currentStream = () => {
    const streams = {
      [STREAMS.ALL]: 'Все потоки',
      [STREAMS.EARTH]: 'Поток: Земля',
      [STREAMS.SPRING]: 'Поток: Весна',
      [STREAMS.AUTUMN]: 'Поток: Осень' 
    }
    return streams[this.state.filter]
  }

  setStream = (stream) => {
    this.setState(prevState => {
      return {
        filter : prevState.filter !== stream ? stream : STREAMS.ALL
      }
    })
  }

  render() {
    const { filter } = this.state;

    return(
      <div className="agenda">
        <MainHeader currentPage="agenda" />
        <h1 className="agenda-title">ПРОГРАММА КОНФЕРЕНЦИИ</h1>
        <div className="agenda-container" >
          <div className="agenda-navigation">
            <nav className="agenda-streams">
              <div className="agenda-streams__title">Потоки:</div>
              <div 
                className={classnames(['menu-list__item__link', 'menu-list__item'], {
                  'menu-list__item--active': filter === STREAMS.EARTH
                })}
                onClick={() => this.setStream(STREAMS.EARTH)}
              >
                Земля
              </div>
              <div 
                onClick={() => this.setStream(STREAMS.SPRING)}
                className={classnames(['menu-list__item__link', 'menu-list__item'], {
                  'menu-list__item--active': filter === STREAMS.SPRING
                })}
              >
                Весна
              </div>
              <div 
                onClick={() => this.setStream(STREAMS.AUTUMN)}
                className={classnames(['menu-list__item__link', 'menu-list__item'], {
                  'menu-list__item--active': filter === STREAMS.AUTUMN
                })}
              >
                Осень
              </div>
            </nav>
          </div>
          <div className="agenda-navigation__current-stream">
            <div className="current-stream__title">{this.currentStream()}</div>
            <div>*в расписании возможны изменения</div>
          </div>

          {this.state.agenda.map(item => 
            (item.stream === this.state.filter || this.state.filter === STREAMS.ALL || item.stream === STREAMS.ALL) &&
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