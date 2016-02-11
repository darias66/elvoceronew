<?php include("index.php")?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
    

<?php 
$url = $_POST['url'];
$id = $_POST['id'];
$comentario = $_POST['comentario'];
if (empty($id)){
    ?>
    <div class="container"> 
        <br/>  
        <div align="center">
            <p>   <a  href="videosAlta.php"><img src="img/news.png" class="img-rounded"></a> </p> 
        </div>
<form name="form1" method="post" action="">
    <div class=" form-group">
        
    <br/>
    <br/>
    <p><label>Introduce El URL: </label>
       
  </p>
    </div>
    <div class=" form-group">
         <label><input class="form-control"name="url" type="text" size="50"></label> 
        
    </div>
   
    <div class=" form-group">
        <p><label>Introduce el ID:</label>
         
  </p> 
    </div>
    <div class=" form-group">
        <label><input class="form-control"type="text" name="id"></label>
    </div>
  
  <div class=" form-group">
      <p><label>Introduce la Descripci&oacute;n:</label> 
        
  </p>
  </div>
    <div class=" form-group">
         <textarea class="form-control" name="comentario" cols="10" rows=""></textarea> 
    </div>
  <p>
      <input type="submit" class="btn badge-info" name="Submit" value="Guardar">
  </p>
</form>
               
    </div>
<?php } else {
    $objtVideo = new videosClass($idVideos, $url, $id, $comentario);
    $objtVideo->altaVideos();

    echo 'Agregado con Exito';?>
        <p class="help-block"><a href="videosAdmin.php">Regresar a Noticias</a></p>
    
    
<?php }
?>
<p>&nbsp; </p>
</body>
</html>
