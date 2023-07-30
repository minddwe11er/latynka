import {abetka} from './obj.js';

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