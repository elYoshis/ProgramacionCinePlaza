<?php 
require "../login/conn.php";
//Fechas
$finicio=$_POST['fi'];  
$ffinal=$_POST['ff'];

$consu= "SELECT DISTINCT p.IDPeli, p.nombre,prg.hora, prg.horafin, p.formato, p.duracion,prg.IDProg,prg.tep  FROM pelicula p, peliprogra pp, programacion prg WHERE p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg AND prg.NroSala = 3 AND prg.fechaInicio = '".$finicio."' AND prg.fechaFinal = '".$ffinal."' ORDER BY prg.hora " ;

$datos = array();
if ($resultado= mysqli_query($conexion,$consu)) {
	while ($row = mysqli_fetch_assoc($resultado)) {
		$datos[]= $row;
	}
}
echo json_encode($datos);

?>