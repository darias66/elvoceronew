<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idVideos,url,id,comentario FROM videos ORDER BY idVideos DESC
';

$result = mysql_query($query);

$arraySeccVideos = array();

while ($row = mysql_fetch_array($result)) {
    $videos = new stdClass();
    $videos->idVideos = $row["idVideos"];
    $videos->url = $row["url"];
    $videos->idd = $row["id"];
    $videos->comentario = utf8_encode($row["comentario"]);
    
    $arraySeccVideos[] = $videos;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccVideos);

