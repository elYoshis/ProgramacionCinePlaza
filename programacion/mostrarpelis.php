<?php
  require "../Login/conn.php";

  
  $mostrar="SELECT nrosemana, duracion, clasificacion FROM pelicula WHERE IDPeli='".$_POST["valor"]."'";

  $rep = mysqli_query($conexion,$mostrar);
  $row = $rep->fetch_Array();
  $sem = $row['nrosemana'];
  $dur = $row['duracion'];

  $clas = $row['clasificacion'];

  if($clas == "APTO PARA TODO PUBLICO"){
    $class = "TP";
  }
  if($clas == "MAYORES DE 12 AÑOS"){
    $class = ">12";
  }
  if($clas == "MAYORES DE 13 AÑOS"){
    $class = ">13";
  }
  if($clas == "MAYORES DE 14 AÑOS"){
    $class = ">14";
  }
  if($clas == "MAYORES DE 15 AÑOS"){
    $class = ">15";
  }
  if($clas == "MAYORES DE 18 AÑOS"){
    $class = ">18";
  }
  if($clas == "MAYORES DE 21 AÑOS"){
    $class = ">21";
  }

  $resutados=array($dur,$class,$sem);
  echo json_encode($resutados);
  
 
?>   