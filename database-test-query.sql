-- ============================================================
-- SOAL 3 - SQL : SIPERPUS (Sistem Informasi Perpustakaan)
-- Kandidat: Ikbal Yuliyanto
-- Dialect target: PostgreSQL (sesuaikan bila pakai MySQL)
-- ============================================================


-- ------------------------------------------------------------
-- 1. SCHEMA  (DDL)
--    Buat tabel: categories, users, books, borrowings
--    (tambahkan tabel/kolom lain bila perlu)
-- ------------------------------------------------------------

-- TODO: CREATE TABLE categories (...)
-- TODO: CREATE TABLE users (...)         -- nama, alamat, no_ktp, no_hp, email
-- TODO: CREATE TABLE books (...)         -- judul, pengarang, penerbit, isbn, tahun_terbit, stok, category_id
-- TODO: CREATE TABLE borrowings (...)    -- user_id, book_id, borrow_date, due_date, return_date


-- ------------------------------------------------------------
-- 2. INITIAL DATA (DML)
--    5 kategori, 5 user, 10 buku, 9 peminjaman
--    User1 -> buku 1-3, User2 -> buku 4-6, User3 -> buku 7-9
--    User3 telat kembalikan 1 buku selama 5 hari
-- ------------------------------------------------------------

-- TODO: INSERT INTO categories ...
-- TODO: INSERT INTO users ...
-- TODO: INSERT INTO books ...
-- TODO: INSERT INTO borrowings ...


-- ------------------------------------------------------------
-- 3. QUERY JAWABAN
-- ------------------------------------------------------------

-- 3a. Daftar buku yang TIDAK PERNAH dipinjam siapapun
--     expected: Buku 10
-- TODO


-- 3b. User yang pernah telat mengembalikan buku + dendanya (Rp1.000/hari)
--     expected: User 3 | Rp5000
-- TODO


-- 3c. Tiap user beserta daftar buku yang dipinjamnya (digabung 1 kolom)
--     expected:
--       1 | User 1 | Buku 3, Buku 2, Buku 1
--       2 | User 2 | Buku 6, Buku 5, Buku 4
--       3 | User 3 | Buku 9, Buku 8, Buku 7
-- TODO
