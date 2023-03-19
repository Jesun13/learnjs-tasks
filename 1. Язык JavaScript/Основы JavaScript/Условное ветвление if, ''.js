//-------------------------Название JavaScript
let officalName = prompt('Какое «официальное» название JavaScript?', '')

if (officalName === 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? “ECMAScript”!')

}
//-------------------------Покажите знак числа
let number = prompt('Какое «официальное» название JavaScript?', '')

if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

//-------------------------Перепишите 'if' в '?'

result = (a + b < 4) ? 'Мало' : 'Много'

//-------------------------Перепишите 'if..else' в '?'
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';