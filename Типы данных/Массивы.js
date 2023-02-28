/////Операции с массивами

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

///////Сумма введённых чисел

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let number = prompt("Введите число", 0);
      if (number === "" || number === null || !isFinite(number)) break;
  
      numbers.push(+number);
    }
  
    let sum = 0;
   return numbers.reduce((acc, cur) => acc + cur, sum);
    
  }
  
  alert( sumInput() );

  ///////Подмассив наибольшей суммы

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }
  