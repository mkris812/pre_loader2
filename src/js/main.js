window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) { // Adjust the 50 to whatever threshold you prefer
      header.classList.add('bg-white');
      header.classList.remove('bg-transparent');
      header.classList.add('border-b-2', 'border-secondaryc','rounded-b-3xl');
  } else {
      header.classList.add('bg-transparent');
      header.classList.remove('border-b-2', 'border-secondaryc','rounded-b-3xl');
      header.classList.remove('bg-white');
  }
});

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
      pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', // Corrected class name
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      // ... any other settings
  });

  document.addEventListener('DOMContentLoaded', function () {
    var menuBar = document.getElementById('menu-bar');
    var mobileMenu = document.getElementById('mobil-menu');
    var noMenu = document.getElementById('no-menu');
    var menuLinks = document.querySelectorAll('#mobil-menu ul li a');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('opacity-0');
    }

    menuBar.addEventListener('click', toggleMenu);
    noMenu.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
        link.addEventListener('click', toggleMenu);
    });
});
