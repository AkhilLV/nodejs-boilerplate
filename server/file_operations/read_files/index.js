const fs = require('fs')

try {
  const data = fs.readFileSync("test.txt", 'utf8')
  console.log(data)
} catch (err) {
  console.log(err)
}

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})

console.log("From ouside")