import { memo, useState } from 'react'

// Square: satu kotak papan.
//
// Props (saran):
//  - row, col
//  - isDark      : warna dasar kotak (papan catur selang-seling)
//  - hasKnight   : true kalau kuda ada di sini
//  - isValidMove : true kalau kotak ini salah satu langkah valid kuda
//  - onClick()   : panggil saat di-click (Board yang memutuskan pindah / tidak)
//
// Aturan warna saat HOVER:
//  - hover di posisi kuda          -> merah
//  - hover di kotak langkah valid  -> hijau
//  - hover di kotak lain           -> merah
//
// Dibungkus memo() supaya kotak yang props-nya tidak berubah tidak ikut re-render.

function Square({ isDark, hasKnight, isValidMove, onClick }) {
  const [hover, setHover] = useState(false)

  // TODO: tentukan className akhir berdasarkan isDark / hasKnight / hover / isValidMove

  return (
    <div
      className={'square ' + (isDark ? 'square--dark' : 'square--light')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {hasKnight ? 'K' : ''}
    </div>
  )
}

export default memo(Square)
