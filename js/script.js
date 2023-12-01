document.addEventListener('DOMContentLoaded', function () {
    // Set check-in date to today
    document.getElementById('check-in-date').valueAsDate = new Date();

    // Set check-out date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('check-out-date').valueAsDate = tomorrow;

    // Tambahkan event listener untuk tombol pencarian
    document.getElementById('searchBtn').addEventListener('click', function () {
        searchHotels();
    });
});

function setSearchInput(destination) {
    document.getElementById('searchInput').value = destination;
}

function searchHotels() {
    const searchInput = document.getElementById('searchInput').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    console.log('Search Input:', searchInput);
    console.log('Check-In Date:', checkInDate);
    console.log('Check-Out Date:', checkOutDate);
    // Tambahkan logika untuk menangani pencarian berdasarkan parameter yang dipilih
}

document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.searchBtn');

    // Fungsi untuk menangani animasi pada tombol "Cari"
    function animateSearchButton() {
      // Menambahkan kelas animasi
      searchButton.classList.add('animated');

      // Menghapus kelas animasi setelah selesai
      setTimeout(function() {
        searchButton.classList.remove('animated');
      }, 1000); // Sesuaikan dengan durasi animasi dalam milidetik
    }

    // Menambahkan event listener untuk tombol "Cari"
    searchButton.addEventListener('click', function() {
      // Panggil fungsi animasi
      animateSearchButton();
      
      // Di sini Anda bisa menambahkan logika lainnya sesuai kebutuhan
    });
  });