document.querySelector('.btn-add').addEventListener('click', () => {
  const value  = document.querySelector('.input-todo').value // eslint-disable-line
  if (!value) return
  const div = document.createElement('div')
  div.classList.add('todo')
  div.innerHTML = `
    <input class='todo-checkbox' type='checkbox'/>
    <div class='todo-title'>${escapeHtml(value)}</div>
    <button class="btn-del">🅇</button>
    `
  document.querySelector('.todos').appendChild(div)
  document.querySelector('.input-todo').value = ''
})

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

document.querySelector('.input-todo').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault()
    document.querySelector('.btn-add').click()
  }
})

document.querySelector('.todos').addEventListener('click', (e) => {
  const { target } = e
  if (target.classList.contains('btn-del')) {
    target.parentNode.remove()
    return
  }

  if (target.classList.contains('todo-checkbox')) {
    if (target.checked) {
      target.parentNode.classList.add('done')
    } else {
      target.parentNode.classList.remove('done')
    }
  }
})
