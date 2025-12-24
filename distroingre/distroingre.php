<!--
=========================================================
 Paper Dashboard 2 - v2.0.0
=========================================================

 Product Page: https://www.creative-tim.com/product/paper-dashboard-2
 Copyright 2019 Creative Tim (https://www.creative-tim.com)
 Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE)

 Coded by Creative Tim

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. -->



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Porgramacion de Peliculas
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../assets/css/paper-dashboard.css?v=2.0.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />

  <link rel="stylesheet" href="../assets2/css/cs-skin-elastic.css">
  <link rel="stylesheet" href="../assets2/css/lib/datatable/dataTables.bootstrap.min.css">
  <link rel="stylesheet" href="../assets2/css/style.css">
</head>

<body class="">

  <div class="wrapper ">
    <div class="sidebar" data-color="red" data-active-color="success">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    -->
      <div class="logo">
        <a href="#" class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="../assets/img/logo-small.png">
          </div>
        </a>
        <a href="#" class="simple-text logo-normal">
          Distribuidores
          <!-- <div class="logo-image-big">
            <img src="../assets/img/logo-big.png">
          </div> -->
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">

          <li>
            <a href="../principal/principal.php">
              <i class="nc-icon nc-bank"></i>
              <p>Inicio</p>
            </a>
          </li>
          <li class="active">
            <a href="./distroingre.php">
              <i class="nc-icon nc-delivery-fast"></i>
              <p>Distribuidores</p>
            </a>
          </li>
          <li>
            <a href="../peliingre/peliingre.php">
              <i class="nc-icon nc-button-play"></i>
              <p>Insertar Peliculas</p>
            </a>
          </li>
          
          <li>
            <a href="../programacion/indexprog.php">
              <i class="nc-icon nc-time-alarm"></i>
              <p>Programacion</p>
            </a>
          </li>
          <li >
          <a href="../reportep/indexrep.php" class="nav-link">
              <i class="menu-icon fa fa-file-text-o"></i>
              Reporte
            </a>
      </li>
         
          
          
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="#pablo">Ingreso de Distribuidores</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <a class="nav-link btn-rotate" href="../Login/index.html">
                  Log Out
                  <i class="fa fa-arrow-circle-left"></i>
                  
                </a>
        </div>
      </nav>
      <!-- End Navbar -->
      <!-- <div class="panel-header panel-header-sm">


</div> -->
      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-user">
              <div class="card-header">
                <h5 class="card-title">Insertar Distribuidor</h5>
              </div>
              <div class="card-body">
   <form action="insertar.php" method="GET">
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" required name="nombredistro" class="form-control" style="text-transform: uppercase;" placeholder="Nombre del Distribuidor" value="" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Direccion:</label>
                        <input type="text" name="dirdistro"class="form-control"  style="text-transform: uppercase;" placeholder="Direccion/Calles/Ciudad" value="" required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Responsable:</label>
                        <input type="text" name="respdistro" class="form-control"style="text-transform: uppercase;" placeholder="Nombre del Responsable" value="" required>
                        
                      </div>
                    </div>
                  
                  
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <label>Telefono:</label>
                        <input type="text" name="teldistro"class="form-control" placeholder="Telefono/Celular" style="text-transform: uppercase;" value="" required>
                        
                      </div>
                    </div>
                   
                   
                  </div>
                
                  <!--<div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>About Me</label>
                        <textarea class="form-control textarea">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>
                      </div>
                    </div>
                  </div>-->
                  <div class="row">
                  <div class="update ml-auto mr-auto">
                   
                      <button type="submit" class="btn btn-primary btn-round"><i class="nc-icon nc-simple-add" >&nbsp;&nbsp;&nbsp;</i> Insertar Distribuidor</button>


     
                    </div>
                  </div>
      </form>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="animated fadeIn">
                       <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Lista de Distribuidores Registradas</strong>
                            </div>
                            <div class="card-body">
                                 <?require "mostrarTD.php";?>
                                <table id="bootstrap-data-table" class="table table-striped table-bordered" style="font-size: 15px; " >
                                    <thead>
                                        <tr>
                                          <th>Nro</th>
                                            <th style="width: 200px">Nombre</th>
                                            
                                            <th style="width: 300px">Direccion</th>
                                            <th>Responsable</th>
                                            <th>Telefono</th>
                                            <th>Editar</th>
                                            <th>Borrar</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
  require "../Login/conn.php";
  
  $mostrar="SELECT * FROM distribuidor";
  $sq=mysqli_query($conexion,$mostrar);
  $row=mysqli_num_rows($sq);
  if($row>0){
    if($sq){
        $s=1;
        while($ser=mysqli_fetch_array($sq)){
          echo"<tr>
          <td>".$s."</td>
          <td>".$ser['nombre']."</td>
          <td>".$ser['responsable']."</td>
          <td>".$ser['direccion']."</td>
          <td>".$ser['telefono']."</td>
          
          <td align='center'>
              <a href=\"javascript:edita1('".$ser['ID']."','".$ser['nombre']."','".$ser['responsable']."','".$ser['direccion']."','".$ser['telefono']."')\" class='btn-sm btn-outline-primary'/><i class='fa fa-pencil-square-o'></i></td>

          <td align='center'><a href=\"javascript:delet('".$ser['ID']."','".$ser['nombre']."')\" class='btn-sm btn-outline-danger' /><i class='fa fa-trash-o' ></i></td>";

          echo"</tr>";
          $s++;
        }
    }
  }
  
?> 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                      </div>
                </div>
            </div><!-- .animated -->

        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>


  <!--   Core JS Files   -->
  <script src="../assets/js/core/jquery-3.4.1.js"></script>
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <!--  Google Maps Plugin    -->
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
  <!-- Chart JS -->
  <script src="../assets/js/plugins/chartjs.min.js"></script>
  <!--  Notifications Plugin    -->
  <script src="../assets/js/plugins/bootstrap-notify.js"></script>
  <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/paper-dashboard.min.js?v=2.0.0" type="text/javascript"></script>
  <!-- Paper Dashboard DEMO methods, don't include it in your project! -->
  <script src="../assets/demo/demo.js"></script>
  <!--Tabla platilla2 !-->
<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
    <script src="../assets2/js/main.js"></script>


    <script src="../assets2/js/lib/data-table/datatables.min.js"></script>
    <script src="../assets2/js/lib/data-table/dataTables.bootstrap.min.js"></script>
    <script src="../assets2/js/lib/data-table/dataTables.buttons.min.js"></script>
    <script src="../assets2/js/lib/data-table/buttons.bootstrap.min.js"></script>
    <script src="../assets2/js/lib/data-table/jszip.min.js"></script>
    <script src="../assets2/js/lib/data-table/vfs_fonts.js"></script>
    <script src="../assets2/js/lib/data-table/buttons.html5.min.js"></script>
    <script src="../assets2/js/lib/data-table/buttons.print.min.js"></script>
    <script src="../assets2/js/lib/data-table/buttons.colVis.min.js"></script>
    <script src="../assets2/js/init/datatables-init.js"></script>


    <script type="text/javascript">
        $(document).ready(function() {
          $('#bootstrap-data-table-export').DataTable();
      } );
  </script>
<?php
require "actualizar.php";
require "borrar.php";
?>
<script type="text/javascript">
  function edita1(id,nom,resp,dir,tel){
    $('#largeModal').modal('show');
    $('#id1').val(id);
    $('#nombredistro1').val(nom);
    $('#respdistro1').val(resp);
    $('#dirdistro1').val(dir);
    $('#teldistro1').val(tel);
  }
  function delet(id,nom){
    
    $('#id2').val(id);
    $('#nom2').val(nom);
    $('#staticModal').modal('show');
    
  }

</script>

</body>

</html>




