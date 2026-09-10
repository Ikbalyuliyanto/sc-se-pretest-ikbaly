/* =========================
   Soal 1
   dalam bentuk gambar.
========================= */
/* =========================
   Soal 2
========================= */

SELECT b.judul AS "Buku"
FROM buku b
LEFT JOIN peminjaman p
    ON b.id = p.buku_id
WHERE p.buku_id IS NULL;

/* =========================
   Soal 3
========================= */

SELECT
    u.nama,
    (p.tanggal_kembali - p.tanggal_jatuh_tempo) * 1000 AS denda
FROM pengguna u
JOIN peminjaman p
    ON u.id = p.pengguna_id
WHERE p.tanggal_kembali > p.tanggal_jatuh_tempo;

/* =========================
   Soal 4
========================= */

SELECT
    u.nama AS "User",
    STRING_AGG(b.judul, ', ') AS "Buku"
FROM pengguna u
JOIN peminjaman p ON u.id = p.pengguna_id
JOIN buku b ON p.buku_id = b.id
GROUP BY u.nama;