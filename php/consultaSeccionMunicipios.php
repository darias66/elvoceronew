<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT titulo,fecha, sintesis FROM `noticias` WHERE idMenus > 1000 ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arraySeccMpios = array();

while ($row = mysql_fetch_array($result)) {
    $noticia = new stdClass();
    $noticia->titulo = utf8_encode($row["titulo"]);
    $noticia->fecha = $row["fecha"];
    $noticia->sintesis = utf8_encode($row["sintesis"]);
    
    $arraySeccMpios[] = $noticia;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccMpios);

