const express = require("express")
app = express()
const PORT = process.env.port || 5000

app.use(express.static('./public'))

app.get('/download', (req, res) => {
  res.download('./download.txt')
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))