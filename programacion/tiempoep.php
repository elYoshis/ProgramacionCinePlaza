<?php

$tep = $_POST['tep'];
$horaEntrada = $_POST['final'];	

$v_HorasPartes = explode(":", $horaEntrada);
$minutosTotales= ($v_HorasPartes[0] * 60) + $v_HorasPartes[1];

$ttotal=$minutosTotales+$tep;
if($ttotal>1439){
	
	$ttotal=$minutosTotales-1440+$tep;
	echo date("i:s",$ttotal);
}else{
	$ttotal=$minutosTotales+$tep;
	echo date("i:s",$ttotal);
}
?>