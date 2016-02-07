<?php

// Incluir la clase de base de datos
include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error="";

// Verificar que venga el parametro
if (!isset($_GET['id'])) {
	echo $error="Falta el código";
	die;
}
// Desinfectar el parametro
$codigo = htmlentities($_GET['id']);


$query = 'SELECT idNoticias,fecha,titulo,imagen,contenido FROM noticias WHERE idNoticias ='.$codigo;

$result = mysql_query($query);

$arrayNoticia = array();

while ($row = mysql_fetch_array($result)) {
    $nota = new stdClass();
    $nota->id = $row["idNoticias"];
    $nota->imagen = $row["imagen"];
    $nota->title = utf8_encode($row["titulo"]);
    $nota->fecha = $row["fecha"];
    $nota->sintesis = utf8_encode($row["sintesis"]);
    
    $arrayNoticia[] = $nota;
}

# JSON-encode the response
echo $json_response = json_encode($arrayNoticia);

