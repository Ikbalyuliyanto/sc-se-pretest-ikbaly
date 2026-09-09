-- SOAL 1
categories
    |
    | 1
    |
    | N
  books
    |
    | 1
    |
    | N
  loans
    |
    | N
    |
    | 1
  users

-- SOAL 2

SELECT b.judul AS Buku
FROM books b
LEFT JOIN loans l ON b.id_book = l.id_book
WHERE l.id_book IS NULL;


-- SOAL 3

SELECT
    u.nama AS User,
    CONCAT(
        'Rp',
        SUM(
            DATEDIFF(l.tanggal_kembali, l.tanggal_jatuh_tempo) * 1000
        )
    ) AS Denda
FROM users u
JOIN loans l ON u.id_user = l.id_user
WHERE l.tanggal_kembali > l.tanggal_jatuh_tempo
GROUP BY u.id_user, u.nama;


-- SOAL 4

SELECT
    ROW_NUMBER() OVER (ORDER BY u.id_user) AS No,
    u.nama AS User,
    GROUP_CONCAT(
        b.judul
        ORDER BY b.id_book DESC
        SEPARATOR ', '
    ) AS Buku
FROM users u
JOIN loans l ON u.id_user = l.id_user
JOIN books b ON l.id_book = b.id_book
GROUP BY u.id_user, u.nama
ORDER BY u.id_user;
