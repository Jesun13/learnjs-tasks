/*
Получите атрибут
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
<!DOCTYPE html>
<html>
  <body>

    <div data-widget-name="menu">Choose the genre</div>

  </body>
</html>
*/

let divMenu = document.querySelector("[data-widget-name]");
console.log(divMenu);

console.log(divMenu.getAttribute("data-widget-name"));
console.log(divMenu.dataset.widgetName);
