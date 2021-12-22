const data = {
  HTML: document.querySelector('.text').innerHTML
}

console.log(data)

fetch('/api', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})