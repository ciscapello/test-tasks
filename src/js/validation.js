let inputs = document.querySelectorAll('.input');
let form = document.querySelector('form');



export default function validation () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let form = [];
        inputs.forEach((input) => {
            if (!input.value) {
                input.classList.add('invalid')
            } else {
                input.classList.remove('invalid')
                form.push(`${input.name}: ${input.value}`)
            }
        })
        console.log(form);
        if (form.length < 7) return false;
    });
}