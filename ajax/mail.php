<?php

if (!isset($_POST['name']) || !isset($_POST['phone']) || !isset($_POST['message'])|| !isset($_POST['phone1']))
{
	die("error!");
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$phone1 = $_POST['phone1'];
$to = "atex-69@mail.ru";

$mess = sprintf("Имя: %s<br>Номер: %s<br>Сообщение: %s", $name, $phone, $phone1);
$subject = "Сообщение с сайта!";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: ClickPatent <noreply@clickpatent.ru>' ."\r\n";


$success = mail($to, $subject, $mess, $headers);
echo $success;

?>
