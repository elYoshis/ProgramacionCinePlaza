<?php
require "../Login/conn.php";

$id=$_POST['id2'];
$tit=$_POST['titulopeli1'];
$dur=$_POST['duracion1'];
$clas=$_POST['clasifi1'];
$dusu=$_POST['dubsub1'];
$dist=$_POST['distro1'];

if(isset($_POST['2d1'])){

    if(isset($_POST['3d1'])){

      $formato = "2D/3D";
    }else{
      $formato = "2D";
    }

  }else{
    $formato = "3D";
  }

$tit=strtoupper($tit);

$clas=strtoupper($clas);
$dusu=strtoupper($dusu);


$uptd="UPDATE pelicula SET nombre='".$tit."', formato='".$formato."',subDob='".$dusu."',duracion='".$dur."',clasificacion='".$clas."',idDistro='".$dist."' WHERE IDpeli=".$id;

$con = mysqli_query($conexion, $uptd);
if($con){
    header("location:peliingre.php");

  }else{

    echo "ERROR";
  }

?>