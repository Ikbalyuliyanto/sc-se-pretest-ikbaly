"use strict";


/* =========================
   KOMPONEN KOTAK
========================= */

class ChessCell extends HTMLElement {

    constructor() {
        super();

        this.row = 0;
        this.column = 0;
    }


    // Mengatur posisi kotak
    setPosition(row, column) {

        this.row = row;
        this.column = column;

        this.dataset.row = row;
        this.dataset.column = column;

    }


    // Mengatur warna kotak
    setColor() {

        if ((this.row + this.column) % 2 === 0) {

            this.classList.add("cell--light");

        } else {

            this.classList.add("cell--dark");

        }

    }


    // Menampilkan K
    showKnight() {

        this.textContent = "K";

        this.classList.add("cell--knight");

    }

}


// Daftarkan komponen kotak
customElements.define("chess-cell", ChessCell);



/* =========================
   KOMPONEN BOARD
========================= */

class ChessBoard extends HTMLElement {

    constructor() {
        super();

        // Ukuran papan
        this.rows = 8;
        this.columns = 8;

        // Posisi awal kuda
        this.knightRow = 0;
        this.knightColumn = 0;
    }


    // Membuat papan
    createBoard() {

        // Hapus papan lama
        this.innerHTML = "";


        // Tentukan jumlah kolom
        this.style.setProperty(
            "--columns",
            this.columns
        );


        // Tentukan jumlah baris
        this.style.setProperty(
            "--rows",
            this.rows
        );


        // Buat semua kotak
        for (let row = 0; row < this.rows; row++) {

            for (
                let column = 0;
                column < this.columns;
                column++
            ) {

                // Buat komponen kotak
                const cell =
                    document.createElement("chess-cell");


                // Tentukan posisi
                cell.setPosition(row, column);


                // Tentukan warna
                cell.setColor();


                // Jika posisi kuda
                if (
                    row === this.knightRow &&
                    column === this.knightColumn
                ) {

                    cell.showKnight();

                }


                // Masukkan kotak ke Board
                this.appendChild(cell);

            }

        }

    }


    // Mengecek gerakan kuda
    isKnightMove(row, column) {

        const rowMove =
            Math.abs(row - this.knightRow);

        const columnMove =
            Math.abs(column - this.knightColumn);


        /*
         * Kuda bergerak:
         * 2 baris + 1 kolom
         * atau
         * 1 baris + 2 kolom
         */

        return (
            (rowMove === 2 && columnMove === 1) ||
            (rowMove === 1 && columnMove === 2)
        );

    }


    // Memberikan warna saat hover
    showHover(cell) {

        const row =
            Number(cell.dataset.row);

        const column =
            Number(cell.dataset.column);


        // Hapus warna hover sebelumnya
        this.querySelectorAll("chess-cell")
            .forEach(function(cell) {

                cell.classList.remove(
                    "cell--allowed"
                );

                cell.classList.remove(
                    "cell--blocked"
                );

            });


        // Jika mouse berada di posisi kuda
        if (
            row === this.knightRow &&
            column === this.knightColumn
        ) {

            return;

        }


        // Jika gerakan valid
        if (this.isKnightMove(row, column)) {

            cell.classList.add(
                "cell--allowed"
            );

        }

        // Jika gerakan tidak valid
        else {

            cell.classList.add(
                "cell--blocked"
            );

        }

    }


    // Memindahkan kuda
    moveKnight(cell) {

        const row =
            Number(cell.dataset.row);

        const column =
            Number(cell.dataset.column);


        // Jika gerakan tidak valid
        if (!this.isKnightMove(row, column)) {

            return;

        }


        // Ubah posisi kuda
        this.knightRow = row;
        this.knightColumn = column;


        // Buat ulang papan
        this.createBoard();

    }

}


// Daftarkan komponen Board
customElements.define("chess-board", ChessBoard);



/* =========================
   PROGRAM UTAMA
========================= */


// Ambil Board
const board =
    document.getElementById("board");


// Ambil Form
const form =
    document.getElementById("boardForm");


// Ambil input Row
const rowInput =
    document.getElementById("row");


// Ambil input Column
const columnInput =
    document.getElementById("column");



/* =========================
   MOUSE MASUK KOTAK
========================= */

board.addEventListener(
    "mouseover",
    function(event) {

        const cell =
            event.target.closest("chess-cell");


        if (!cell) {
            return;
        }


        board.showHover(cell);

    }
);



/* =========================
   KLIK KOTAK
========================= */

board.addEventListener(
    "click",
    function(event) {

        const cell =
            event.target.closest("chess-cell");


        if (!cell) {
            return;
        }


        board.moveKnight(cell);

    }
);



/* =========================
   GENERATE BOARD
========================= */

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Ambil ukuran baru
        board.rows =
            Number(rowInput.value);

        board.columns =
            Number(columnInput.value);


        // Kembalikan kuda ke kiri atas
        board.knightRow = 0;
        board.knightColumn = 0;


        // Buat papan baru
        board.createBoard();

    }
);



/* =========================
   PAPAN PERTAMA
========================= */

board.createBoard();