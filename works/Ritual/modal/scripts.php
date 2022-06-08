<?
use Bitrix\Main\Page\Asset;
//echo '<script src="'.str_replace($_SERVER["DOCUMENT_ROOT"], "", __DIR__).'/modal.js"></script>';
Asset::getInstance()->addCss(str_replace($_SERVER["DOCUMENT_ROOT"], "", __DIR__) . '/modal.css');
Asset::getInstance()->addJs(str_replace($_SERVER["DOCUMENT_ROOT"], "", __DIR__) . '/modal.js');

function ShowModal($text = ""){
    echo "<script>ShowModal('" . $text . "');</script>";
}
?>