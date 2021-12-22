const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')
const app = express()
app.listen(3000, () => console.log('Listening on PORT: 3000'))
app.use(express.static('public'))
app.use(express.json())

app.post('/api', (req, res) => {

  nodeHtmlToImage({
    output: './image.png',
    html: '<html><body></body></html>'
  })
    .then(() => console.log('The image was created successfully!'))
})