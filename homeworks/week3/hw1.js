// LIOJ1021 - 好多星星

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
  let result = ''
  for (let i = 1; i <= lines; i++) {
    result += '*'
    console.log(result)
  }
}

// lines=[ '8' ]
// typeof(lines)=obj

// lines[0]=8
// typeof(lines[0])=string

// 經過測試，不管有沒有轉成 number，for 都可以執行
