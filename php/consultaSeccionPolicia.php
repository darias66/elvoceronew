
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 4 ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arraySeccPolicia = array();

while ($row = mysql_fetch_array($result)) {
    $policia = new stdClass();
    $policia->imagen = $row["imagen"];
    $policia->title = utf8_encode($row["titulo"]);
    $policia->fecha = $row["fecha"];
    $policia->sintesis = utf8_encode($row["sintesis"]);
    
    $arraySeccPolicia[] = $policia;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccPolicia);

