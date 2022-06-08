<?
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $to = 'artembikbaev98@gmail.com';
    $message = 'Урааа!';
    if(mail($to, 'My Subject', $message)) {
        print_r('Ваше заявка успешно отправлена');
    } else {
        print_r('Произошла неведома ошибка');
    };
?>