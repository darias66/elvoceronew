<?php 
$objtVideo = new videosClass($idVideos, $url, $id, $comentario);
$rsVideos = $objtVideo->listaVideos();
?>
<table width="100%" border="0" cellspacing="0" cellpadding="3">
  <tr bgcolor="#ac0909"> 
      <td colspan="2"><div align="left"><font color="#FFFFFF"><strong>VIDEOS <a href="index-videos.php">[+]</a>   </strong></font></div></td>
  </tr>
  <?php while ($rwVideos = mysql_fetch_object($rsVideos)){?>
  <tr> 
      <td><a href="verVideos.php?idVideo=<?php echo $rwVideos->idVideos;?>"><img src="http://img.youtube.com/vi/<?php echo $rwVideos->id?>/default.jpg"></a></td>
    <td><?php echo $rwVideos->comentario?></td>
  </tr>
  <?php }?>
</table>

