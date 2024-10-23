const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');

// Event listener untuk mengatur klik pada tombol hamburger
burgerMenu.addEventListener('click', () => {
 // Toggle class 'active' pada burger-menu
  burgerMenu.classList.toggle('active');
  
 // Toggle class 'active' pada navbar untuk menampilkan atau menyembunyikan menu navigasi
  navbar.classList.toggle('active');
});

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

// Simpan preferensi dark mode ke localStorage
toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Simpan status dark mode
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Simpan status non-dark mode
  }
});

// Cek preferensi dark mode saat halaman dimuat
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleCheckbox.checked = true; // Memastikan checkbox aktif jika dark mode aktif
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
