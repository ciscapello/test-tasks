let img = document.querySelector('.mission__about-phone');
let block = document.querySelector('.mission__about-content');
let container = document.querySelector('.mission');

export default function phoneAnimation () {
    if (window.screen.width < 900) {
        return false
    }

    let offset = container.getBoundingClientRect().top + document.documentElement.scrollTop;
    let contOffset = container.offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (container.getBoundingClientRect().top < 0) {
            img.style.animationName = 'phone';
            block.style.animationName = 'text';
            
        }
    });
}