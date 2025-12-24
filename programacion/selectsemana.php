<?php
 require "../Login/conn.php";
 $data =$_POST['data'];
//$dec=json_decode($data);

echo "<option value=''>seleccione fecha de inicio...</option>";
	$sele="SELECT DISTINCT fechaInicio FROM programacion ORDER BY fechaInicio DESC";
$rep=mysqli_query($conexion,$sele);
if($rep){
 while($ar=mysqli_fetch_array($rep)){

 	echo "<option value='".$ar['fechaInicio']."'>".$ar['fechaInicio']."</option>";
   }
}

?>