<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
include 'metodosBMunicipios.php';
error_reporting(7); //Sirve para poder capturar errores y que no salgan
ini_set('display_errores', 'Off'); //Sirve para poder capturar errores y que no salgan
ini_set('display_startup_errores', 'Off'); //Sirve para poder capturar errores y que no salgan
error_reporting(0);
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" type="text/css" href="CSSP/componentes.css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>El Vocero. La voz oficial de la noticia.</title>
    </head>
    <body>
        <div id="encabezadoLogo">
            <?php include 'widget.php'; ?>
        </div>
        <div id="wrapper" align="center">
            <?php include ("header.php") ?>
            <br></br>
        </div>
        <fieldset style="background-color: white; width: 965px; margin: auto; border-radius: 10px"  />
        <div>
            <?php
            $sql = "SELECT * FROM municipios";
            $fila = ResultSet($sql);
            ?>
            <form method="POST">

                <center>
                    <label> Busqueda: </label>
                    <select name="municipio" style="padding: 3px; border-radius: 6px;">
                        <option value="" > Seleccione el Municipio</option>
                        <?php
                        while ($resultad = mysql_fetch_row($fila)) {
                            echo "<option value='" . $resultad['0'] . "'>" . $resultad['1'] . "</option>";
                        }
                        ?>
                    </select>
                    <label> Del </label>
                    <input type="date" name="fecha1" style="padding: 3px;border-radius: 6px;"/>
                    <label> Al </label>
                    <input type="date" name="fecha2" style="padding: 3px;border-radius: 6px;"/>
                    <input type="submit"value="Buscar" name="cmd" style="padding: 4px;"/>
                </center>
            </form>
        </div>
        <?php
        $indeCmb = $_POST['municipio'];
        $fecha1 = $_POST['fecha1'];
        $fecha2 = $_POST['fecha2'];
        $indeCm = $_GET["municipio"]; //Obtenemos el valor de la variable pasada por la url

        if ($indeCm != 0) {
            $datos = busqueda(1, $indeCm);
            $contadorz = contador($indeCm);
        }
        if ($indeCmb != 0 && $fecha1 != "" && $fecha2 != "") {
            if ($fecha1 > $fecha2) {
                echo '<script>alert("La primer fecha debe ser mas pequena que la segunda")</script>';
            } else {
                $datos = busquedaMultiple($indeCmb, $fecha1, $fecha2);
                $contadorz = contadorFechasMultiples($indeCmb, $fecha1, $fecha2);
            }
        } else {
            /* if ($indeCmb != 0) {
              $valor = 1;
              $datos = busqueda($valor, $indeCmb);
              $contadorz = contador($indeCmb);
              } */
            if ($fecha1 != "" && $fecha2 != "") {
                echo '<script>alert("Seleccione el municipio")</script>';
            }
        }
        ?>
        <div align="center">
            <div>
                <p style="float: right; margin-right: 50px">
                    Noticias encontradas: <?php ?> 
                    <?php
                    $numeroNoticias = mysql_num_rows($datos);
                    //     while ($resultado = mysql_fetch_array($contadorz))
                    //         echo $resultado['TOTAL'];
                    echo $numeroNoticias;
                    ?> 
                </p>
            </div>
            <table  width="90%" cellpadding="3" cellspacing="0">
                <th style="margin: auto; border-right-width: 3px; border-right-style: solid; border-right-color: white " bgcolor="#e77821" width="50px"  ><center style="font-size: 20px; color: white">Fecha</center></th>
                <th style="margin: auto; border-right-width: 3px; border-right-style: solid; border-right-color: white " bgcolor="#e77821" align="center"><center style="font-size: 20px; color: white">Titulo</center></th>
                <th style="margin: auto; border-right-width: 3px; border-right-style: solid; border-right-color: white "bgcolor="#e77821" align="center"><center style="font-size: 20px ; color: white">Resumen</center></th>
                <th style="margin: auto; border-right-width: 3px; border-right-style: solid; border-right-color: white "bgcolor="#e77821" align="center"><center style="font-size: 20px; color: white">Seccion</center></th>
<?php
$fila = 0;
while ($resultado = mysql_fetch_array($datos)) {
    ?>
                    <tr   bgcolor="<?php
                if ($fila % 2 == 0) {
                    echo '#fefcdd';
                } else {
                    echo '#ffffff';
                }
    ?>" >

                        <td style="width: 50px; border-right-width: 3px; border-right-style: solid; border-right-color: white ">
                            <center>  <?php echo $resultado['fecha']; ?> </center>
                        </td>
                        <td style="width: 150px; border-right-width: 3px; border-right-style: solid; border-right-color: white  ">
                            <center> <b><a href="index-detalle.php?idNoticias=<?php echo $resultado['idNoticias']; ?>"><?php echo $resultado['titulo']; ?> </a> </b></center>
                        </td>
                        <td style="width: 250px; border-right-width: 3px; border-right-style: solid; border-right-color: white;" >
                            <center  style="text-align: justify"> <?php echo $resultado['sintesis']; ?></center>
                        </td>
                        <td style="width: 40px" >
                            <center><?php echo $resultado['menus']; ?></center>
                        </td>
                    </tr>
    <?php
    $fila++;
}
?>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
        </fieldset>
        <div style="width:965px; margin: auto; r">
            <br/>
<?php include 'footer.php'; ?>
        </div>
    </body>
</html>

