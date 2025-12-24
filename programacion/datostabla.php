<?php 
require "../login/conn.php";
//Fechas
$finicio=$_POST['fi'];  
$ffinal=$_POST['ff'];

$consu= "SELECT DISTINCT p.IDPeli, p.nombre, p.duracion, p.clasificacion,p.nrosemana, p.formato FROM pelicula p, peliprogra pp, programacion prg WHERE p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg  AND prg.fechaInicio = '".$finicio."' AND prg.fechaFinal = '".$ffinal."' ORDER BY p.IDPeli DESC " ;

$c=1;
$datos = array();
$rep = mysqli_query($conexion,$consu);

if ($rep) {
	$contar = mysqli_num_rows($rep);
	
	while ($row = mysqli_fetch_assoc($rep)) {
		if($row['clasificacion'] == "APTO PARA TODO PUBLICO"){
    					$class = "TP";
  					}
  					if($row['clasificacion'] == "MAYORES DE 12 AÑOS"){
    					$class = ">12";
  					}
  					if($row['clasificacion'] == "MAYORES DE 13 AÑOS"){
    					$class = ">13";
  					}
 					 if($row['clasificacion'] == "MAYORES DE 14 AÑOS"){
 					   $class = ">14";
 					 }
 					 if($row['clasificacion'] == "MAYORES DE 15 AÑOS"){
 					   $class = ">15";
 					 }
 					 if($row['clasificacion'] == "MAYORES DE 18 AÑOS"){
 					   $class = ">18";
 					 }
 					 if($row['clasificacion'] == "MAYORES DE 21 AÑOS"){
 					   $class = ">21";
 					 }
		echo "<tr>                           
			  <th>
    		 <input type='input' id='canti".$c."'' style='width: 30px;'' autocomplete='off'>
    		</th>                                   
    		<th>
    		<select class='gato1'  id='info".$c."' name='info[]'>
    		<option value='".$row['IDPeli']."'>".$row['nombre']." ".$row['formato']."</option></select> </th> 
 						<th>
 						<input class='form-control' type='text' id='ti".$c."' autocomplete='off'  readonly value='".$row['duracion']."'></th>
      					<th>
       					<input class='form-control' type='text' id='cla".$c."' autocomplete='off' readonly value='".$class."'>
      					</th>
      					<th>
       					<input class='form-control' type='text' autocomplete='off' id='pre".$c."'>
      					</th>
      					<th>
      					<input class='form-control' type='number' autocomplete='off' id='nro".$c."' value='".$row['nrosemana']."'>
      					</th></tr>";


		$c++;
	}
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

?>