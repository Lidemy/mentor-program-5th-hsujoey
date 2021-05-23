// LIOJ1020 - 判斷質數

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => solve(lines))

function isPrime(n) {
  if (n === 1) return false

  // 找根號以內的數就好，這是數學小知識
  // 先把開根號的值存好，否則每一圈迴圈都會運算一次
  const num = Math.sqrt(n)
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

// solve([ '5', '1', '2', '3', '4', '5' ])
// lines=[ '5', '1', '2', '3', '4', '5'
