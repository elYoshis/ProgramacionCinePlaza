<?php
require "../Login/conn.php";

$id=$_POST['id2'];
$sup="DELETE FROM distribuidor WHERE ID=".$id;

$con = mysqli_query($conexion, $sup);
if($con){
    header("location:distroingre.php");

  }else{

    echo "$id";
  }

?>