<?php

function ResultSet($sql) {
    $resultadoy = mysql_query($sql);
    return $resultadoy;
}

function busqueda($valor, $datoObtenido, $fecha2) {
    if ($valor == 1) {
        $sql = "select noticias.*, menusMunicipios.* from noticias, menusMunicipios where idmunicipio = $datoObtenido and  noticias.idMenus = menusMunicipios.idMenus order by fecha desc";
        $resultadoy = mysql_query($sql);
    }
    /*   if ($valor == 2) {
      //$sql = "SELECT noticias.*, menusmunicipios.* FROM noticias, menusmunicipios where fecha='$datoObtenido' and  noticias.idMenus = menusmunicipios.idMenus";
      $sql = "SELECT noticias.*, menusmunicipios.* FROM noticias, menusmunicipios where fecha between '$datoObtenido' and '$fecha2' and  noticias.idMenus = menusmunicipios.idMenus order by fecha desc";
      $resultadoy = mysql_query($sql, Conectarse());
      } */
    return $resultadoy;
}

function busquedaMultiple($valor, $fecha1, $fecha2) {
    $sql = "SELECT noticias.*, menusMunicipios.* FROM  noticias, menusMunicipios where idmunicipio=$valor and  fecha between '$fecha1' and '$fecha2' and noticias.idMenus = menusMunicipios.idMenus order by fecha desc";
    $resultadoy = mysql_query($sql);
    return $resultadoy;
}

function contador($valorMunicipio) {
    $sql = " select count(*)as TOTAL from noticias where idmunicipio = $valorMunicipio ";
    $result = mysql_query($sql);
    return $result;
}

function contadorFechas($fecha1, $fecha2) {
    $sql = "SELECT count(*)as TOTAL FROM `noticias` where fecha between '$fecha1' and '$fecha2'";
    $result = mysql_query($sql);
    return $result;
}

function contadorFechasMultiples($municipio, $fecha1, $fecha2) {
    $sql = " SELECT count(*)as TOTAL FROM  noticias where idmunicipio=$municipio and  fecha between '$fecha1' and '$fecha2'";
    $result = mysql_query($sql);
    return $result;
}

?>
