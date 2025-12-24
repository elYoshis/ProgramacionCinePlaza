<?php
 require "../Login/conn.php";
$data =$_POST['data'];
//$dec=json_decode($data);
$tam=count($data);
$ids = array();
for ($i=0; $i <$tam ; $i++) { 
	$ids[$i] = $data[$i];
}
/*$tam2=count($ids);
for ($i=0; $i <$tam2 ; $i++) { 
	echo $ids[$i];
	
}
*/
echo "<option value=''>seleccione...</option>";
for ($i=0; $i < count($ids)  ; $i++) { 
	$sele="SELECT IDpeli,nombre,duracion,formato FROM pelicula WHERE IDpeli='".$ids[$i]."' ORDER BY nombre";
$rep=mysqli_query($conexion,$sele);
if($rep){
 while($ar=mysqli_fetch_array($rep)){

 	echo "<option value='".$ar['IDpeli']."'>".$ar['nombre']." ".$ar['formato']."</option>";
   }
}
}


?>