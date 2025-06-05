import { abetka } from './obj.js';

function makeLatynka(kyrylka) {
    let result = '';
    for (let i = 0; i < kyrylka.length; i++) {
        if (!abetka[kyrylka[i].toLowerCase()]) {
            result += kyrylka[i];
        } else {
            switch (kyrylka[i]) {
                case kyrylka[i].toLowerCase():
                    result += abetka[kyrylka[i]];
                    break;
                case 'Я':
                    result += 'Ja';
                    break;
                case 'Ї':
                    result += 'Ji';
                    break;
                case 'Є':
                    result += 'Je';
                    break;
                case 'Щ':
                    result += 'Šč';
                    break;
                case kyrylka[i].toUpperCase():
                    result += abetka[kyrylka[i].toLowerCase()].toUpperCase();
                    break;
            }
        }
    }
    return result;
}

const btn = document.getElementById('translate');
btn.addEventListener('click', function () {
    let [input, output] = document.querySelectorAll('.textbox');
    output.value = makeLatynka(input.value);
    output.focus();
});

const modal = document.querySelector('.modal');
const info = document.querySelector('.info');
const btnClose = document.querySelector('.close');
const example = document.querySelectorAll('.example');
const textBox = document.querySelector('.textbox');

example.forEach(item => {
    item.addEventListener('click', event => {
        const text = event.target.innerText;
        modal.style.opacity = '0';
        const timeOut = setTimeout(
            () => (modal.style.visibility = 'hidden'),
            500
        );
        textBox.value = text;
        btn.click();
    });
});

info.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
});

btnClose.addEventListener('click', () => {
    modal.style.opacity = '0';
    const timeOut = setTimeout(() => (modal.style.visibility = 'hidden'), 500);
});
