<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php
include 'metodosBMunicipios.php';
$id = $_GET["idVideo"];
$sql = "SELECT * FROM videos where idVideos = $id";
?>
<?php

function dameURL() {
    $url = "http://" . $_SERVER['HTTP_HOST'] . ":" . $_SERVER['SERVER_PORT'] . $_SERVER['REQUEST_URI'];
    return $url;
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" type="text/css" href="CSSP/componentes.css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>El Vocero. La voz oficial de la noticia.</title>
    </head>
    <div id="encabezadoLogo">
        <?php
        include 'widget.php';
        ?>
    </div>
    <div id="wrapper" align="center">
        <?php
        include ("header.php");
        $rsVideos = ResultSet($sql);
        ?>

        <br/>
        <br/>
        <fieldset>
            <?php while ($iteracion = mysql_fetch_array($rsVideos)) { ?>
                <br/>
                <br/>
                <div style="font-size: 20px;  float: left; margin-left: 130px">
                    <?php echo $iteracion["comentario"] ?>
                </div>
                <br/>
                <br/>
                <iframe width="700" height="380" src="http://www.youtube.com/embed/<?php echo $iteracion["id"]; ?>?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>
                <div class="toolboxFacebook">
                    <div class="fb-like" data-href="<? echo dameURL() ?>" data-send="false" data-layout="button_count" data-width="110" data-show-faces="false" data-action="recommend">
                    </div>
                </div>

                <script>
                    dartAds.setParams('internet', [
                        {cat: 'internet'},
                        {scat: 'popularwebsites'},
                        {sscat: 'facebook'},
                        {art: 16988},
                        {vid: 0},
                        {ctype: 'articles'},
                        {ugc: 0},
                        {lvl: 4}
                    ]);
                </script>
                <div id="comment-feed">
                    <fb:comments href="<? echo dameURL() ?>" num_posts="50" width="615"></fb:comments>
                </div>

            <?php } ?>
            <br/>
            <br/>
            <br/>
        </fieldset>


    </div>
</body>
<div style="width:965px; margin: auto; r">
    <br/>
    <?php include 'footer.php'; ?>
</div>
</html>
