const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {

})

app.get('/api', (req, res) => {

})

app.listen(port, console.log('app running on port ' + port))