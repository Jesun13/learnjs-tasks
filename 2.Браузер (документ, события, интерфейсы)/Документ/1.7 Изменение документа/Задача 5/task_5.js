/*
Создайте дерево из объекта
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

Выберите один из двух способов решения этой задачи:
1. Создать строку, а затем присвоить через container.innerHTML.
2. Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

*/
let data = {
	Рыбы: {
		форель: {},
		лосось: {},
	},

	Деревья: {
		Огромные: {
			секвойя: {},
			дуб: {},
		},
		Цветковые: {
			яблоня: {},
			магнолия: {},
		},
	},
};

let container = document.getElementById("container");

function createTree(container, obj) {
	container.innerHTML = getDataItems(obj);
}

function getDataItems(obj) {
	let li = "";
	let ul = "";
	for (let key in obj) {
		li += `<li>${key}${getDataItems(obj[key])}</li>`;
		console.log(li);
	}
	if (li) {
		ul += `<ul>${li}</ul>`;
		console.log(ul);
	}
	return ul;
}

createTree(container, data);

function createTree2(container, data) {
	container.append(getDataItems2(data));
}

function getDataItems2(obj) {
	if (!Object.keys(obj).length) return;
	let ul = document.createElement("ul");
	for (let key in obj) {
		let li = document.createElement("li");
		li.innerHTML = key;

		let childrenUl = getDataItems2(obj[key]);
		if (childrenUl) {
			li.append(childrenUl);
		}

		ul.append(li);
	}

	return ul;
}
createTree2(container, data);
