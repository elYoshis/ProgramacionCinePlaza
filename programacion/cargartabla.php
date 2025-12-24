<?php
 require "../Login/conn.php";

if(isset($_POST['data1'])){
$data =$_POST['data1'];
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
$c=1;
for ($i=0; $i < count($ids)  ; $i++) { 

echo "<tr>                           
	<th>
     <input type='input' id='canti".$c."'' style='width: 30px;'' autocomplete='off'>
    </th>                                   
    <th>
    <select class='gato1'  id='info".$c."' name='info[]'>";
    	$sele="SELECT IDpeli,nombre,duracion,formato,clasificacion,nrosemana FROM pelicula WHERE IDpeli='".$ids[$i]."' ORDER BY nombre";
			$rep=mysqli_query($conexion,$sele);
			if($rep){
 				while($ar=mysqli_fetch_array($rep)){
 					if($ar['clasificacion'] == "APTO PARA TODO PUBLICO"){
    					$class = "TP";
  					}
  					if($ar['clasificacion'] == "MAYORES DE 12 AÑOS"){
    					$class = ">12";
  					}
  					if($ar['clasificacion'] == "MAYORES DE 13 AÑOS"){
    					$class = ">13";
  					}
 					 if($ar['clasificacion'] == "MAYORES DE 14 AÑOS"){
 					   $class = ">14";
 					 }
 					 if($ar['clasificacion'] == "MAYORES DE 15 AÑOS"){
 					   $class = ">15";
 					 }
 					 if($ar['clasificacion'] == "MAYORES DE 18 AÑOS"){
 					   $class = ">18";
 					 }
 					 if($ar['clasificacion'] == "MAYORES DE 21 AÑOS"){
 					   $class = ">21";
 					 }

 					echo "<option value='".$ar['IDpeli']."'>".$ar['nombre']." ".$ar['formato']."</option></select> </th> 
 						<th>
 						<input class='form-control' type='text' id='ti".$c."' autocomplete='off'  readonly value='".$ar['duracion']."'></th>
      					<th>
       					<input class='form-control' type='text' id='cla".$c."' autocomplete='off' readonly value='".$class."'>
      					</th>
      					<th>
       					<input class='form-control' type='text' autocomplete='off' id='pre".$c."'>
      					</th>
      					<th>
      					<input class='form-control' type='number' autocomplete='off' id='nro".$c."' value='".$ar['nrosemana']."'>
      					</th></tr>";

   			}
		}
   $c++;
}
$c1=$c;
for ($i=0; $i < 15-$c; $i++) { 

	echo "<tr>                           
	<th>
     <input type='input' id='canti".$c1."'' style='width: 30px;'' autocomplete='off'>
    </th>                                   
    <th>
    <select class='gato1'  id='info".$c1."' name='info[]'><option value=''>seleccione...</option></select> </th> 
	<th>
     <input class='form-control' type='text' id='ti".$c1."' autocomplete='off'  readonly></th>
      <th>
       <input class='form-control' type='text' id='cla".$c1."' autocomplete='off'  readonly>
      </th>
      <th>
       <input class='form-control' type='text' autocomplete='off'  id='pre".$c1."'>
      </th>
      <th>
      <input class='form-control' type='number' autocomplete='off'  id='nro".$c1."'>
      </th>

    </tr>";
  $c1++;
}
}

?>