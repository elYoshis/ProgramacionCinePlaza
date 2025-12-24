<?php 
require "../login/conn.php";
//Fechas
$finicio=$_POST['finicio'];  
$ffinal=$_POST['ffinal'];

$ini1=array(
  $_POST['ini1'],
  $_POST['ini4'],
  $_POST['ini7'],
  $_POST['ini10'],
  $_POST['ini13'],
  $_POST['ini16'],
  $_POST['ini19'],
  $_POST['ini22'],
  $_POST['ini25'],
  $_POST['ini28']
);
$ini2=array(
  $_POST['ini2'],
  $_POST['ini5'],
  $_POST['ini8'],
  $_POST['ini11'],
  $_POST['ini14'],
  $_POST['ini17'],
  $_POST['ini20'],
  $_POST['ini23'],
  $_POST['ini26'],
  $_POST['ini29']
);
$ini3=array(
  $_POST['ini3'],
  $_POST['ini6'],
  $_POST['ini9'],
  $_POST['ini12'],
  $_POST['ini15'],
  $_POST['ini18'],
  $_POST['ini21'],
  $_POST['ini24'],
  $_POST['ini27'],
  $_POST['ini30']
);
$fin1=array(
  $_POST['fin1'],
  $_POST['fin4'],
  $_POST['fin7'],
  $_POST['fin10'],
  $_POST['fin13'],
  $_POST['fin16'],
  $_POST['fin19'],
  $_POST['fin22'],
  $_POST['fin25'],
  $_POST['fin28']
);
$fin2=array(
  $_POST['fin2'],
  $_POST['fin5'],
  $_POST['fin8'],
  $_POST['fin11'],
  $_POST['fin14'],
  $_POST['fin17'],
  $_POST['fin20'],
  $_POST['fin23'],
  $_POST['fin26'],
  $_POST['fin29']
);
$fin3=array(
  $_POST['fin3'],
  $_POST['fin6'],
  $_POST['fin9'],
  $_POST['fin12'],
  $_POST['fin15'],
  $_POST['fin18'],
  $_POST['fin21'],
  $_POST['fin24'],
  $_POST['fin27'],
  $_POST['fin30']
);

$peli1=array(
  $_POST['s1'],
  $_POST['s4'],
  $_POST['s7'],
  $_POST['s10'],
  $_POST['s13'],
  $_POST['s16'],
  $_POST['s19'],
  $_POST['s22'],
  $_POST['s25'],
  $_POST['s28']
  
);
$peli2=array(
  $_POST['s2'],
  $_POST['s5'],
  $_POST['s8'],
  $_POST['s11'],
  $_POST['s14'],
  $_POST['s17'],
  $_POST['s20'],
  $_POST['s23'],
  $_POST['s26'],
  $_POST['s29']
  
);
$peli3=array(
  $_POST['s3'],
  $_POST['s6'],
  $_POST['s9'],
  $_POST['s12'],
  $_POST['s15'],
  $_POST['s18'],
  $_POST['s21'],
  $_POST['s24'],
  $_POST['s27'],
  $_POST['s30']
  
);

$idprog1= array(
$_POST['aux1'],
$_POST['aux4'],
$_POST['aux7'],
$_POST['aux10'],
$_POST['aux13'],
$_POST['aux16'],
$_POST['aux19'],
$_POST['aux22'],
$_POST['aux25'],
$_POST['aux28']
);
$idprog2= array(
$_POST['aux2'],
$_POST['aux5'],
$_POST['aux8'],
$_POST['aux11'],
$_POST['aux14'],
$_POST['aux17'],
$_POST['aux20'],
$_POST['aux23'],
$_POST['aux26'],
$_POST['aux29']
);
$idprog3= array(
$_POST['aux3'],
$_POST['aux6'],
$_POST['aux9'],
$_POST['aux12'],
$_POST['aux15'],
$_POST['aux18'],
$_POST['aux21'],
$_POST['aux24'],
$_POST['aux27'],
$_POST['aux30']
);
$tep1 = array(
$_POST['tep1'],
$_POST['tep4'],
$_POST['tep7'],
$_POST['tep10'],
$_POST['tep13'],
$_POST['tep16'],
$_POST['tep19'],
$_POST['tep22'],
$_POST['tep25'],
$_POST['tep28']
);
$tep2 = array(
$_POST['tep2'],
$_POST['tep5'],
$_POST['tep8'],
$_POST['tep11'],
$_POST['tep14'],
$_POST['tep17'],
$_POST['tep20'],
$_POST['tep23'],
$_POST['tep26'],
$_POST['tep29']
);
$tep3 = array(
$_POST['tep3'],
$_POST['tep6'],
$_POST['tep9'],
$_POST['tep12'],
$_POST['tep15'],
$_POST['tep18'],
$_POST['tep21'],
$_POST['tep24'],
$_POST['tep27'],
$_POST['tep30']
);
for ($i=0; $i <count($idprog1) ; $i++) { 
	$actu= "UPDATE programacion SET hora= '".$ini1[$i]."', horafin='".$fin1[$i]."', tep='".$tep1[$i]."' WHERE IDProg = '".$idprog1[$i]."'";
	$rep = mysqli_query($conexion, $actu);
	$actu2 = "UPDATE peliprogra SET IDPeli = '".$peli1[$i]."' WHERE IDProg = '".$idprog1[$i]."'";
	$rep2 = mysqli_query($conexion, $actu2);
//	echo $actu."...............".$actu2.".......";
}

for ($i=0; $i <count($idprog2) ; $i++) { 
	$actu= "UPDATE programacion SET hora= '".$ini2[$i]."', horafin='".$fin2[$i]."', tep='".$tep2[$i]."' WHERE IDProg = '".$idprog2[$i]."'";
	$rep = mysqli_query($conexion, $actu);
	$actu2 = "UPDATE peliprogra SET IDPeli = '".$peli2[$i]."' WHERE IDProg = '".$idprog2[$i]."'";
	$rep2 = mysqli_query($conexion, $actu2);
	//echo $actu."...............".$actu2.".......";
}
for ($i=0; $i <count($idprog3) ; $i++) { 
	$actu= "UPDATE programacion SET hora= '".$ini3[$i]."', horafin='".$fin3[$i]."', tep='".$tep3[$i]."' WHERE IDProg = '".$idprog3[$i]."'";
	$rep = mysqli_query($conexion, $actu);
	$actu2 = "UPDATE peliprogra SET IDPeli = '".$peli3[$i]."' WHERE IDProg = '".$idprog3[$i]."'";
	$rep2 = mysqli_query($conexion, $actu2);
	//echo $actu."...............".$actu2.".......";
}

?>