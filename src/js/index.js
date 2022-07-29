import validation from './validation';
import cookie from './cookie';
import phoneAnimation from './phone';
import '../scss/index.scss';


document.addEventListener('DOMContentLoaded', () => {

    validation();
    cookie();
    phoneAnimation();
})
