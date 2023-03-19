/*
Тег в комментарии
Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>
*/

body.innerHTML = "<!--" + body.tagName + "-->"; //Присваиваем в body комментари с текстом BODY
alert(body.firstChild.data); //Выводит BODY, т.е. текстовове содержимое комментария
