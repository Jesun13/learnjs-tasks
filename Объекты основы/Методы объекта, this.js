//-------------------------Использование "this" в литерале объекта
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Будет ошибка, так как this == undefined в данном случае.

//-------------------------Создайте калькулятор

let calculator = {
    read() {
        this.a = +prompt('Введите первое число', '1');
        this.b = +prompt('Введите второе число', '1');
    },
    sum() {
        return this.a + this.b;

    },
    mul() {
        return this.a * this.b;

    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//-------------------------Цепь вызовов
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this // Добавляем this
    },
    down() {
      this.step--;
      return this //Добавляем this
    },
    showStep: function() { 
      alert( this.step );
    }
  };