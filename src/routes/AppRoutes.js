import React from 'react'
import { Route, Switch } from 'react-router'
import routes from './routes'

const AppRoutes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        {...route}
      />
    ))}
  </Switch>
)

export default AppRoutes