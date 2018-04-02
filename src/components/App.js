import React, { Component, Fragment } from 'react'
// import { Link, Route } from 'react-router-dom'
import { summary } from '../../assets/summary.json'
import ParticipationSection from './ParticipationSection'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import EventSection from './EventSection'
import LogosSection from './LogosSection'
import DescriptionSection from './DescriptionSection'


class App extends Component {
  state = {
    summary
  }

  render() {
    return(
      <Fragment>       
        <MainHeader currentPage="home" />
        <EventSection />
        <LogosSection />
        <ParticipationSection summary={this.state.summary} />
        <DescriptionSection />
        <MainFooter />
      </Fragment>
    )
  }
}

export default App