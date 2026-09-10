package main

import (
	"fmt"
	"sync"
)

func worker(numbers []int, results chan<- int, wg *sync.WaitGroup) {
	defer wg.Done()

	sum := 0

	for _, number := range numbers {
		if number%2 == 0 {
			sum += number
		}
	}

	results <- sum
}

func main() {
	// Membuat slice integer berukuran besar.
	numbers := make([]int, 1000000)

	for i := range numbers {
		numbers[i] = i + 1
	}

	const workerCount = 4

	// Channel untuk mengumpulkan hasil dari setiap worker.
	results := make(chan int, workerCount)

	var wg sync.WaitGroup
	wg.Add(workerCount)

	// Membagi slice menjadi 4 bagian.
	chunkSize := len(numbers) / workerCount

	for i := 0; i < workerCount; i++ {
		start := i * chunkSize
		end := start + chunkSize

		if i == workerCount-1 {
			end = len(numbers)
		}

		go worker(numbers[start:end], results, &wg)
	}

	// Menunggu semua worker selesai.
	wg.Wait()

	// Mengumpulkan hasil dari semua worker.
	totalSum := 0

	for i := 0; i < workerCount; i++ {
		totalSum += <-results
	}

	close(results)

	fmt.Println("Jumlah bilangan genap:", totalSum)
}