/*
Почему остаётся "aaa"?
В примере ниже вызов table.remove() удаляет таблицу из документа.

Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

Почему так происходит?
*/
console.log(table); // таблица, как и должно быть

//table.remove();

/*Браузер испавляет ошибку и выносит текст "ааа" перед таблицей,т.к. в таблице должны быть только табличные теги. 
Поэтому, когда мы удаляем таблицу, то текст "ааа", который теперь находится до нее, остается */
