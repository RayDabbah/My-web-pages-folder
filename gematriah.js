let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
let input2 = document.getElementById('input2');
let result2 = document.getElementById('result2');
const secondInput = document.getElementById('second-input');
const compareButton = document.getElementById('compare');
const resultDifference = document.getElementById("result-difference");
const nav = document.querySelector('nav');
const regular = document.getElementById('regular');
const atBash = document.getElementById('at-bash');
const misK = document.getElementById('mis-k');
let toggleDisplay = false;
let misparK = {};
const letters = {
    א: 1, ב: 2, ג: 3, ד: 4, ה: 5, ו: 6, ז: 7, ח: 8, ט: 9, י: 10, כ: 20, ל: 30, מ: 40, נ: 50, ס: 60, ע: 70, פ: 80, צ: 90, ק: 100, ר: 200, ש: 300, ת: 400,
}

//  מספר קטן


let misparNum = Object.values(letters).map(letter => {
    return parseInt(String(letter).split('').filter(notZero => notZero != '0'))

})
misparNum.forEach((number, i) => {
    return misparK[Object.keys(letters)[i]] = misparNum[i];
});

const calcAtBash = {};
const reverse = Object.values(letters).reverse();
reverse.forEach((number, i) => {
    return calcAtBash[Object.keys(letters)[i]] = reverse[i];
});
// console.log(calcAtBash);


let calculateLetters = letters;
const endLetters = {}
endLetters.ם = calculateLetters.מ;
endLetters.ץ = calculateLetters.צ;
endLetters.ף = calculateLetters.פ;
endLetters.ך = calculateLetters.כ;
endLetters.ן = calculateLetters.נ;

nav.addEventListener('click', () => {
    if (misK.checked == true) {
        calculateLetters = misparK;
    } if (regular.checked == true) {
        calculateLetters = letters;
    } if (atBash.checked == true) {
        calculateLetters = calcAtBash;
    }
    endLetters.ם = calculateLetters.מ;
    endLetters.ץ = calculateLetters.צ;
    endLetters.ף = calculateLetters.פ;
    endLetters.ך = calculateLetters.כ;
    endLetters.ן = calculateLetters.נ;
    calculate(input1, result1, 'input');
    result1.innerHTML = calculateSum(input1);
    result2.innerHTML = calculateSum(input2);
    difference();
})
calculate(input1, result1, 'input');
calculate(input2, result2, 'input');
input1.addEventListener('input', difference);
input2.addEventListener('input', difference);
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
	    result1.style.color = 'white';
        toggleDisplay = false;
    }
});

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

function difference() {
   if(toggleDisplay == false) return; 
	if (toggleDisplay == true) resultDifference.textContent = Math.abs(result1.textContent - result2.textContent);
    if (toggleDisplay == false) resultDifference.textContent = '';
    if ((result1.textContent == result2.textContent) && result1.textContent != "0") {
        resultDifference.innerHTML = '&#10004';
        resultDifference.style.color = 'green';
        resultDifference.style.fontSize = '4em';
        result1.style.color = 'green';
        result2.style.color = 'green';
    }
    if (resultDifference.textContent == "0") {
        resultDifference.textContent = '';
    }
    if (parseInt(result1.textContent) > parseInt(result2.textContent)) {
        resultDifference.style.color = 'red';
        resultDifference.style.fontSize = '1.7em';
        result1.style.color = 'green';
        result2.style.color = 'red';
    }
    if (parseInt(result2.textContent) > parseInt(result1.textContent)) {
        resultDifference.style.color = 'red';
        resultDifference.style.fontSize = '1.7em';
        result1.style.color = 'red';
        result2.style.color = 'green';
    }
}
