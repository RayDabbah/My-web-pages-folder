let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
let input2 = document.getElementById('input2');
let result2 = document.getElementById('result2');
const secondInput = document.getElementById('second-input');
const compareButton = document.getElementById('compare');
const resultDifference = document.getElementById("result-difference");
let toggleDisplay = false;
const letters = {
    א: 1, ב: 2, ג: 3, ד: 4, ה: 5, ו: 6, ז: 7, ח: 8, ט: 9, י: 10, כ: 20, ל: 30, מ: 40, נ: 50, ס: 60, ע: 70, פ: 80, צ: 90, ק: 100, ר: 200, ש: 300, ת: 400,
}
let calculateLetters = letters;
const endLetters = {
    ן: calculateLetters.נ,
    ם: calculateLetters.מ,
    ץ: calculateLetters.צ,
    ף: calculateLetters.פ,
    ך: calculateLetters.כ,
}
calculate(input1, result1, 'input');
calculate(input2, result2, 'input');
compareButton.addEventListener('click', () => {
    if (toggleDisplay == false) {
        secondInput.style.display = 'block';
        resultDifference.style.display = 'block';
        compareButton.textContent = 'Hide compare input'
        toggleDisplay = true;
    } else {
        resultDifference.style.display = 'none';
        secondInput.style.display = 'none';
        compareButton.textContent = 'Compare with another גמטריא!'
        toggleDisplay = false;
    }
});

input1.addEventListener('input', difference);
input2.addEventListener('input', difference);
// functions

function calculate(input, result, event) {
    input.addEventListener(event, () => {
        result.innerHTML = calculateSum(input);
    });

}
function calculateSum(input) {
    return input.value.split('').reduce((sum, letter) => {
        if (!(endLetters[letter] || calculateLetters[letter])) return sum + 0;
        let inputLetter;
        endLetters[letter] ? inputLetter = endLetters[letter] : inputLetter = calculateLetters[letter];
        return sum + inputLetter;
    }, 0)
}

function difference(){
    if(toggleDisplay== true) resultDifference.textContent = Math.abs(result1.textContent - result2.textContent);
    if(toggleDisplay == false) resultDifference.textContent = '';
    if((result1.textContent == result2.textContent) && !result1.textContent == 0){
        resultDifference.innerHTML = '&#10004';
        resultDifference.style.color = 'green';
        resultDifference.style.fontSize = '4em';
        result1.style.color = 'green';
        result2.style.color = 'green';
    }
    if(parseInt(result1.textContent)> parseInt(result2.textContent)){
        resultDifference.style.color = 'red';
        resultDifference.style.fontSize = '1.7em';
        result1.style.color = 'green';
        result2.style.color = 'red';
    }
    if(parseInt(result2.textContent)> parseInt(result1.textContent)){
        resultDifference.style.color = 'red';
        resultDifference.style.fontSize = '1.7em';
        result1.style.color = 'red';
        result2.style.color = 'green';
    }
}
