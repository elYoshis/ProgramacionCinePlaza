<?php
 
require "../login/conn.php";
  $nombre = $_GET['nombredistro'];
  $direccion=$_GET['dirdistro'];
  $responsable = $_GET['respdistro'];
  $telefono = $_GET['teldistro'];


  if($nombre =="" || $direccion =="" || $responsable =="" || $telefono =="")
  {
     

  }else{
      $nombre = strtoupper($nombre);
      $direccion = strtoupper($direccion);
      $responsable = strtoupper($responsable);
     $insertar = "INSERT INTO distribuidor (nombre,responsable,direccion,telefono) VALUES ('$nombre', '$direccion','$responsable','$telefono')";
  
  $sq=mysqli_query($conexion,$insertar);
 
  if($sq){
    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; url=distroingre.php'>";

  }else{

    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; url=distroingre.php'>";
  }
  }
 
?>
