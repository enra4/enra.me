const fs = require('fs')

const express = require('express')
const pug = require('pug')

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
	const content = fs.readFileSync('projects.json', 'utf8')
	res.render('index', {projects: JSON.parse(content)})
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
