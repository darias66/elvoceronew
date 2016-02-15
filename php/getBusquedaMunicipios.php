<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

//Verificar que venga el parametro.
if (!isset($_GET['m'])) {
    echo $error = "Falta el codigo";
    die;
}

//Desinfectar el Parametro.
$municipio = $_GET['m'];




$query = "SELECT idNoticias,titulo,fecha,imagen,sintesis,contenido FROM noticias where idmunicipio ='$municipio' ORDER BY fecha DESC";



$result = mysql_query($query);

$arrayBusqueda = array();

while ($row = mysql_fetch_array($result)) {
    $busqueda = new stdClass();
    $busqueda->id = $row["idNoticias"];
    $busqueda->imagen = $row["imagen"];
    $busqueda->titulo = utf8_encode($row["titulo"]);
    $busqueda->fecha = $row["fecha"];
    $busqueda->sintesis = utf8_encode($row["sintesis"]);
    $busqueda->contenido = utf8_encode($row["contenido"]);

    $arrayBusqueda[] = $busqueda;
}

# JSON-encode the response
echo $json_response = json_encode( $arrayBusqueda);

