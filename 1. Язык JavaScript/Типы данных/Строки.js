//Сделать первый символ заглавным
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  
console.log( ucFirst("вася") )

//Проверка на спам

function checkSpam(str) {
    str = str.toLowerCase();

 (str.includes("xxx") || str.includes("viagra")) ? true : false;

}
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//Усечение строки

function truncate(str, n) {
    return
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, n) {
    if (str.length > n) {
      return str.slice(0, n - 1) + '...'
      } else {
        return str
      }
      
    }
    
///////Выделить число

function extractCurrencyValue(str) {
    return +str.slice(1);
  }