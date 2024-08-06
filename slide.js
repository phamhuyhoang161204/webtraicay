let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.author');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', function() {
    showSlides(--slideIndex);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides(++slideIndex);
});
//Thanh điều chỉnh giá
function updatePriceDisplay(value) {
    document.getElementById('priceDisplay').innerText = value;
}

