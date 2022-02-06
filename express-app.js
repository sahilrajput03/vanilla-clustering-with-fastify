const express = require('express')
const app = express()

const port = +process.argv[2] || 8080
if (typeof port !== 'number') throw "Please provide a valid port number"

let count = 0
app.get('/', (req, res) => {
	count++
	console.log('got here', count)
  res.send('Hello World from Express app!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
