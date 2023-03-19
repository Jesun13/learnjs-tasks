/*
Что содержит свойство nodeType?
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
*/

//Когда скрипт выполняется, он будет считать последним элементом сам себя, потому что все, что ниже не загрузилось.
//Поэтому nodeType будет 1, т.к. script это элемент.
