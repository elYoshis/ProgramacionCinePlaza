<?php 
require "../login/conn.php";

$infoid= array(
 $_POST['info1'],
 $_POST['info2'],
 $_POST['info3'],
$_POST['info4'],
$_POST['info5'],
$_POST['info6'],
$_POST['info7'],
$_POST['info8'],
$_POST['info9'],
$_POST['info10']

);

$semana = array(
$_POST['nro1'],
$_POST['nro2'],
$_POST['nro3'],
$_POST['nro4'],
$_POST['nro5'],
$_POST['nro6'],
$_POST['nro7'],
$_POST['nro8'],
$_POST['nro9'],
$_POST['nro10']
);


for ($i=0; $i < count($semana); $i++) { 

	echo json_encode( $semana[$i]);
	$sql= "UPDATE pelicula set nrosemana='".$semana[$i]."' WHERE IDPeli ='".$infoid[$i]."' ";

	$resp=mysqli_query($conexion,$sql);
}

?>