const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');

// Event listener untuk mengatur klik pada tombol hamburger
burgerMenu.addEventListener('click', () => {
    // Toggle class 'active' pada burger-menu
    burgerMenu.classList.toggle('active');
    
    // Toggle class 'active' pada navbar untuk menampilkan atau menyembunyikan menu navigasi
    navbar.classList.toggle('active');
});

// Smooth scroll untuk semua href dengan '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Ambil semua tautan di navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Event listener untuk smooth scroll pada setiap tautan navbar
navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = this.getAttribute('data-section'); // Ambil data-section dari tautan
        const targetElement = document.getElementById(targetSection); // Ambil elemen dengan ID yang sesuai
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Menutup menu burger setelah mengklik section
        navbar.classList.remove('active'); // Hapus kelas 'active' dari navbar
        burgerMenu.classList.remove('active'); // Hapus kelas 'active' dari burger-menu
    });
});

// Dark mode toggle
const toggleCheckbox = document.querySelector('.toggle-checkbox');
const body = document.body;

toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});


// Event listener untuk toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');

    // Simpan preferensi dark mode ke local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Mengecek apakah user telah mengatur ke dark mode sebelumnya
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
}

// Function untuk mengecek suatu elemen berada dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function untuk event scroll
function handleScroll() {
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
        if (section.id !== 'home' && isInViewport(section)) {
            section.classList.add('animate');
        }
    });
}

// Event listener scroll untuk memicu animasi saat section masuk ke viewport
window.addEventListener('scroll', handleScroll);

// Pengecekan awal saat halaman dimuat
handleScroll();
