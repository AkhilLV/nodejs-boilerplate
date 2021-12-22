const express = require('express')
const path = require('path')
const router = require('./routes/apis/members')

app = express()
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Router
app.use('/api/members', require('./routes/apis/members'))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))