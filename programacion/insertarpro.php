<?php 
require "../login/conn.php";
//Fechas
$finicio=$_POST['finicio'];  
$ffinal=$_POST['ffinal'];

$ini=array(
  $_POST['ini1'],
  $_POST['ini2'],
  $_POST['ini3'],
  $_POST['ini4'],
  $_POST['ini5'],
  $_POST['ini6'],
  $_POST['ini7'],
  $_POST['ini8'],
  $_POST['ini9'],
  $_POST['ini10'],
  $_POST['ini11'],
  $_POST['ini12'],
  $_POST['ini13'],
  $_POST['ini14'],
  $_POST['ini15'],
  $_POST['ini16'],
  $_POST['ini17'],
  $_POST['ini18'],
  $_POST['ini19'],
  $_POST['ini20'],
  $_POST['ini21'],
  $_POST['ini22'],
  $_POST['ini23'],
  $_POST['ini24'],
  $_POST['ini25'],
  $_POST['ini26'],
  $_POST['ini27'],
  $_POST['ini28'],
  $_POST['ini29'],
  $_POST['ini30']


);
$fin=array(
  $_POST['fin1'],
  $_POST['fin2'],
  $_POST['fin3'],
  $_POST['fin4'],
  $_POST['fin5'],
  $_POST['fin6'],
  $_POST['fin7'],
  $_POST['fin8'],
  $_POST['fin9'],
  $_POST['fin10'],
  $_POST['fin11'],
  $_POST['fin12'],
  $_POST['fin13'],
  $_POST['fin14'],
  $_POST['fin15'],
  $_POST['fin16'],
  $_POST['fin17'],
  $_POST['fin18'],
  $_POST['fin19'],
  $_POST['fin20'],
  $_POST['fin21'],
  $_POST['fin22'],
  $_POST['fin23'],
  $_POST['fin24'],
  $_POST['fin25'],
  $_POST['fin26'],
  $_POST['fin27'],
  $_POST['fin28'],
  $_POST['fin29'],
  $_POST['fin30']


);

$peli=array(
  $_POST['s1'],
  $_POST['s2'],
  $_POST['s3'],
  $_POST['s4'],
  $_POST['s5'],
  $_POST['s6'],
  $_POST['s7'],
  $_POST['s8'],
  $_POST['s9'],
  $_POST['s10'],
  $_POST['s11'],
  $_POST['s12'],
  $_POST['s13'],
  $_POST['s14'],
  $_POST['s15'],
  $_POST['s16'],
  $_POST['s17'],
  $_POST['s18'],
  $_POST['s19'],
  $_POST['s20'],
  $_POST['s21'],
  $_POST['s22'],
  $_POST['s23'],
  $_POST['s24'],
  $_POST['s25'],
  $_POST['s26'],
  $_POST['s27'],
  $_POST['s28'],
  $_POST['s29'],
  $_POST['s30']
);

$tep=array(
  $_POST['tep1'],
  $_POST['tep2'],
  $_POST['tep3'],
  $_POST['tep4'],
  $_POST['tep5'],
  $_POST['tep6'],
  $_POST['tep7'],
  $_POST['tep8'],
  $_POST['tep9'],
  $_POST['tep10'],
  $_POST['tep11'],
  $_POST['tep12'],
  $_POST['tep13'],
  $_POST['tep14'],
  $_POST['tep15'],
  $_POST['tep16'],
  $_POST['tep17'],
  $_POST['tep18'],
  $_POST['tep19'],
  $_POST['tep20'],
  $_POST['tep21'],
  $_POST['tep22'],
  $_POST['tep23'],
  $_POST['tep24'],
  $_POST['tep25'],
  $_POST['tep26'],
  $_POST['tep27'],
  $_POST['tep28'],
  $_POST['tep29'],
  $_POST['tep30']
);

$confi= "SELECT fechaInicio, fechaFinal FROM programacion WHERE fechaInicio = '".$finicio."' AND fechaFinal = '".$ffinal."'";

$rrr = mysqli_query($conexion,$confi);
$row = mysqli_num_rows($rrr);
if ($row>0) {
  if($rrr){
    echo "1";
  }

}else{

$prfin1 = "INSERT INTO peliprogra VALUES ";
for ($i=0; $i <= 27; $i+=3) { 

  $cadena1 = "INSERT INTO programacion (NroSala, hora, horafin, fechaInicio, fechaFinal, tep) VALUES ";
  $cadena1.="(1,'".$ini[$i]."','".$fin[$i]."','".$finicio."','".$ffinal."','".$tep[$i]."')";
  
$rep1 = mysqli_query($conexion,$cadena1);

  $sacarid1 = "SELECT IDProg FROM programacion ORDER BY IDProg DESC LIMIT 1";
  $resp1=mysqli_query($conexion,$sacarid1);

  $row1= $resp1->fetch_Array();
  $id1 = $row1['IDProg'];
  $sala1= "INSERT INTO peliprogra VALUES ('".$peli[$i]."','".$id1."')";
$rep11 = mysqli_query($conexion,$sala1);
}


$cadena2 = "INSERT INTO programacion (NroSala, hora, horafin, fechaInicio, fechaFinal,tep) VALUES ";
for ($i=1; $i <= 28; $i+=3) { 
  $cadena2 = "INSERT INTO programacion (NroSala, hora, horafin, fechaInicio, fechaFinal,tep) VALUES ";
  $cadena2.="(2,'".$ini[$i]."','".$fin[$i]."','".$finicio."','".$ffinal."','".$tep[$i]."')";
  //$sala2 = substr($cadena2, 0,-1);
  $rep2 = mysqli_query($conexion,$cadena2);
  $sacarid2 = "SELECT IDProg FROM programacion ORDER BY IDProg DESC LIMIT 1";
  $resp2=mysqli_query($conexion,$sacarid2);

  $row2= $resp2->fetch_Array();
  $id2 = $row2['IDProg'];
  $sala2= "INSERT INTO peliprogra VALUES ('".$peli[$i]."','".$id2."')";
$rep12 = mysqli_query($conexion,$sala2);

}



$cadena3 = "INSERT INTO programacion (NroSala, hora, horafin, fechaInicio, fechaFinal,tep) VALUES ";
for ($i=2; $i <= 29; $i+=3) { 
  $cadena3 = "INSERT INTO programacion (NroSala, hora, horafin, fechaInicio, fechaFinal,tep) VALUES ";
  $cadena3.="(3,'".$ini[$i]."','".$fin[$i]."','".$finicio."','".$ffinal."','".$tep[$i]."')";
  //$sala3=substr($cadena3, 0,-1);
$rep3 = mysqli_query($conexion,$cadena3);

$sacarid3 = "SELECT IDProg FROM programacion ORDER BY IDProg DESC LIMIT 1";
  $resp3=mysqli_query($conexion,$sacarid3);

  $row3= $resp3->fetch_Array();
  $id3 = $row3['IDProg'];
  $sala3= "INSERT INTO peliprogra VALUES ('".$peli[$i]."','".$id3."')";
$rep13 = mysqli_query($conexion,$sala3);

}

$ids = array_values(array_unique($peli));

for ($i=0; $i <count($ids) ; $i++) { 
  $act="UPDATE pelicula SET nrosemana = nrosemana+1 WHERE IDPeli = '".$ids[$i]."'";
  $actu = mysqli_query($conexion,$act);
}
}


?>
