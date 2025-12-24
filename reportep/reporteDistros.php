<?php

require '../fpdf/fpdf.php';
require '../Login/conn.php';

$fi=$_POST['f1'];
$ff=$_POST['f2'];


$sql = "SELECT prg.Nrosala, p.nombre AS pnombre, p.duracion, p.formato, p.clasificacion, prg.hora, prg.horafin, d.nombre AS dnombre, p.nrosemana FROM pelicula p,distribuidor d, peliprogra pp, programacion prg WHERE p.idDistro=d.ID AND p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg AND prg.fechainicio = '".$fi."' AND prg.fechafinal = '".$ff."' ORDER BY prg.Nrosala,prg.hora";

$resultado = mysqli_query($conexion,$sql);
$fii = date_create_from_format('Y-m-d', $fi);
$fff = date_create_from_format('Y-m-d', $ff);

$fiii = date_format($fii, "d-m-Y");
$ffff = date_format($fff, "d-m-Y");


$pdf = new FPDF('L','mm','letter');
$pdf -> AddPage();
$pdf -> Image('LogoCine2.jpg',100,10,100,50);

$pdf -> SetFont('Arial','B',13);
$pdf -> SetFillColor(232,232,232);
$pdf -> SetXY(100,60);
$pdf -> Cell(100,6,"Programacion Del ".$fiii." al ".$ffff,0,0,'C',0);

$pdf -> SetXY(50,70);
$pdf -> Cell(120,6,"Pelicula",1,0,'C',1);
$pdf -> Cell(30,6,"Sala",1,0,'C',1);
$pdf -> Cell(30,6,"Hora",1,1,'C',1);
while($row = mysqli_fetch_array($resultado)){
$pdf -> SetX(50);
$pdf -> Cell(120,6,$row['pnombre'],1,0,'L',0);
$pdf -> Cell(30,6,$row['Nrosala'],1,0,'C',0);
$pdf -> Cell(30,6,$row['hora'],1,1,'C',0);

}
$pdf -> OutPut();


?>