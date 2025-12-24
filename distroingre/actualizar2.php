<?php
require "../Login/conn.php";

$id=$_POST['id1'];
$nom=$_POST['nombredistro1'];
$dir=$_POST['dirdistro1'];
$resp=$_POST['respdistro1'];
$tele=$_POST['teldistro1'];

$nom=strtoupper($nom);
$dir=strtoupper($dir);
$resp=strtoupper($resp);

$uptd="UPDATE distribuidor SET nombre='".$nom."', responsable='".$resp."',direccion='".$dir."',telefono='".$tele."' WHERE ID=".$id;

$con = mysqli_query($conexion, $uptd);
if($con){
    header("location:distroingre.php");

  }else{

    echo "$id";
  }

?>