<?php
$objtVideos = new videosClass($idVideos, $url, $id, $comentario);
$rsVideos = $objtVideos->listaVideosFull();
?>
<div class="marco">
<div class="cuerpo">
<div class = "columna_municipios">
    <table width="100%" border="0" cellspacing="0" cellpadding="3">
  <tr bgcolor="#ac0909"> 
    <td colspan="2"><div align="left"><font color="#FFFFFF"><strong>VIDEOS</strong></font></div></td>
  </tr>
</table>
   <?php    
   while ($rwVideos = mysql_fetch_object($rsVideos)){;?>
        <table width="90%" border="0" cellspacing="0" cellpadding="3" align="center">
            <tr >
                <td colspan="2"><?php echo $rwNoticias->menus;?></td>
            </tr>
            <tr>
                <td><a href="verVideos.php?idVideo=<?php echo $rwVideos->idVideos;?>" ><img src="http://img.youtube.com/vi/<?php echo $rwVideos->id?>/default.jpg"></a></td>
                <td>
                    <div id="titulos2">
                    <?php echo $rwVideos->comentario?><br/>
                    <?php //echo $idmunicipio."<br>";?>
                       
                    </div>
                    <div id="sintesis">
                    </div>
                </td>
            </tr>
        </table>
 
   <?php
   }?>
 </div>
<div class = "columna_derecha">
<?php include 'publicidad.php';?>
</div>
<div class = "columna_derecha_inf">
 <?php 
        include ("facebook.php");
?>
</div>
 </div>
</div>