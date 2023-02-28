//-------------------------Привет, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//-------------------------Проверка на пустоту
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
//-------------------------Объекты-константы?
const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete"; // Будет работать, внтури объекта можно изменять при const

//-------------------------Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries) {
    sum += salaries[key];

}
console.log(sum);

//-------------------------Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);

// после вызова функции

let menu = {
    width: 400,
    height: 600,
    title: "My menu"
};