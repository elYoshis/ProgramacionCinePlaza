<?php

$tpeli = $_POST['tpeli'];
$horaEntrada = $_POST['inicio'];	
$v_HorasPartes = explode(":", $horaEntrada);
$minutosTotales= ($v_HorasPartes[0] * 60) + $v_HorasPartes[1];

$ttotal=$minutosTotales+$tpeli;
	if($ttotal>1439){
		$ttotal=($minutosTotales+$tpeli)-1440;
		echo date("i:s",$ttotal);
	}else{
		$ttotal=$minutosTotales+$tpeli;
		echo date("i:s",$ttotal);
	}

?>