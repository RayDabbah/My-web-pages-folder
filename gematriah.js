let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
const letters = {
    א: 1, ב: 2, ג: 3, ד: 4, ה: 5, ו: 6, ז: 7, ח: 8, ט: 9, י: 10, כ: 20, ל: 30, מ: 40, נ: 50, ס: 60, ע: 70, פ: 80, צ: 90, ק: 100, ר: 200, ש: 300, ת: 400,
}
const endLetters = {
    ן: letters.נ,
    ם: letters.מ,
    ץ: letters.צ,
    ף: letters.פ,
    ך: letters.כ,

}
// console.log(ך)

input1.addEventListener('input', ()=>{
    result1.innerHTML =   calculateSum();
} );
function calculateSum() {
    return input1.value.split('').reduce((sum, letter) => {
        if(!(endLetters[letter] || letters[letter])) return sum + 0;
        let inputLetter;
        endLetters[letter] ? inputLetter = endLetters[letter] : inputLetter = letters[letter];
        return sum + inputLetter;
    }, 0)
}