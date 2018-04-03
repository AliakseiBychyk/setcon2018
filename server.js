import express from 'express'
// import path from 'path'
import config from './config'
import serverRender from './serverRender'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/*', serverRender)

app.listen(config.port, () => {
  console.info(`Express listening on port ${config.port}`)
})
