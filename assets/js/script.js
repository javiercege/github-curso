const showCarouselBtn = document.getElementById('showCarouselBtn');
const hideCarouselBtn = document.getElementById('hideCarouselBtn');
const carousel = document.getElementById('carouselExampleIndicators');


showCarouselBtn.addEventListener('click', function() {
    carousel.style.display = 'block';
    showCarouselBtn.style.display = 'none'; 
    hideCarouselBtn.style.display = 'inline-block';
});


hideCarouselBtn.addEventListener('click', function() {
    carousel.style.display = 'none';
    showCarouselBtn.style.display = 'inline-block';
    hideCarouselBtn.style.display = 'none';
});


 hideTextBoxBtn.addEventListener('click', function() {
    textBox.style.display = 'none';
    overlay.style.display = 'none';
});


overlay.addEventListener('click', function() {
    textBox.style.display = 'none';
    overlay.style.display = 'none';
});