/*
В чём отличие CSS-свойств width и clientWidth

В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

Укажите хотя бы 3 отличия, лучше – больше.
*/

/*
getComputedStyle(elem).width вернет строку "значение рх"
elem.clientWidth вернет только число

clientWidth -это ширина внутренней области элемента вместе с паддингами, если они есть.
getComputedStyle(elem).width может вернуть  ширину из CSS  без учета паддингов, если свойство box-sizing: content-box

Если у элемента свойствоо width: auto, то getComputedStyle вернет не число, а auto
elem.clientWidth вернет  число

При наличии полосы прокрутки clientWidth вернет ширину за вычетом ширины полосы прокрутки
*/
