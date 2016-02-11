<?php include 'index.php';?>
<form name="form1" method="post" action="videosAlta.php">
  <label></label>

  <div align="center">
<!--    <input type="submit" name="Submit" value="Nuevo Video" />-->
      <p>
        <button type="submit" class="btn btn-info">Nuevo Video</button>
    </p>
  </div>
</form>
<br/>
<?php
$objtVideo = new videosClass($idVideos, $url, $id, $comentario);
$rsVideos = $objtVideo->listaVideosFull();
?>
<table class=" info table table-bordered table-hover " >
    
    <tr class="active">
        <td><b>Videos&nbsp;</b></td>
    <td><b>Descripci&oacute;n</b></td>
   
    <td><b>Eliminar</b></td>
  </tr>
  <?php 
  While ($rwVideos = mysql_fetch_object($rsVideos)){
      $idVideos = $rwVideos->idVideos;
  ?>
  <tr >
    <td><img src="http://img.youtube.com/vi/<?php echo $rwVideos->id?>/default.jpg"width="70" class="img-rounded" border-radius:6px></td>
    <td><?php echo $rwVideos->comentario?></td>
  
    <td><div align="center"><a href="videosDelete.php?idVideos=<?php echo $idVideos?>"><img src="../icons/1348165432_news-unsubscribe.png" width="22" height="22"></a></td>
  </tr>
  <?php
  }
  ?>
</table>