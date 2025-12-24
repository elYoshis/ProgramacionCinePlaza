<?php
  require "../Login/conn.php";
  setlocale(LC_TIME, 'es_ES.UTF-8');
  $fi=$_POST['fi'];
  $ff=$_POST['ff'];
$fii = date_create_from_format('Y-m-d', $fi);
$fff = date_create_from_format('Y-m-d', $ff);

$fiii = date_format($fii, "d-m-Y");
$ffff = date_format($fff, "d-m-Y");
  $mostrar="SELECT prg.Nrosala, p.nombre AS pnombre, p.duracion, p.formato, p.clasificacion, prg.hora, prg.horafin, d.nombre AS dnombre, p.nrosemana FROM pelicula p,distribuidor d, peliprogra pp, programacion prg WHERE p.idDistro=d.ID AND p.IDPeli = pp.IDPeli AND pp.IDProg = prg.IDProg AND prg.fechainicio = '".$fi."' AND prg.fechafinal = '".$ff."' ORDER BY prg.Nrosala,prg.hora" ;

  $sq=mysqli_query($conexion,$mostrar);
 
  $row=mysqli_num_rows($sq);

  if($row>0){
    if($sq){
      echo " <a href=\"javascript:impri(".$fiii.",".$ffff.");\" name='btn' class='btn btn-sm btn-default' style='margin:10px;'><i class='fa fa-print'></i></a><br>
  <div align='center'>
  <label>Peliculas de la semana ".$fiii." a ".$ffff."</label><br>
   <table  id='bootstrap-data-table' class='table table-striped table-bordered' > 
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
        while($ser=mysqli_fetch_array($sq)){
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
        echo "</tbody>
   </table></div>";
    }
  }
  
?>  
<!DOCTYPE html>
 <html>
 <head>
  <title></title>
  <style type="text/css" media='print'>
     @page { size: landscape; }
</style>
  <style type="text/css">
  
    @media screen and (max-width: 572px) {
      table{
        overflow:auto;
        display:block; 
        width:fit-content;
      }
      
      }

  </style>
 </head>
 <body>
  <script>
    function impri(valorCaja1,valorCaja2){
          window.open("imprepen.php?fe1="+valorCaja1+"&fe2="+valorCaja2+"");
      }


  </script>
 </body>
 </html>