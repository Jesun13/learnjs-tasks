//-------------------------Фильтрация уникальных элементов массива
function unique(arr) {
  /* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O

//-------------------------Отфильтруйте анаграммы

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

//-------------------------Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // Добавить Array.from


// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");