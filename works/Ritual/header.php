<?
    $isMainPage = false;
    //if ($_SERVER[REQUEST_URI]=="/") {
      //  $isMainPage = true;
    //};
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Шрифты -->
    <link rel="stylesheet" href="/fonts/Circle/style.css">
    <link rel="stylesheet" href="/fonts/VacansiaC/style.css">
    <link rel="stylesheet" href="/fonts/Arial/style.css">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/modal/modal.css">

    <!-- Fancybox -->
    <link rel="stylesheet" href="/css/fancybox.css">

    <!-- Slick-slider -->
    <link rel="stylesheet" href="/css/slick.css">
    <link rel="stylesheet" href="/css/slick-theme.css">

    <!-- Пользовательские стили -->
    <link rel="stylesheet" href="/css/style.css">

    <title>Document</title>
</head>
<body>

    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="header__top-logo col-12 col-lg-3 offset-lg-1">
                        <div>
                            <a href="/"><img src="/img/header_top/logo_new.png" alt=""></a>
                        </div>
                        
                    </div>
                    <div class="header__top-content col-12 col-lg-8">
                        <div class="header__top-name mb-2">Городская похоронная Служба</div>
                        <div class="header__top-info">
                            <span><a class="mb-3 number1" href="tel:+79870240101">+7 (987) 024-01-01</a></span>
                            <span style="line: height 40px;">КРУГЛОСУТОЧНЫЙ ВЫЕЗД РИТУАЛЬНОГО АГЕНТА <br>Г. УФА, УЛ. НЕВСКОГО, 10</span>
                        </div>
                        <div class="header__top-buttons row align-items-center ">
                            <div class="col-12 col-md-5 mx-auto ">
                                <a href="#feedback" data-fancybox class="feedback-agent btn callback col-12 knopka1">Вызвать агента</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="header__bottom-wrapper">
                    <img src="/img/header_bottom/lenta-2.png" alt="">
                    <ul class="nav">
                        <li class="col-3"><a href="/monument/">ПАМЯТНИКИ</a></li>
                        <li class="col-3"><a href="/funeral/">РИТУАЛЬНЫЕ УСЛУГИ</a></li>
                        <li class="col-3"><a href="/accessories/">АКСЕССУАРЫ</a></li>
                        <li class="col-3"><a href="/care/">УХОД ЗА ЗАХОРОНЕНИЯМИ</a></li>
                    </ul>
                </div>
            </div>
            <div class="burger-menu">
                    <div>
                        <div class="burger-icon">
                            <div class="burger-icon-1"></div>
                            <div class="burger-icon-2"></div>
                            <div class="burger-icon-3"></div>
                        </div>
                    </div>
                    <div class="burger-text">МЕНЮ</div>
                <div class="burger-nav">
                    <div class="burger-close">
                        <div class="burger-close-1"></div>
                        <div class="burger-close-2"></div>
                    </div>
                    <ul>
                        <li class=""><a href="/monument/">ПАМЯТНИКИ</a></li>
                        <li class=""><a href="/funeral/">РИТУАЛЬНЫЕ УСЛУГИ</a></li>
                        <li class=""><a href="/accessories/">АКСЕССУАРЫ</a></li>
                        <li class=""><a href="/care/">УХОД МОГИЛ</a></li>
                    </ul>
                    
                    <div class="footer__bottom-contacts">
                        <div class="phone"><a href="tel:++79870240101">+7(987)-024-01-01</a></div>
                        <div class="mail"><a href="mailto:ritualsalon1@bk.ru">ritualsalon1@bk.ru</a></div>
                    </div>
                    <div class="">
                    <div class="footer__bottom-social row">
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/viber.png" alt="">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/tg.png" alt="">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/whatsapp.png" alt="">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/instagram.png" alt="">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/vk.png" alt="">
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="">
                                    <img src="/img/footer/facebook.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <main <?if($isMainPage):?>style=""<?endif;?>>
    


    
