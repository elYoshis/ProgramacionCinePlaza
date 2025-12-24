<?php
require "../Login/conn.php";

$id=$_POST['id3'];
$sup="DELETE FROM pelicula WHERE IDpeli=".$id;

$con = mysqli_query($conexion, $sup);
if($con){
    header("location:peliingre.php");

  }else{

    echo "ERROR";
  }

?>