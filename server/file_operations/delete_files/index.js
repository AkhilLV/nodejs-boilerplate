const { unlink } = require("fs")

unlink("trash.txt", err => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Deleted")
})