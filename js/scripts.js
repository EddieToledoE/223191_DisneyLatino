const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slideTo(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 1) {
        currentIndex++;
        slideTo(currentIndex);
    }
});

function slideTo(index) {
    const slideWidth = slider.clientWidth / 1;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
}

const slider2 = document.querySelector('.slider2');
const prevButton2 = document.getElementById('prevBtn2');
const nextButton2 = document.getElementById('nextBtn2');
let currentIndex2 = 0;

prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2 --;
        slideTo2(currentIndex2);
    }
});

nextButton2.addEventListener('click', () => {
    if (currentIndex2 < 1) {
        currentIndex2++;
        slideTo2(currentIndex2);
    }
});

function slideTo2(index2) {
    const slideWidth2 = slider2.clientWidth / 1;
    const newPosition = -index2 * slideWidth2;
    slider2.style.transform = `translateX(${newPosition}px)`;
}
