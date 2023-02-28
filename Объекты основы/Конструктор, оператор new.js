//-------------------------Две функции - один объект
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b );

// Возможно, пример кода:

let obj = {};
function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );

//-------------------------Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {

    this.read = function() {
      this.a = +prompt('Введите первое число', '1');
      this.b = +prompt('Введите второе число', '1');
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//-------------------------Создайте new Accumulator

function Accumulator(startValue) {
    this.value = startValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);