const { rename } = require("fs")

rename('old.txt', 'new.txt', (err) => err)