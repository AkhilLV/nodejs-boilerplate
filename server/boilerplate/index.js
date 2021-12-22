// Vanilla Node

const http = require("http")
const fs = require("fs")

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

console.log(__dirname)
console.log(__filename)

// Express JS

const express = require('express')
const path = require('path')

app = express()
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))