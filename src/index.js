import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import 'normalize.css/normalize.css'
import './styles/main.scss'

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

