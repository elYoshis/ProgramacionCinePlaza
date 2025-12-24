<?php
require "../Login/conn.php";


$sele="SELECT duracion FROM pelicula WHERE IDPeli='".$_POST["valor"]."'";

$rep = mysqli_query($conexion,$sele);
$row = $rep->fetch_Array();
$minutos = $row['duracion'];
echo $minutos;
//$videoDuration = $minutos;
     // echo date("i:s", $videoDuration);


?>