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
  <meta charset="utf-16" />
   <meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Programacion General
  </title>
  <meta content='width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />

  <link href="../assets/css/paper-dashboard.css?v=2.0.0" rel="stylesheet" />
 
  <link rel="stylesheet" href="../assets2/css/cs-skin-elastic.css">
  <link rel="stylesheet" href="../assets2/css/lib/datatable/dataTables.bootstrap.min.css">
  <link rel="stylesheet" href="../assets2/css/style.css">

  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />
  

<style type="text/css">
*{
  font-size: 14px;

}

body{
  background-color: black;
}
</style>

</head>
<body >
<div class="content" style="background-color: black" id="todo">
      <!-- Navbar -->
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-absolute fixed-top">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li >
        <a href="../principal/principal.php" class="nav-link">
              <i class="menu-icon fa fa-home"></i>
              Inicio
            </a>
      </li>
      <li >
         <a href="../distroingre/distroingre.php" class="nav-link">
              <i class="menu-icon fa fa-truck"></i>
              Distribuidores
            </a>
        
      </li>
      <li >
        <a href="../peliingre/peliingre.php" class="nav-link">
              <i class="menu-icon fa fa-play"></i>
              Peliculas
            </a>
      </li>
      
      <li class="nav-item" >
        <a href="../programacion/indexprog.php" class="nav-link">
              <i class="menu-icon fa fa-calendar"></i>
              Programacion
            </a>
      </li>
       <li class="nav-item active" >
        <a href="./indexrep.php" class="nav-link">
              <i class="menu-icon fa fa-file-text-o"></i>
              Reporte
            </a>
      </li>
      <li>
        <a class="nav-link btn-rotate" href="../Login/index.html">
                  Log Out
                  <i class="fa fa-arrow-circle-left"></i>
                  
                </a>
      </li>
      </ul>
      </nav>
      <!-- End Navbar -->

          <div class="col-lg-12" >
            <div class="card card-user">
               <div  style="background-color: pink"></div>
              <div class="card-header">
                <h5 class="card-title">Programacion</h5>
              </div>
              
              <div class="card-body">
              <div class="row">
                <div class="form-group col-md-3">
                 <label>Fecha Inicio</label>
                 <input type="date" name="finicio" id="fi" max="2050-12-31" 
                  min="1999-01-01" class="form-control" value="" required>
                </div>
                <div class="form-group col-md-3">
                  <label >Fecha Final</label>
                  <input type="date" name="ffinal" id="ff" min="1999-01-01"
                   max="2050-12-31" class="form-control" value="" required>
                </div>
              </div>
              <div>
                <button class="btn btn-success btn-round" id="mostrar">Ver</button>
                <form action="reporteDistros.php" method="POST" style="float: right;">
                  <input type="text" name="f1" id="f1" hidden>
                  <input type="text" name="f2" id="f2" hidden>
                  <input type="submit" class="btn btn-warning btn-round" id="reporteDistro" value="Crear Reporte Distribuidor" ></input>
                </form>
                
              </div>
              
              </div>
              <!-- Fin De Fechas -->
               <div id="resp">
                 

               </div>
              
            </div>
          </div>
        </div>

		
      <div class="clearfix"></div>
  <!--   Core JS Files   -->
  <script src="../assets/js/core/jquery-3.4.1.js"></script>
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
 
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

</body>

</html>

<script type="text/javascript">
  $('#mostrar').click(function(){
    var fi = $('#fi').val();
    var ff= $('#ff').val();
    $.ajax({
      type: 'POST',
      url: 'repfec.php',
      data: {fi:fi, ff:ff},
      success:function(resp){
        $('#resp').html(resp);
        console.log(resp);
      }
    });
  })
  $('#fi').change( function(){
    var fi= $(this).val();
    $('#f1').val(fi);

  })
  $('#ff').change( function(){
    var ff= $(this).val();
    $('#f2').val(ff);

  })



</script>
