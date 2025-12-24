<?php
 
require "../login/conn.php";
  


  $nombre = $_POST['titulopeli'];
  $duracion=$_POST['duracion'];
  $clasificacion = $_POST['clasifi'];

  $dubsub = $_POST['dubsub'];



  $distro = $_POST['distro'];


    if(isset($_POST['2d'])){

    if(isset($_POST['3d'])){

      $formato = "2D/3D";
    }else{
      $formato = "2D";
    }

  }else{
    $formato = "3D";
  }
  $nombre = strtoupper($nombre);
  $clasificacion = strtoupper($clasificacion);
  $distro = strtoupper($distro);
  $formato = strtoupper($formato);
  $dubsub =strtoupper($dubsub);

  if($formato=="2D/3D"){
    $consVer = "SELECT * FROM pelicula WHERE nombre = '$nombre' AND formato = '2D' OR formato = '3D'";
    $verifi = mysqli_query($conexion,$consVer);
  }else{
    $consVer = "SELECT * FROM pelicula WHERE nombre = '$nombre' AND formato = '$formato'";
    $verifi = mysqli_query($conexion,$consVer);
  }
  
  $datos= mysqli_fetch_array($verifi);
  $rows = mysqli_num_rows($verifi);
  if($rows > 0){
    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; url=peliingre.php'><script type='text/javascript'>alert('La pelicula ya existe');</script>";
    
  }else{
    if($nombre =="" || $duracion =="" || $clasificacion =="")
  {
     

  }else{
      
      if($formato=="2D/3D"){
          $insertar = "INSERT INTO pelicula (nombre, formato, subDob, duracion, clasificacion, idDistro) VALUES ('$nombre', '2D','$dubsub','$duracion','$clasificacion','$distro')";
          $insertar2 = "INSERT INTO pelicula (nombre, formato, subDob, duracion, clasificacion, idDistro) VALUES ('$nombre', '3D','$dubsub','$duracion','$clasificacion','$distro')";
          $sq=mysqli_query($conexion,$insertar);
          $sq1=mysqli_query($conexion,$insertar2);

      }else{
        $insertar = "INSERT INTO pelicula (nombre, formato, subDob, duracion, clasificacion, idDistro) VALUES ('$nombre', '$formato','$dubsub','$duracion','$clasificacion','$distro')";
        $sq=mysqli_query($conexion,$insertar);
      }
      
  
  
 
  if($sq){
    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; url=peliingre.php'>";

  }else{

    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; url=peliingre.php'>";
  }
  }
  }

  
 
?>
