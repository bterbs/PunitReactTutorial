const express = require('express')
const app = express()
const YelpApi = require('./yelp_api')

app.use(express.static('public'))

// routes to access yelp's api endpoints
app.use('/yelp/search', (req, res) => {
  let params = req.query
  YelpApi.search(params)
    .then(results => {
      res.json(results)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
