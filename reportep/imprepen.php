<?php 
require"../Login/conn.php";


$fi=$_GET['fe1'];
$ff=$_GET['fe2'];

$fii = date_create_from_format('Y-m-d', $fi);
$fff = date_create_from_format('Y-m-d', $ff);

$fiii = date_format($fii, "d-M-Y");
$ffff = date_format($fff, "d-M-Y");


 $mostrar="SELECT prg.Nrosala, p.nombre AS pnombre, p.duracion, p.formato, p.clasificacion, prg.hora, prg.horafin, d.nombre AS dnombre, p.nrosemana FROM pelicula p,distribuidor d, peliprogra pp, programacion prg WHERE p.idDistro=d.ID AND p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg AND prg.fechainicio = '".$fi."' AND prg.fechafinal = '".$ff."' ORDER BY prg.Nrosala, prg.hora" ;


  $sq=mysqli_query($conexion,$mostrar);
 
  $row=mysqli_num_rows($sq);
	if ($sq) {
	echo " <label>Peliculas de la semana '".$fiii."'' a '".$ffff."'</label><br>
   <table  border='1' cellpadding='2' cellspacing='0' style='width:100%'>
  <thead>
  <tr> 
  <th>#</th>
  <th>Pelicula</th>
  <th>Sala</th>
  
  <th>Duracion(min)</th>
  <th>Formato</th>
  <th>Clasificacion</th>
  <th>Inicio</th>
  <th>Final</th>
  <th>Distribuidor</th>
  <th>Semana</th>
  </tr>
  </thead>
  <tbody>";
	$s=1;
	while ($ser=mysqli_fetch_array($sq)) {
		echo"<tr>
          <td>".$s."</td>
          <td>".$ser['pnombre']."</td>
          <td>".$ser['Nrosala']."</td>
          <td>".$ser['duracion']."</td>
          <td>".$ser['formato']."</td>
          <td>".$ser['clasificacion']."</td>
          <td>".$ser['hora']."</td>
          <td>".$ser['horafin']."</td>
          <td>".$ser['dnombre']."</td>
          <td>".$ser['nrosemana']."</td>";

          echo"</tr>";
          $s++;
		
	}
	 echo " </tbody>
	 </table>";

}


 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 	<style type="text/css">
 		td.ss{
 			width: 162px;
 		}
 		td.ss1{
 			width: 114px;
 		}
}
table{
	position: static;
}
 	</style>
 </head>
 <body style="margin: 25px;">

 	
 <script type="text/javascript">
 	window.print();
 	window.addEventListener("afterprint", 
 		function(){
 			this.close();
 		}, false);

 </script>
 </body>
 </html>