let parentSlider = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    sliderLine = document.querySelector('.slider-line'),
    dots = document.querySelectorAll('.dot'),
    dotsLine = document.querySelector('.dots-line');

let slideIndex = 0;
let offset = 0;
sliderLine.style.left = '0px';
width = 400;

function refreshNode(index) {
    sliderLine.innerHTML = '';                                  // Очищаем sliderLine
    for (let counter = 0; counter < slides.length; counter++) { // В цикле проходимся по элементам
        sliderLine.appendChild(slides[index]);                  // начиная с индекса выбранной точки
        index = index + 1;                                      // и вставляем их в sliderLine
        if (index > slides.length - 1) index = 0;
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (dot.classList.contains('active-dot')) {
            return false;
        }
        slideIndex = index;
        document.querySelector('.active-dot').classList.remove('active-dot');
        dot.classList.add('active-dot');
        refreshNode(index);
    })
})


prev.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    document.querySelector('.active-dot').classList.remove('active-dot');
    dotsLine.children[slideIndex].classList.add('active-dot');  // Переключаем класс активности
    disableButtons();
    sliderLine.prepend(sliderLine.lastElementChild);    // Вставляем последнюю картинку вперёд
    offset = -(width);                                  // и задаем отступ, чтобы плавно на нее перейти
    let timer = setInterval(() => {
        offset = offset + 2;
        if (offset >= 0) {
            clearInterval(timer);
            enableButtons();
        };
        sliderLine.style.left = `${offset}px`;
    }, 1);
});


next.addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    document.querySelector('.active-dot').classList.remove('active-dot');
    dotsLine.children[slideIndex].classList.add('active-dot');
    disableButtons();
    let nextOffset = offset - width;
    let timer = setInterval(() => {
        offset = offset - 2;
        if (offset <= nextOffset) {
            clearInterval(timer);
            enableButtons();
            sliderLine.appendChild(sliderLine.firstElementChild); // После передвижения sliderLine
            sliderLine.style.left = 0;                            // отправляем первую картинку в конец
            offset = 0;                                           // и задаем нулевой отступ от края
        }
        sliderLine.style.left = `${offset}px`;
    }, 1);
});


function disableButtons() {   
    prev.disabled = true;                                          // блокируем кнопки
    next.disabled = true;
};


function enableButtons() {
    prev.disabled = false;
    next.disabled = false;        
};