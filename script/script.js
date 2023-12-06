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
            const searchInput = document.getElementById('searchInput').value;
            
            if (searchInput === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Please enter a destination.',
                    confirmButtonText: 'OK'
                })
            } else {
                window.location.href = `list-hotel.html?search=${searchInput}`
            }
        });