// Ambil elemen-elemen yang diperlukan dari DOM
const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');

// Tambahkan event listener untuk mengatur klik pada tombol hamburger
burgerMenu.addEventListener('click', () => {
    // Toggle class 'active' pada burger-menu
    burgerMenu.classList.toggle('active');
    
    // Toggle class 'active' pada navbar untuk menampilkan atau menyembunyikan menu navigasi
    navbar.classList.toggle('active');
});

// Smooth scroll untuk semua tautan dengan href yang dimulai dengan '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Sesuaikan posisi scroll jika diperlukan
                behavior: 'smooth'
            });
        }
    });
});

// Ambil semua tautan di navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Tambahkan event listener untuk smooth scroll pada setiap tautan navbar
navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Menghentikan aksi default dari tautan
        
        const targetSection = this.getAttribute('data-section'); // Ambil data-section dari tautan
        const targetElement = document.getElementById(targetSection); // Ambil elemen dengan ID yang sesuai
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Lakukan scroll halus ke elemen tersebut
        }
        
        // Menutup menu burger setelah mengklik tautan (jika perlu)
        navbar.classList.remove('active'); // Hapus kelas 'active' dari navbar
        burgerMenu.classList.remove('active'); // Hapus kelas 'active' dari burger-menu
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Tambahkan event listener untuk toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');

    // Simpan preferensi dark mode ke localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Periksa apakah pengguna telah mengatur preferensi dark mode sebelumnya
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
}

// Function untuk mengecek apakah suatu elemen berada dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function untuk menangani event scroll
function handleScroll() {
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
        if (section.id !== 'home' && isInViewport(section)) {
            section.classList.add('animate');
        }
    });
}

// Tambahkan event listener scroll untuk memicu animasi saat section masuk ke viewport
window.addEventListener('scroll', handleScroll);

// Pengecekan awal saat halaman dimuat
handleScroll();
