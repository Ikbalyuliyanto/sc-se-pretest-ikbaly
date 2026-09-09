import { useState } from 'react'
import Board from './components/Board.jsx'

// SOAL 1 - FRONTEND: Chess Lonely Knight
//
// Checklist requirement:
//  [ ] 2 komponen: Board + Square
//  [ ] 1 kuda, huruf "K" merah tebal, posisi awal pojok kiri atas (0,0)
//  [ ] 8 gerakan L kuda saja yang valid
//  [ ] hover kotak TIDAK valid  -> background merah
//  [ ] hover kotak valid        -> background hijau
//  [ ] hover kotak posisi kuda  -> background merah
//  [ ] click kotak tidak valid  -> posisi kuda tidak berubah
//  [ ] click kotak valid        -> kuda pindah ke kotak itu
//  [ ] tombol "Generate Board"  -> buat board baru dari input row/col, kuda reset ke (0,0)
//  [ ] input row & col: integer, min 1, max 100
//  [ ] rendering optimized (Square pakai React.memo)

export default function App() {
  const [rows, setRows] = useState(8)
  const [cols, setCols] = useState(8)

  // ukuran board yang benar-benar sedang dipakai (baru berubah saat klik Generate)
  const [board, setBoard] = useState({ rows: 8, cols: 8 })

  // TODO: state posisi kuda, mis. { row: 0, col: 0 }

  function handleGenerate() {
    // TODO: validasi rows/cols (1..100), set board, reset posisi kuda ke (0,0)
  }

  return (
    <div>
      <h1>Chess Lonely Knight</h1>

      <div className="controls">
        <label>Row</label>
        <input
          type="number"
          min={1}
          max={100}
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        <label>Column</label>
        <input
          type="number"
          min={1}
          max={100}
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
        />
        <button onClick={handleGenerate}>Generate Board</button>
      </div>

      <Board
        rows={board.rows}
        cols={board.cols}
        // TODO: teruskan posisi kuda + handler pindah ke Board
      />
    </div>
  )
}
