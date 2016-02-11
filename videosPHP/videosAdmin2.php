<?php include 'header.php';?>
<form name="form1" method="post" action="videosAlta.php">
  <label></label>

  <div align="center">
    <input type="submit" name="Submit" value="Agregar Video" />
  </div>
</form>
</br>
<?php
$objtVideo = new videosClass($idVideos, $url, $id, $comentario);
$rsVideos = $objtVideo->listaVideosFull();
?>

<table width="80%" border="1" cellspacing="0" cellpadding="3">
  <tr>
    <td>&nbsp;</td>
    <td>Descripci&oacute;n</td>
    <td>Modificar</td>
    <td>Eliminar</td>
  </tr>
  <?php 
  While ($rwVideos = mysql_fetch_object($rsVideos)){
      $idVideos = $rwVideos->idVideos;
  ?>
  <tr>
    <td><img src="http://img.youtube.com/vi/<?php echo $rwVideos->id?>/default.jpg"></td>
    <td><?php echo $rwVideos->comentario?></td>
    <td></td>
    <td><div align="center"><a href="videosDelete.php?idVideos=<?php echo $idVideos?>"><img src="../icons/1348165432_news-unsubscribe.png" width="22" height="22"></a></td>
  </tr>
  <?php
  }
  ?>
</table>