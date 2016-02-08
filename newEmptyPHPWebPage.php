<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
//        $pcoriente = array(ingeniero => "David", tecnico => "Efren", Diseñador => "Anita");
//
//        foreach ($pcoriente as $pco => $value) {
//            echo "El" . "   " . $pco . "   " . "es" . "     " . $value;
//            echo "<br>";
//        }
//        $nombre = "Ana";
//        $Equipo = "Computadora";
//        $Impresora = "Brother modelo 7055w";
//        $arreglo = array(1, 2, 3, "oficina", $nombre, "María", "Lupita", $Equipo, );
//
//        $longitud = count($arreglo);
//
//        for ($i = 0; $i < $longitud; $i++) {
//            echo $arreglo[$i];
//            echo "<br>";
//        }
        ?>

        <?php
        $nombre = "Ana";
        $Equipo = "Computadora";
        $Impresora = "Brother modelo 7055w";
        $arreglo = array(1, 2, 3, "oficina", $nombre, "María", "oficina", "Lupita", $Equipo, $Impresora, 1, 2, 3, "oficina", $nombre, "María", "Lupita", $Equipo, $Impresora, 1, 2, 3, "oficina", "oficina", $nombre, "María", "Lupita", $Equipo, $Impresora, "oficina");
        $longitud = count($arreglo);
        $contador = 0;
        $contOfi = 0;

        while ($contador < $longitud) {
            if ($arreglo[$contador] == "oficina") {
                echo "Es la posicion:" . "   " . $contador . "   sí se encuentra" . $arreglo[$contador];

                echo "<br>";
                $contOfi = $contOfi + 1;
            }
//            else{
//                echo "Es la posicion:". "   ". $contador . "     No se encuentra el nombre";
//                echo "<br>";
//            }

            $contador = $contador + 1;
        }

        echo "el número de Oficinas en el arreglo son:" . $contOfi;
        ?>

        <?php
        $t = date("d");

        if ($t < "10") {
            echo "Have a good day!";
        }else{
            echo "No tengas un buen dia";
        }
        
        ?>

    </body>
</html>
