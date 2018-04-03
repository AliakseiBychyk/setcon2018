import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './src/routes/routes'

const serverRender = (req, res) => {
  let context = {}
  const content = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >{renderRoutes(routes)}</StaticRouter>
  )
  res.render('index', {content})
}

export default serverRender
