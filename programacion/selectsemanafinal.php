<?php
 require "../Login/conn.php";
 $data =$_POST['valor'];

/*$tam2=count($ids);
for ($i=0; $i <$tam2 ; $i++) { 
	echo $ids[$i];
	
}
*/

	$sele="SELECT DISTINCT fechaFinal FROM programacion WHERE fechaInicio='".$data."'";
$rep=mysqli_query($conexion,$sele);
if($rep){
 while($ar=mysqli_fetch_array($rep)){

 	echo $ar['fechaFinal'];
   }
}
