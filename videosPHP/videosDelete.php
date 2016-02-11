<?php
include ("header.php");
$idVideos = $_GET["idVideos"];
echo $idBanners;
$objtVideos = new videosClass($idVideos, $url, $id, $comentario);
$deleteVideos = $objtVideos->eliminarVideos();
?>
<script languaje="JavaScript">
location.href='videosAdmin.php';
</script>