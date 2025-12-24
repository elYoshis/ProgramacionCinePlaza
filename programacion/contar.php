<?php 
$ids = array(
	$_POST['id1'],
	$_POST['id2'],
	$_POST['id3'],
	$_POST['id4'],
	$_POST['id5'],
	$_POST['id6'],
	$_POST['id7'],
	$_POST['id8'],
	$_POST['id9'],
	$_POST['id10'],
	$_POST['id11'],
	$_POST['id12'],
	$_POST['id13'],
	$_POST['id14'],
	$_POST['id15'],
	$_POST['id16'],
	$_POST['id17'],
	$_POST['id18'],
	$_POST['id19'],
	$_POST['id20'],
	$_POST['id21'],
	$_POST['id22'],
	$_POST['id23'],
	$_POST['id24'],
	$_POST['id25'],
	$_POST['id26'],
	$_POST['id27'],
	$_POST['id28'],
	$_POST['id29'],
	$_POST['id30']
);
$infos = array(
	$_POST['info1'],
	$_POST['info2'],
	$_POST['info3'],
	$_POST['info4'],
	$_POST['info5'],
	$_POST['info6'],
	$_POST['info7'],
	$_POST['info8'],
	$_POST['info9'],
	$_POST['info10'],
	$_POST['info11'],
	$_POST['info12'],
	$_POST['info13'],
	$_POST['info14']
);
$valores = array();
$valores = array_values(contarValoresArray($ids));
$claves = array();
$claves = (contarValoresArray($ids));
$cont= array();
foreach ($claves as $key => $value) {
	for ($i=0; $i <count($infos) ; $i++) { 
	 	if($infos[$i]==$key){
	 		$cont[$i]=$value;
	 		
	 	}	 
	}
}
echo json_encode(($cont));
function contarValoresArray($array)

{

	$contar=array();

 

	foreach($array as $value)

	{

		if(isset($contar[$value]))

		{

			// si ya existe, le añadimos uno

			$contar[$value]+=1;

		}else{

			// si no existe lo añadimos al array

			$contar[$value]=1;

		}

	}

	return $contar;

}
?>