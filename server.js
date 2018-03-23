import express from 'express'
import path from 'path'
import config from './config'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.render('index', {
    content: 'Setcon 2018 Brest'
  })
})

app.listen(config.port, () => {
  console.info(`Express listening on port ${config.port}`)
})