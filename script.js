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

dots.forEach((dot, index) => {
    dot.addEventListener('click', async () => {
        if (dot.classList.contains('active-dot')) {
            return false;
        }

        if (index < slideIndex) {                       // в зависимости от кликнутой точки формируем 
            let counter = slideIndex - index;           // количество раз, которое нужно перелистнуть
            turnBack(counter);                          // слайдер и передаем это число в функцию
        }

        if (index > slideIndex) {
            let counter = index - slideIndex;
            turnNext(counter);
        }
    })
})

function turnBack (i = 1) {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    document.querySelector('.active-dot').classList.remove('active-dot');
    dotsLine.children[slideIndex].classList.add('active-dot');  // Переключаем класс активности
    disableButtons();
    sliderLine.prepend(sliderLine.lastElementChild);    // Вставляем последнюю картинку вперёд
    offset = -(width);                               // и задаем отступ, чтобы плавно на нее перейти                               
    let timer = setInterval(() => {
        offset = offset + 4;
        if (offset >= 0) {
            clearInterval(timer);
            enableButtons();
        };
        sliderLine.style.left = `${offset}px`;
    }, 2);
    i = i - 1;
    if (i) {                                // рекурсивно вызываем функцию переданное количество раз
        turnBack(i);                        // Если число не передали, листаем один раз
    }
}

function turnNext (i = 1) {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    document.querySelector('.active-dot').classList.remove('active-dot');
    dotsLine.children[slideIndex].classList.add('active-dot');
    disableButtons();
    let nextOffset = offset - width;
    let timer = setInterval(() => {
        offset = offset - 4;
        if (offset <= nextOffset) {
            clearInterval(timer);
            enableButtons();
            sliderLine.appendChild(sliderLine.firstElementChild); // После передвижения sliderLine
            sliderLine.style.left = 0;                            // отправляем первую картинку в конец
            offset = 0;                                           // и задаем нулевой отступ от края
        }
        sliderLine.style.left = `${offset}px`;
    }, 1);
    i = i - 1;
    if (i) {
        turnNext(i);
    }
}


prev.addEventListener('click', turnBack);
next.addEventListener('click', turnNext);


function disableButtons() {   
    prev.disabled = true;                                          // блокируем кнопки
    next.disabled = true;
};


function enableButtons() {
    prev.disabled = false;
    next.disabled = false;        
};