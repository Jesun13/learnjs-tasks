//Сумма пользовательских чисел
let a = +prompt("Введите первое число", "")
let b = +prompt("Введите второе число", "")

console.log(a + b)

//Почему 6.35.toFixed(1) == 6.3? Из-за неточности 
alert(Math.round(6.35 * 10) / 10);

//Ввод числового значения
function readNumber() {
    let num;
    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;
    return +num;
}
alert(`Число: ${readNumber()}`);

//Случайное число от min до max
function random(min, max) {
    return min + Math.random() * (max - min);
  }
//Случайное целое число от min до max

function random(min, max) {
    let randomNumber = min + Math.random() * (max + 1 - min)
   console.log(Math.floor(randomNumber));
   
  }