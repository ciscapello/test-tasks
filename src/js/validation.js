let inputs = document.querySelectorAll('.input');
let email = document.querySelector('.feedback__form-input5');
let form = document.querySelector('form');



export default function validation () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regExp.test(email.value)) {
            email.classList.add('invalid');
            return false;
        };
        let formData = [];
        inputs.forEach((input) => {
            if (!input.value) {
                input.classList.add('invalid')
            } else {
                input.classList.remove('invalid')
                form.push(`${input.name}: ${input.value}`)
            }
        })
        console.log(formData);
        if (formData.length < 7) return false;
    });
}