<?php
/* Здесь проверяется существование переменных */
//if (isset($_POST['name'])) {$phone = $_POST['name'];}
//if (isset($_POST['phone'])) {$name = $_POST['phone'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "larin2003kiril@gmail.com"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Тестовий лист для";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Тест'; //сабж
$email='TMK'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8");
?>
<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-8">
    <title>Test form</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="content">
        <form action="#" class="form" method="post">
          <div class="form__fields">
           <div class="form__input">
            <label for="email">Enter your email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required></div>
           <div class="form__input">
            <label for="name">Enter your name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required></div>
          </div>
            <div class="form__input form__input_submit">
                <input type="submit">
            </div>
        </form>
    </div>
</body>
</html>
