let block = document.querySelector('.cookie');
let button = document.querySelector('.cookie__btn');

export default function cookie () {
    let timer = setTimeout(() => {
        block.style.bottom = '0px';
    }, 2000);
    button.addEventListener('click', () => {
        block.style.display = 'none';
    });
}