///////////4 ===== Сумма с помощью замыканий

//С использованием цикла - второй после арифметической прогрессии, потому что выпонит n операций сложения

function sum(a) {
	return function (b) {
		return a + b;
	};
}
console.log(sum(1)(2));


///////////5 ===== Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
	return (el) => {
		return el >= a && el <= b;
	};
}

console.log(arr.filter(inBetween(3, 6)));

function inArray(arr) {
	return (el) => {
		return arr.includes(el);
	};
}
console.log(arr.filter(inArray([1, 2, 10])));

///////////6 ===== Сортировать по полю

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
	return (el1, el2) => (el1[fieldName] > el2[fieldName] ? 1 : -1);
}

users.sort(byField("name"));
console.log(users);
users.sort(byField("age"));
console.log(users);

///////////7 ===== Армия функций

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { 
       console.log( j ); 
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10