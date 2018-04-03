import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import 'normalize.css/normalize.css'
import './styles/main.scss'

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
)
