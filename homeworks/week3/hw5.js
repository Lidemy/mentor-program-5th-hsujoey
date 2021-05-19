// LIOJ1004 - 聯誼順序比大小

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => solve(lines))

/*
自我檢討老師有說較不建議用這個做法，不過因為另外個做法有範例了，可以跟著訂正，這個沒有，
所以想請助教幫我過目一下這個做法寫的對不對～
*/

function solve(lines) {
  const m = Number(lines[0])
  for (let i = 1; i <= m; i++) {
    const [A, B, C] = lines[i].split(' ')
    if (BigInt(A) === BigInt(B)) {
      console.log('DRAW')
    } else if ((BigInt(A) > BigInt(B) && C === 1) || (BigInt(A) < BigInt(B) && C === -1)) {
      console.log('A')
    } else {
      console.log('B')
    }
  }
}
// m = sample Input的第一行，因為是字串，所以要轉數字 ＝ 意義是組數
// 要跑 sample Input 的第二行到最後一行＝跑lines[1]到lines[m]
// 每一行用空字串切割為[A, B, C]，是以下的簡寫
// let line = lines[i].split(' ')
// let A = line[0]
// let B = line[1]
// let C = line[2]
