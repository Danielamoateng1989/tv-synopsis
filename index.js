/* eslint-disable no-unused-vars */
const express = require('express')
const showdata = require('./showdata')
const app = express()
const port = 1338




app.set('view engine', 'pug')


app.use(express.static('public'))


app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
  const info = showdata.seasons.find((info) => { return info.number === parseInt(request.params.number) })

  return response.render('season', { info: info })
})




app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 1338...')
})
