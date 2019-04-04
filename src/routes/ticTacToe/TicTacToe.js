{
  /* <html>
    <body>
      <div id="tic-tac-toe">
      </div>
      <button id="start-game">Start</button>
    </body>
  </html>
     */
}

class TicTacToe {
  constructor () {
    this.length = 3
    this.col = new Array(3).fill(0)
    this.row = new Array(3).fill(0)
    this.leftDiagnol = 0
    this.rightDiagnol = 0
    this.player = 1
    this.endLineClass = ''

    this.ticTacToe = document.getElementById('tic-tac-toe')
    this.ticTacToe.innerHTML = '<div id="end-line"></div>'
    this.endLine = document.getElementById('end-line')

    for (let i = 0; i < 9; i++) {
      const div = this.buildGame(i)
      let cellsMap = {}
      div.addEventListener('click', e => {
        if (cellsMap[i] || this.endLineClass !== '') return
        cellsMap[i] = this.player === 1 ? 'X' : 'O'
        div.innerHTML = `<span>${cellsMap[i]}</span>`
        this.player = -this.player
        let res = this.move(
          parseInt(div.dataset.row),
          parseInt(div.dataset.col),
          this.player
        )
        const cols = {
          0: 'firstCol',
          1: 'secondCol',
          2: 'thirdCol'
        }
        const rows = {
          0: 'firstRow',
          1: 'secondRow',
          2: 'thirdRow'
        }
        const colIndex = this.col.indexOf(this.player * 3)
        const rowIndex = this.row.indexOf(this.player * 3)
        if (res) {
          if (cols[colIndex]) {
            this.endLineClass = cols[colIndex]
          } else if (rows[rowIndex]) {
            this.endLineClass = rows[rowIndex]
          } else if (Math.abs(this.leftDiagnol) === 3) {
            this.endLineClass = 'leftDiagnol'
          } else if (Math.abs(this.rightDiagnol) === 3) {
            this.endLineClass = 'rightDiagnol'
          }
          this.endLine.classList.add(this.endLineClass)
        }
        if (this.endLineClass !== '') {
          const resDiv = document.createElement('div')
          resDiv.innerHTML = `<span>Player ${this.player} Won!</span>`
          this.ticTacToe.appendChild(resDiv)
        }
      })
    }
  }

  buildGame (i) {
    let div = document.createElement('div')
    div.classList.add('cell')
    let col, row
    if (i >= 0 && i <= 2) row = 0
    if (i >= 3 && i <= 5) row = 1
    if (i >= 6 && i <= 8) row = 2
    col = i - row * 3
    div.dataset.col = col
    div.dataset.row = row
    this.ticTacToe.appendChild(div)
    return div
  }

  move (row, col, player) {
    let add = player === 1 ? 1 : -1
    this.row[row] += player
    this.col[col] += player
    if (row == col) {
      this.leftDiagnol += player
    }
    if (row + col === this.length - 1) {
      this.rightDiagnol += player
    }
    if (
      Math.abs(this.row[row]) === this.length ||
      Math.abs(this.col[col]) === this.length ||
      Math.abs(this.leftDiagnol) === this.length ||
      Math.abs(this.rightDiagnol) === this.length
    ) {
      return player
    }
    return 0
  }
}

const startButton = document
  .getElementById('start-game')
  .addEventListener('click', e => {
    const TTO = new TicTacToe()
  })
