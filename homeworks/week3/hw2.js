// LIOJ1025 - 水仙花數

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => solve(lines))

function solve(lines) {
  const temp = lines[0].split(' ')
  const n = Number(temp[0])
  const m = Number(temp[1])
  for (let i = n; i <= m; i++) {
    if (isNstr(i)) {
      console.log(i)
    }
  }
}
// 陣列裡的元素是字串，要轉成數字

function isNstr(n) {
  const str = ` ${n} + '' `
  const digits = str.length
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** digits
  }
  return sum === n
}
// 數字n轉成字串
