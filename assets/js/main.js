document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.overlayBg').classList.toggle('active');
  });

  const overlay = document.querySelector('.overlayBg');
  const btntoggler = document.querySelector('#navbarSupportedContent')
  overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    btntoggler.classList.remove('show');
  });


  window.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử carousel
    var carousel = document.querySelector('#carouselExampleCaptions');

    // Kích hoạt auto slide
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 2000 // Đặt thời gian chờ giữa các slide (3000ms = 3 giây)
    });
  });