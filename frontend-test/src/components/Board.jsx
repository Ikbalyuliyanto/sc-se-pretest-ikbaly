import Square from './Square.jsx'

// Board: menggambar grid rows x cols, mengisinya dengan komponen Square.
//
// Props (saran):
//  - rows, cols
//  - knight: { row, col }
//  - onMove(row, col): dipanggil Square saat kotak di-click
//
// Tugas Board:
//  1. hitung daftar langkah valid kuda SEKALI di sini (jangan di tiap Square)
//  2. render grid: untuk tiap (r, c) render <Square />
//  3. beri tahu tiap Square apakah dia: posisi kuda? / langkah valid? / warna kotak (terang/gelap)

// 8 kemungkinan gerakan L kuda (row, col)
const KNIGHT_MOVES = [
  [-1, +2], [+1, +2], [-1, -2], [+1, -2],
  [-2, +1], [-2, -1], [+2, +1], [+2, -1],
]

function getValidMoves(knight, rows, cols) {
  // TODO: dari KNIGHT_MOVES, hasilkan posisi tujuan yang masih di dalam papan
  return []
}

export default function Board({ rows, cols /*, knight, onMove */ }) {
  // const validMoves = getValidMoves(knight, rows, cols)

  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}
    >
      {/* TODO: loop r dari 0..rows-1, c dari 0..cols-1, render <Square /> */}
    </div>
  )
}
