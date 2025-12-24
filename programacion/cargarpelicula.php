<?php 
require "../login/conn.php";
//Fechas
$finicio=$_POST['fi'];  
$ffinal=$_POST['ff'];

$consu= "SELECT DISTINCT  p.IDPeli, p.nombre,p.formato  FROM pelicula p, peliprogra pp, programacion prg WHERE p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg  AND prg.fechaInicio = '".$finicio."' AND prg.fechaFinal = '".$ffinal."' ORDER BY p.IDPeli DESC " ;

echo "<option value=''>seleccione...</option>";

$datos = array();
if ($resultado= mysqli_query($conexion,$consu)) {
	while ($row = mysqli_fetch_array($resultado)) {
		if($row['nombre']=="seleccione..."){
			echo "<option value='".$row['IDPeli']."'>".$row['nombre']."</option>";
		}else{
			
			echo "<option value='".$row['IDPeli']."'>".$row['nombre']." ".$row['formato']."</option>";
		}
		
	}
}


?>