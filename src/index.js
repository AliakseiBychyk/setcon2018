import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './components/App/App'
import Agenda from './components/Agenda/Agenda'
import Speakers from './components/Speakers/Speakers'

render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/speakers" component={Speakers} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

