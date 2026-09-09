// SOAL 2 - BACKEND (Go)
//
// Baca slice integer berukuran besar, hitung SUM semua bilangan GENAP
// menggunakan goroutine. Slice dibagi ke beberapa worker (mis. 4),
// tiap worker memproses bagiannya secara konkuren. Gunakan channel
// untuk mengumpulkan hasil parsial + sinkronisasi (WaitGroup) supaya
// bebas race condition.
//
// Jalankan:  go run main.go
// Cek race:  go run -race main.go

package main

import (
	"fmt"
)

const numWorkers = 4

// sumEvens menjumlahkan bilangan genap pada sebagian slice (satu chunk).
func sumEvens(part []int) int {
	// TODO: loop part, kalau v%2 == 0 tambahkan ke total, return total
	return 0
}

func main() {
	// data contoh (nanti bisa dibesarkan, mis. 1..1_000_000)
	data := make([]int, 0, 1_000_000)
	for i := 1; i <= 1_000_000; i++ {
		data = append(data, i)
	}

	// TODO:
	// 1. buat channel untuk hasil parsial: results := make(chan int, numWorkers)
	// 2. buat sync.WaitGroup
	// 3. bagi `data` jadi numWorkers chunk; untuk tiap chunk:
	//       wg.Add(1)
	//       go func(part []int) { defer wg.Done(); results <- sumEvens(part) }(chunk)
	// 4. goroutine terpisah: go func(){ wg.Wait(); close(results) }()
	// 5. total := 0; for r := range results { total += r }
	// 6. cetak total

	var total int
	fmt.Println("total sum bilangan genap:", total)
}
