/*
Добавьте пункт к выпадающему списку
Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>
Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.
*/
const listGenres = document.getElementById("genres");
// const classicItem = document.createElement("option");
// classicItem.value = "classic";
// classicItem.selected = true;
// classicItem.textContent = "Классика";

// listGenres.append(classicItem);

// 1)
let selectedOption = listGenres.options[listGenres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

// 2)
let newOption = new Option("Классика", "classic");
listGenres.append(newOption);

// 3)
newOption.selected = true;
