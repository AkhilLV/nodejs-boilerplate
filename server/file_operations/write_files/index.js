const { writeFile, appendFile, writeFileSync } = require("fs")

const content = "world"

// writeFile("written.txt", content, { flag: "a" }, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log("Written")
// })

appendFile('written.txt', content, (err) => console.log(err))