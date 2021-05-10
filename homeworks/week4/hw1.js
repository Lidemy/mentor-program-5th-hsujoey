
const request = require('request')
// eslint-disable-next-line
request('https://lidemy-book-store.herokuapp.com/books?_limit=10', function(err, response, body) {
  if (err) {
    console.log('err', err)
    return
  }

  let books
  try {
    books = JSON.parse(body)
  } catch (err) {
    console.log(err)
    return
  }

  for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].id} ${books[i].name}`)
  }
})
