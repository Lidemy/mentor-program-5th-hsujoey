const request = require('request')

const args = process.argv
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'
const action = args[2]

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBook(args[3])
    break
  case 'delete':
    deleteBook(args[3])
    break
  case 'create':
    createBook(args[3])
    break
  case 'update':
    updateBook(args[3], args[4])
    break
  default:
    console.log('Available commands: list, read, delete, create and update')
}

function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const books = JSON.parse(body)
    for (let i = 0; i < books.length; i += 1) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const books = JSON.parse(body)
    console.log(books.name)
  })
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err)
    }
    console.log('刪除成功！')
  })
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err)
    }
    console.log('新增成功！')
  })
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err)
    }
    console.log('更新成功！')
  })
}
