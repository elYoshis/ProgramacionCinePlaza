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
  font-size: 11px;

}
li{
  font-size: 14px;
}
#inputMDEx1{
  font-size: 13px;
}

select{

  font-size: 12px;
}
select .class-form{
  font-size: 12px;
}

</style>

</head>
<body>
<div class="content" style="background-color: black">
      <!-- Navbar -->
  <nav class="navbar navbar-dark bg-dark navbar-expand navbar-absolute fixed-top">
  <div id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li >
        <button onclick="principal()" class="nav-link btn">
              <i class="menu-icon fa fa-home"></i>
              Inicio
            </button>
      </li>
      <li >
         <button onclick="distro()" class="nav-link btn" >
              <i class="menu-icon fa fa-truck"></i>
              Distribuidores
            </button>
        
      </li>
      <li >
        <button onclick="peli()" class="nav-link btn">
              <i class="menu-icon fa fa-play"></i>
              Peliculas
            </button>
      </li>
      
      <li  class="nav-item active" >
        <button onclick="prog()" class="nav-link btn">
              <i class="menu-icon fa fa-calendar"></i>
              Programacion
            </button>
      </li>
      <li class="nav-item" >
        <button  onclick="report()" class="nav-link btn">
              <i class="menu-icon fa fa-file-text-o"></i>
              Reporte
            </button>
      </li>
      <li  class="nav-item" >
        <button onclick="respa()" class="nav-link btn">
              <i class="menu-icon   fa fa-save"></i>
              Respaldar BD
            </button>
      </li>
      <li>
        <button onclick="logout()" class="nav-link btn">
                  Log Out
        <i class="fa fa-arrow-circle-left"></i>
                  
                </button>
      </li>
        
    </ul>
      </nav>
      <!-- End Navbar -->
      <!-- <div class="panel-header panel-header-sm">


</div> -->
      <div class="content" style="background-color: black">
        <div class="col-lg-6" style="float: right; margin-top: 30px;">
                        <div class="card">                        
                            <div class="card-header">
                                <strong class="card-title">Peliculas</strong>
                            </div>
                            <div class="card-body">
                              <div class="row">
                <div class="form-group col-md-6">
                 <label>Fecha Inicio</label>
                 <select class="custom-select custom-select-md" name="selInicio" id="selInicio">
                   <?php require "selectsemana.php";?>
                 </select>
                </div>
                <div class="form-group col-md-6">
                  <label >Fecha Final</label>
                  <br>
                  <input type="text" name="txtfinal" class="form-control-sm" id="txtfinal" value="" readonly>
                </div>
              </div>
                                <table class="col-md-12">
                                    <thead>
                                        <tr>  
                                          <th>#</th>                                        
                                          <th>Titulo</th>
                                          <th>Durcaion (Min)</th>
                                          <th>Clasificacion</th>
                                          <th>Precio</th>
                                          <th>Semana #</th>
                                      </tr>
                                  </thead>
                                  <tbody class="gato2" id="gatito">
                                    
                                    
                                    
                                </tbody>
                               
                                <button class="btn btn-success btn-round" style="float: left;" id="btnrecupera"><i class="fa fa-folder-open-o"></i> Recuperar Programacion</button> 
                                <button class="btn btn-success btn-round" onclick="enviarexcel();" style="float: left;" id="btnexcel"> Exportar a EXCEL</button> 
                                <button class="btn btn-danger btn-round" style="float: right;" id="btcontar">Contar/Recalcular Peliculas</button> 
                                
                            
                            <div id="expo"></div>
                            


                            </table>
                            
                        </div>
                    </div>

                </div>

        <div class="row">
          <!--<form method="POST" action="insertarpro.php">-->
           
          <!-- Fechas -->
          <div class="col-lg-12" >
            <div class="card card-user">
               <div  style="background-color: pink"></div>
              <div class="card-header">
                <h5 class="card-title">Programacion</h5>
                
              </div>
             <div>
     <div id="btnactualizar" style="float: right;"></div>
     <button class="btn btn-light btn-round" onclick="newDoc()">Nueva Programacion</button>
                      <button onclick="datostabla()" class="btn btn-primary btn-round" id="btnguardar"><i class="fa fa-save" >&nbsp;&nbsp;&nbsp;</i>Guardar Nuevo en BD</button>
                  </div>
              <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                 <label>Fecha Inicio</label>
                 <input type="date" name="finicio" id="fi" max="2050-12-31" 
                  min="1999-01-01" class="form-control" value="" required>
                </div>
                <div class="form-group col-md-6">
                  <label >Fecha Final</label>
                  <input type="date" name="ffinal" id="ff" min="1999-01-01"
                   max="2050-12-31" class="form-control" value="" required>
                </div>
                
              </div>
              <!-- Fin De Fechas -->
<div class="card" >
  <div class="card-body">
    <div>
  <table align="Center" class="col-md-12" style="float: left;">
  <thead>
    <tr>
      
      <th colspan="3">SALA 1</th>
      <th colspan="3">SALA 2</th>
      <th colspan="3">SALA 3</th>
      
    </tr>
  </thead>
  <tbody>
   
<tr class="">
    <!--FILA 1-->
      <td colspan="3">
        <select class="gato perro custom-select custom-select-md" name="s1" id="s1"  >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux1" id="aux1" hidden>
        <input type="number" id="res" hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s2" id="s2"  >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux2" id="aux2"  hidden>
        <input type="text" id="res2"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s3" id="s3" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux2" id="aux3" hidden>
        <input type="text" id="res3"  hidden>
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" value="" name="ini1" id="ini1" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin1" id="fin1" readonly  autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep1" id="tep1"  style="width: 50px;"  autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini2" id="ini2" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin2" id="fin2" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep2" id="tep2"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input  type="time" value="" name="ini3" id="ini3" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin3" id="fin3" readonly autocomplete="off">
      </td>
      <td>
        <input  value="0" type="text" name="tep3" id="tep3"  style="width: 50px;" autocomplete="off">
      </td>
      
    </tr>
    <!--FIN FILA 1-->
    <tr>
      <!--FILA 2-->

      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s4" id="s4" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux4" hidden>
        <input type="text" id="res4" hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s5" id="s5" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux5"  hidden>
        <input type="text" id="res5"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s6" id="s6" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux6" hidden>
        <input type="text" id="res6"  hidden>
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" value="" name="ini4" id="ini4" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin4" id="fin4" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep4" id="tep4"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini5" id="ini5" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin5" id="fin5" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep5" id="tep5"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini6" id="ini6" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin6" id="fin6" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep6" id="tep6"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 2-->
    <!--FILA 3-->
    <tr>
      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s7" id="s7" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux7" hidden>
        <input type="text" id="res7" hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s8" id="s8"  >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux8"  hidden>
        <input type="text" id="res8"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s9" id="s9" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux9" hidden>
        <input type="text" id="res9" hidden >
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" value="" name="ini7" id="ini7" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin7" id="fin7" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep7" id="tep7"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini8" id="ini8" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin8" id="fin8" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep8" id="tep8"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini9" id="ini9" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin9" id="fin9" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep9" id="tep9"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 3-->
     <!--FILA 4-->
    <tr>
      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s10" id="s10" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux10" hidden>
        <input type="text" id="res10"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s11" id="s11" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux11"  hidden>
        <input type="text" id="res11"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s12" id="s12" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux12" hidden>
        <input type="text" id="res12" hidden>
      </td>
    </tr>
    <tr>
      <td>
        <input  type="time" value="" name="ini10" id="ini10" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin10" id="fin10" readonly autocomplete="off">
      </td>
      <td>
        <input  value="0" type="text" name="tep10" id="tep10"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input  type="time" value="" name="ini11" id="ini11" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin11" id="fin11" readonly autocomplete="off">
      </td>
      <td>
        <input  value="0" type="text" name="tep11" id="tep11"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input  type="time" value="" name="ini12" id="ini12" autocomplete="off">
      </td>
      <td>
        <input  type="time" name="fin12" id="fin12" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep12" id="tep12"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 4-->
     <!--FILA 5-->
    <tr>
      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s13" id="s13">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux13" hidden>
        <input type="text" id="res13"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s14" id="s14" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux14"  hidden>
        <input type="text" id="res14"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s15" id="s15">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux15" hidden>
        <input type="text" id="res15" hidden>
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" value="" name="ini13" id="ini13" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin13" id="fin13" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep13" id="tep13"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini14" id="ini14" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin14" id="fin14" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep14" id="tep14"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini15" id="ini15" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin15" id="fin15" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep15" id="tep15"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 5-->
    <!--FILA 6-->
    <tr>
      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s16" id="s16">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux16" hidden>
        <input type="text" id="res16"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s17" id="s17" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux17"  hidden>
        <input type="text" id="res17"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s18" id="s18">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux18" hidden>
        <input type="text" id="res18" hidden>
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" value="" name="ini16" id="ini16" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin16" id="fin16" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep16" id="tep16"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini17" id="ini17" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin17" id="fin17" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep17" id="tep17"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini18" id="ini18" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin18" id="fin18" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep18" id="tep18"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 6-->
    <tr class="a" style="color: blue; background-color: yellow;"><td colspan="6">CLICK ACA PARA AUMENTAR O REDUCIR CAMPOS</td></tr>
    <!--FILA 7-->
    <tr class="extraf">
      <td colspan="3">
        <select  class="gato perro custom-select custom-select-md" name="s19" id="s19">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux19" hidden>
        <input type="text" id="res19"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s20" id="s20" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux20"  hidden>
        <input type="text" id="res20"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s21" id="s21">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux21" hidden>
        <input type="text" id="res21" hidden>
      </td>
    </tr>
    <tr class="a" ><td colspan="6" hidden>Click aca para agregar o quitar fila</td></tr>
    <tr class="extraf">
      <td>
        <input type="time" value="" name="ini19" id="ini19" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin19" id="fin19" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep19" id="tep19"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini20" id="ini20" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin20" id="fin20" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep20" id="tep20"  style="width: 50px;" autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini21" id="ini21" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin21" id="fin21" readonly autocomplete="off">
      </td>
      <td>
        <input  value="0" type="text" name="tep21" id="tep21"  style="width: 50px;" autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 7-->
    <!--FILA 8-->
    <tr class="extraf">
      <td colspan="3">
        <select class="gato perro custom-select custom-select-md" name="s22" id="s22">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux22" hidden>
        <input type="text" id="res22"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s23" id="s23" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux23"  hidden>
        <input type="text" id="res23"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s24" id="s24">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux24" hidden>
        <input type="text" id="res24" hidden>
      </td>
    </tr>
    <tr class="a" ><td colspan="6" hidden>Click aca para agregar o quitar fila</td></tr>
    <tr class="extraf">
      <td>
        <input type="time" value="" name="ini22" id="ini22" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin22" id="fin22" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep22" id="tep22"  style="width: 50px;"  autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini23" id="ini23" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin23" id="fin23" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep23" id="tep23"  style="width: 50px;"  autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini24" id="ini24" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin24" id="fin24" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep24" id="tep24"  style="width: 50px;"  autocomplete="off">
    </tr>
    <!--FIN FILA 8-->
    <!--FILA 9-->
    <tr class="extraf">
      <td colspan="3">
        <select class="gato perro custom-select custom-select-md" name="s25" id="s25">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux25" hidden>
        <input type="text" id="res25"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s26" id="s26" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux26"  hidden>
        <input type="text" id="res26"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s27" id="s27">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux27" hidden>
        <input type="text" id="res27" hidden>
      </td>
    </tr>
    <tr class="a" ><td colspan="6" hidden>Click aca para agregar o quitar fila</td></tr>
    <tr class="extraf">
      <td>
        <input type="time" value="" name="ini25" id="ini25" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin25" id="fin25" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep25" id="tep25"  style="width: 50px;"  autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini26" id="ini26" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin26" id="fin26" readonly autocomplete="off"> 
      </td>
      <td>
        <input value="0"  type="text" name="tep26" id="tep26"  style="width: 50px;"  autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini27" id="ini27" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin27" id="fin27" readonly autocomplete="off">
      </td>
      <td>
        <input  value="0" type="text" name="tep27" id="tep27"  style="width: 50px;"  autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 9-->
    <!--FILA 10-->
    <tr class="extraf">
      <td colspan="3">
        <select class="gato perro custom-select custom-select-md" name="s28" id="s28">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux4" id="aux28" hidden>
        <input type="text" id="res28"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s29" id="s29" >
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux5" id="aux29"  hidden>
        <input type="text" id="res29"  hidden>
      </td>
      <td colspan="3">
        <select class="gato custom-select custom-select-md" name="s30" id="s30">
        <?php require "selectpeli.php";?>
        </select>
        <input type="text" name="aux6" id="aux30" hidden>
        <input type="text" id="res30" hidden>
      </td>
    </tr>
    <tr class="a" ><td colspan="6" hidden>Click aca para agregar o quitar fila</td></tr>
    <tr class="extraf">
      <td>
        <input type="time" value="" name="ini28" id="ini28" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin28" id="fin28" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep28" id="tep28"  style="width: 50px;" disabled autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini29" id="ini29" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin29" id="fin29" readonly autocomplete="off">
      </td>
      <td>
        <input value="0"  type="text" name="tep29" id="tep29"  style="width: 50px;" disabled autocomplete="off">
      </td>
      <td>
        <input type="time" value="" name="ini30" id="ini30" autocomplete="off">
      </td>
      <td>
        <input type="time" name="fin30" id="fin30" readonly autocomplete="off">
      </td>
      <td>
        <input value="0" type="text" name="tep30" id="tep30"  style="width: 50px;" disabled autocomplete="off">
      </td>
    </tr>
    <!--FIN FILA 10-->
    
  </tbody>
</table>
  
    </div>
  </div>

</div>
                <div class="row">
                  
                  <div class="update ml-auto mr-auto">
                  
                </div>
                </div>
            </div>
          </div>
        </div>
        
      <!--</form>-->

      
         
                      
                  
        
        </div>
       <br>
                <br>
                <br>
                
                
              
			   <div class="row">
		   		<div class="animated fadeIn col-md-12">
				    <div >
              <div class="card">
                <div class="card-header">
                    <strong class="card-title">Lista de Programas</strong>
                </div>
                <div class="card-body">
                  <button class="btn-primary btn-round" onclick="enviar()" style="float: right;"> ENVIAR</button>
                              <input id="resp" hidden></input>
                  <table id="bootstrap-data-table" class="table table-striped table-bordered" style="font-size: 15px; ">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="width: 200px">Titulo</th>
                                            <th></th>
                                            <th>Duracion (minutos)</th>
                                            <th>Clasificacion</th>
                                            <th>Formato</th>
                                            <th>Dob/Sub</th>
                                            <th>Distribuidor</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <?php
  require "../Login/conn.php";
  
  $mostrar="SELECT p.*, d.ID as did, d.nombre as dis FROM pelicula p,distribuidor d WHERE p.idDistro=d.ID ORDER BY p.IDPeli DESC" ;

  $sq=mysqli_query($conexion,$mostrar);
  $row=mysqli_num_rows($sq);
  if($row>0){
    if($sq){
        $s=1;
        while($ser=mysqli_fetch_array($sq)){
          echo"<tr>
          <td>".$s."</td>
          <td>".$ser['nombre']."</td>
          <td align='center'><input type='checkbox' class ='chk' value='".$ser['IDPeli']."' >".$ser['IDPeli']." </td>
          <td>".$ser['duracion']."</td>
          <td>".$ser['clasificacion']."</td>
          <td>".$ser['formato']."</td>
          <td>".$ser['subDob']."</td>
          <td>".$ser['dis']."</td>";

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
      <div class="clearfix"></div>

      <div id="jh"></div>
    </div>
  </div>
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
    <script src="contar.js"></script>
    <script src="progra.js"></script>
    
    <script src="tiempoep.js"></script>
    <script src="recuperar.js"></script>
    <script src="actualizar.js"></script>
    <script src="sumhorasini.js"></script>
    <script src="recalcular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript">
       
  </script>

</body>

</html>
<script type="text/javascript">

function newDoc() {
  if(confirm("Esta por crear una nueva programacion ¿Desea continuar?")){
    window.location.assign("indexprog.php")
  }
  
}
function principal() {
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("../principal/principal.php")
  }
  
}
function distro() {
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("../distroingre/distroingre.php")
  }
  
}
function peli() {
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("../peliingre/peliingre.php")
  }
  
}
function prog(){
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("indexprog.php")
  }
}
function report(){
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("../reportep/indexrep.php")
  }
}
function respa(){
  if(confirm("Va a realizar un respaldo de la base datos ¿Desea continuar?")){
    window.location.assign("../RespaldoBD/respaldoBD.php")
  }
}
function logout(){
  if(confirm("Esta por abandonar esta pagina, asegurese de guardar la informacion primero. ¿Desea continuar?")){
    window.location.assign("../Login/index.html")
  }
}




$('#btnrecupera').click(function(){

  $.ajax({
          type: 'POST',
          url: 'actualizar.php',
          success:function(resp){
            $('#btnactualizar').html(resp);
            console.log(resp);
          }       
        });
})

  $('tr.a').on('click', function () { 
    $('tr.extraf').toggle(); 
    $('#s19').val("");
    $('#res19').val("");
    $('#aux19').val("");
    $('#ini19').val("");
    $('#fin19').val("");
    $('#s20').val("");
    $('#res20').val("");
    $('#aux20').val("");
    $('#ini20').val("");
    $('#fin20').val("");
    $('#s21').val("");
    $('#res21').val("");
    $('#aux21').val("");
    $('#ini21').val("");
    $('#fin21').val("");
    $('#s22').val("");
    $('#res22').val("");
    $('#aux22').val("");
    $('#ini22').val("");
    $('#fin22').val("");
    $('#s23').val("");
    $('#res23').val("");
    $('#aux23').val("");
    $('#ini23').val("");
    $('#fin23').val("");
    $('#s24').val("");
    $('#res24').val("");
    $('#aux24').val("");
    $('#ini24').val("");
    $('#fin24').val("");
    $('#s25').val("");
    $('#res25').val("");
    $('#aux25').val("");
    $('#ini25').val("");
    $('#fin25').val("");
    $('#s26').val("");
    $('#res26').val("");
    $('#aux26').val("");
    $('#ini26').val("");
    $('#fin26').val("");
    $('#s27').val("");
    $('#res27').val("");
    $('#aux27').val("");
    $('#ini27').val("");
    $('#fin27').val("");
    $('#s28').val("");
    $('#res28').val("");
    $('#aux28').val("");
    $('#ini28').val("");
    $('#fin28').val("");
    $('#s29').val("");
    $('#res29').val("");
    $('#aux29').val("");
    $('#ini29').val("");
    $('#fin29').val("");
    $('#s30').val("");
    $('#res30').val("");
    $('#aux30').val("");
    $('#ini30').val("");
    $('#fin30').val("");
});

  function enviar(){
      var selected = [];
        $(".chk:checkbox:checked").each(function() {
          selected.push($(this).val());
        });
        //var jsonString = JSON.stringify(selected);
        /*for(var x=0; x<selected.length;x++){
                console.log(selected[x]);
                alert(selected[x]);
             }*/
        $.ajax({
          type: 'POST',
          url: '../programacion/selectpeli.php',
          data: {data: selected},
          success:function(res){
           alert("Peliculas cargadas");
           $('.gato').html(res).fadeIn();
           //var json_obj = $.parseJSON(res);
           //$('#resp').val(res);
           for(var x=0; x<selected.length;x++){
                console.log(selected[x]);
                
             }
            $.ajax({
            type: 'POST',
            url: '../programacion/cargartabla.php',
            data: {data1: selected},  
            success:function(res2){
              $('.gato2').html(res2).fadeIn();
            }
            });
          }
        });
       
   }   
   function enviarexcel(){
//TABLA PROGRAMACION INICIO
      var fi=$('#fi').val();
      var ff=$('#ff').val();
      if(fi=="" || ff==""){
        alert("Seleccione fechas");
      }
      console.log(fi+" "+ff);
    var ini1 = $('#ini1').val();
    var ini2 = $('#ini2').val();
    var ini3 = $('#ini3').val();
    var ini4 = $('#ini4').val();
    var ini5 = $('#ini5').val();
    var ini6 = $('#ini6').val();
    var ini7 = $('#ini7').val();
    var ini8 = $('#ini8').val();
    var ini9 = $('#ini9').val();
    var ini10 = $('#ini10').val();
    var ini11 = $('#ini11').val();
    var ini12 = $('#ini12').val();
    var ini13 = $('#ini13').val();
    var ini14 = $('#ini14').val();
    var ini15 = $('#ini15').val();
    var ini16 = $('#ini16').val();
    var ini17 = $('#ini17').val();
    var ini18 = $('#ini18').val();
    var ini19 = $('#ini19').val();
    var ini20 = $('#ini20').val();
    var ini21 = $('#ini21').val();
    var ini22 = $('#ini22').val();
    var ini23 = $('#ini23').val();
    var ini24 = $('#ini24').val();
    var ini25 = $('#ini25').val();
    var ini26 = $('#ini26').val();
    var ini27 = $('#ini27').val();
    var ini28 = $('#ini28').val();
    var ini29 = $('#ini29').val();
    var ini30 = $('#ini30').val();


    var fin1 = $('#fin1').val();
    var fin2 = $('#fin2').val();
    var fin3 = $('#fin3').val();
    var fin4 = $('#fin4').val();
    var fin5 = $('#fin5').val();
    var fin6 = $('#fin6').val();
    var fin7 = $('#fin7').val();
    var fin8 = $('#fin8').val();
    var fin9 = $('#fin9').val();
    var fin10 = $('#fin10').val();
    var fin11 = $('#fin11').val();
    var fin12 = $('#fin12').val();
    var fin13 = $('#fin13').val();
    var fin14 = $('#fin14').val();
    var fin15 = $('#fin15').val();
    var fin16 = $('#fin16').val();
    var fin17 = $('#fin17').val();
    var fin18 = $('#fin18').val();
    var fin19 = $('#fin19').val();
    var fin20 = $('#fin20').val();
    var fin21 = $('#fin21').val();
    var fin22 = $('#fin22').val();
    var fin23 = $('#fin23').val();
    var fin24 = $('#fin24').val();
    var fin25 = $('#fin25').val();
    var fin26 = $('#fin26').val();
    var fin27 = $('#fin27').val();
    var fin28 = $('#fin28').val();
    var fin29 = $('#fin29').val();
    var fin30 = $('#fin30').val();

    var s1=$('#s1 option:selected').text();if (s1=="seleccione...") {s1="";}
    var s2=$('#s2 option:selected').text();if (s2=="seleccione...") {s2="";}
    var s3=$('#s3 option:selected').text();if (s3=="seleccione...") {s3="";}
    var s4=$('#s4 option:selected').text();if (s4=="seleccione...") {s4="";}
    var s5=$('#s5 option:selected').text();if (s5=="seleccione...") {s5="";}
    var s6=$('#s6 option:selected').text();if (s6=="seleccione...") {s6="";}
    var s7=$('#s7 option:selected').text();if (s7=="seleccione...") {s7="";}
    var s8=$('#s8 option:selected').text();if (s8=="seleccione...") {s8="";}
    var s9=$('#s9 option:selected').text();if (s9=="seleccione...") {s9="";}
    var s10=$('#s10 option:selected').text();if (s10=="seleccione...") {s10="";}
    var s11=$('#s11 option:selected').text();if (s11=="seleccione...") {s11="";}
    var s12=$('#s12 option:selected').text();if (s12=="seleccione...") {s12="";}
    var s13=$('#s13 option:selected').text();if (s13=="seleccione...") {s13="";}
    var s14=$('#s14 option:selected').text();if (s14=="seleccione...") {s14="";}
    var s15=$('#s15 option:selected').text();if (s15=="seleccione...") {s15="";}
    var s16=$('#s16 option:selected').text();if (s16=="seleccione...") {s16="";}
    var s17=$('#s17 option:selected').text();if (s17=="seleccione...") {s17="";}
    var s18=$('#s18 option:selected').text();if (s18=="seleccione...") {s18="";}
    var s19=$('#s19 option:selected').text();if (s19=="seleccione...") {s19="";}
    var s20=$('#s20 option:selected').text();if (s20=="seleccione...") {s20="";}
    var s21=$('#s21 option:selected').text();if (s21=="seleccione...") {s21="";}
    var s22=$('#s22 option:selected').text();if (s22=="seleccione...") {s22="";}
    var s23=$('#s23 option:selected').text();if (s23=="seleccione...") {s23="";}
    var s24=$('#s24 option:selected').text();if (s24=="seleccione...") {s24="";}
    var s25=$('#s25 option:selected').text();if (s25=="seleccione...") {s25="";}
    var s26=$('#s26 option:selected').text();if (s26=="seleccione...") {s26="";}
    var s27=$('#s27 option:selected').text();if (s27=="seleccione...") {s27="";}
    var s28=$('#s28 option:selected').text();if (s28=="seleccione...") {s28="";}
    var s29=$('#s29 option:selected').text();if (s29=="seleccione...") {s29="";}
    var s30=$('#s30 option:selected').text();if (s30=="seleccione...") {s30="";}
//TABLA PROGRAMACION FIN
//TABLA PELICULAS INICIO
    var info1=$('#info1 option:selected').text();if (info1=="seleccione...") {info1="";}
    var info2=$('#info2 option:selected').text();if (info2=="seleccione...") {info2="";}
    var info3=$('#info3 option:selected').text();if (info3=="seleccione...") {info3="";}
    var info4=$('#info4 option:selected').text();if (info4=="seleccione...") {info4="";}
    var info5=$('#info5 option:selected').text();if (info5=="seleccione...") {info5="";}
    var info6=$('#info6 option:selected').text();if (info6=="seleccione...") {info6="";}
    var info7=$('#info7 option:selected').text();if (info7=="seleccione...") {info7="";}
    var info8=$('#info8 option:selected').text();if (info8=="seleccione...") {info8="";}
    var info9=$('#info9 option:selected').text();if (info9=="seleccione...") {info9="";}
    var info10=$('#info10 option:selected').text();if (info10=="seleccione...") {info10="";}
    var info11=$('#info11 option:selected').text();if (info11=="seleccione...") {info11="";}
    var info12=$('#info12 option:selected').text();if (info12=="seleccione...") {info12="";}
    var info13=$('#info13 option:selected').text();if (info13=="seleccione...") {info13="";}
    var info14=$('#info14 option:selected').text();if (info14=="seleccione...") {info14="";}

    var t1=$('#ti1').val();
    var t2=$('#ti2').val();
    var t3=$('#ti3').val();
    var t4=$('#ti4').val();
    var t5=$('#ti5').val();
    var t6=$('#ti6').val();
    var t7=$('#ti7').val();
    var t8=$('#ti8').val();
    var t9=$('#ti9').val();
    var t10=$('#ti10').val();
    var t11=$('#ti11').val();
    var t12=$('#ti12').val();
    var t13=$('#ti13').val();
    var t14=$('#ti14').val();

    var cla1=$('#cla1').val();
    var cla2=$('#cla2').val();
    var cla3=$('#cla3').val();
    var cla4=$('#cla4').val();
    var cla5=$('#cla5').val();
    var cla6=$('#cla6').val();
    var cla7=$('#cla7').val();
    var cla8=$('#cla8').val();
    var cla9=$('#cla9').val();
    var cla10=$('#cla10').val();
    var cla11=$('#cla11').val();
    var cla12=$('#cla12').val();
    var cla13=$('#cla13').val();
    var cla14=$('#cla14').val();

    var pre1=$('#pre1').val();
    var pre2=$('#pre2').val();
    var pre3=$('#pre3').val();
    var pre4=$('#pre4').val();
    var pre5=$('#pre5').val();
    var pre6=$('#pre6').val();
    var pre7=$('#pre7').val();
    var pre8=$('#pre8').val();
    var pre9=$('#pre9').val();
    var pre10=$('#pre10').val();
    var pre11=$('#pre11').val();
    var pre12=$('#pre12').val();
    var pre13=$('#pre13').val();
    var pre14=$('#pre14').val();

    var nro1=$('#nro1').val();
    var nro2=$('#nro2').val();
    var nro3=$('#nro3').val();
    var nro4=$('#nro4').val();
    var nro5=$('#nro5').val();
    var nro6=$('#nro6').val();
    var nro7=$('#nro7').val();
    var nro8=$('#nro8').val();
    var nro9=$('#nro9').val();
    var nro10=$('#nro10').val();
    var nro11=$('#nro11').val();
    var nro12=$('#nro12').val();
    var nro13=$('#nro13').val();
    var nro14=$('#nro14').val();

    var canti1=$('#canti1').val();
    var canti2=$('#canti2').val();
    var canti3=$('#canti3').val();
    var canti4=$('#canti4').val();
    var canti5=$('#canti5').val();
    var canti6=$('#canti6').val();
    var canti7=$('#canti7').val();
    var canti8=$('#canti8').val();
    var canti9=$('#canti9').val();
    var canti10=$('#canti10').val();
    var canti11=$('#canti11').val();
    var canti12=$('#canti12').val();
    var canti13=$('#canti13').val();
    var canti14=$('#canti14').val();
//TABLA¨PELICULAS FIN
      $.ajax({
        type: 'POST',
        url: 'envio1.php',
        data: {fe1:fi, fe2: ff,
        ini1:ini1,
ini2:ini2,
ini3:ini3,
ini4:ini4,
ini5:ini5,
ini6:ini6,
ini7:ini7,
ini8:ini8,
ini9:ini9,
ini10:ini10,
ini11:ini11,
ini12:ini12,
ini13:ini13,
ini14:ini14,
ini15:ini15,
ini16:ini16,
ini17:ini17,
ini18:ini18,
ini19:ini19,
ini20:ini20,
ini21:ini21,
ini22:ini22,
ini23:ini23,
ini24:ini24,
ini25:ini25,
ini26:ini26,
ini27:ini27,
ini28:ini28,
ini29:ini29,
ini30:ini30,

fin1:fin1,
fin2:fin2,
fin3:fin3,
fin4:fin4,
fin5:fin5,
fin6:fin6,
fin7:fin7,
fin8:fin8,
fin9:fin9,
fin10:fin10,
fin11:fin11,
fin12:fin12,
fin13:fin13,
fin14:fin14,
fin15:fin15,
fin16:fin16,
fin17:fin17,
fin18:fin18,
fin19:fin19,
fin20:fin20,
fin21:fin21,
fin22:fin22,
fin23:fin23,
fin24:fin24,
fin25:fin25,
fin26:fin26,
fin27:fin27,
fin28:fin28,
fin29:fin29,
fin30:fin30,

s1:s1,
s2:s2,
s3:s3,
s4:s4,
s5:s5,
s6:s6,
s7:s7,
s8:s8,
s9:s9,
s10:s10,
s11:s11,
s12:s12,
s13:s13,
s14:s14,
s15:s15,
s16:s16,
s17:s17,
s18:s18,
s19:s19,
s20:s20,
s21:s21,
s22:s22,
s23:s23,
s24:s24,
s25:s25,
s26:s26,
s27:s27,
s28:s28,
s29:s29,
s30:s30,

info1:info1,
info2:info2,
info3:info3,
info4:info4,
info5:info5,
info6:info6,
info7:info7,
info8:info8,
info9:info9,
info10:info10,
info11:info11,
info12:info12,
info13:info13,
info14:info14,

t1:t1,
t2:t2,
t3:t3,
t4:t4,
t5:t5,
t6:t6,
t7:t7,
t8:t8,
t9:t9,
t10:t10,
t11:t11,
t12:t12,
t13:t13,
t14:t14,

cla1:cla1,
cla2:cla2,
cla3:cla3,
cla4:cla4,
cla5:cla5,
cla6:cla6,
cla7:cla7,
cla8:cla8,
cla9:cla9,
cla10:cla10,
cla11:cla11,
cla12:cla12,
cla13:cla13,
cla14:cla14,

pre1:pre1,
pre2:pre2,
pre3:pre3,
pre4:pre4,
pre5:pre5,
pre6:pre6,
pre7:pre7,
pre8:pre8,
pre9:pre9,
pre10:pre10,
pre11:pre11,
pre12:pre12,
pre13:pre13,
pre14:pre14,

nro1:nro1,
nro2:nro2,
nro3:nro3,
nro4:nro4,
nro5:nro5,
nro6:nro6,
nro7:nro7,
nro8:nro8,
nro9:nro9,
nro10:nro10,
nro11:nro11,
nro12:nro12,
nro13:nro13,
nro14:nro14,

canti1:canti1,
canti2:canti2,
canti3:canti3,
canti4:canti4,
canti5:canti5,
canti6:canti6,
canti7:canti7,
canti8:canti8,
canti9:canti9,
canti10:canti10,
canti11:canti11,
canti12:canti12,
canti13:canti13,
canti14:canti14

        },
        success:function(resp){
          $('#expo').html(resp);
          console.log(resp);
        }
      });
   }

   function datostabla(){
    var finicio = $('#fi').val();
    var ffinal = $('#ff').val();
    var ini1 = $('#ini1').val();if(ini1==""){ini1 = "25:25"};
    var ini2 = $('#ini2').val();if(ini2==""){ini2 = "25:25"};
    var ini3 = $('#ini3').val();if(ini3==""){ini3 = "25:25"};
    var ini4 = $('#ini4').val();if(ini4==""){ini4 = "25:25"};
    var ini5 = $('#ini5').val();if(ini5==""){ini5 = "25:25"};
    var ini6 = $('#ini6').val();if(ini6==""){ini6 = "25:25"};
    var ini7 = $('#ini7').val();if(ini7==""){ini7 = "25:25"};
    var ini8 = $('#ini8').val();if(ini8==""){ini8 = "25:25"};
    var ini9 = $('#ini9').val();if(ini9==""){ini9 = "25:25"};
    var ini10 = $('#ini10').val();if(ini10==""){ini10 = "25:25"};
    var ini11 = $('#ini11').val();if(ini11==""){ini11 = "25:25"};
    var ini12 = $('#ini12').val();if(ini12==""){ini12 = "25:25"};
    var ini13 = $('#ini13').val();if(ini13==""){ini13 = "25:25"};
    var ini14 = $('#ini14').val();if(ini14==""){ini14 = "25:25"};
    var ini15 = $('#ini15').val();if(ini15==""){ini15 = "25:25"};
    var ini16 = $('#ini16').val();if(ini16==""){ini16 = "25:25"};
    var ini17 = $('#ini17').val();if(ini17==""){ini17 = "25:25"};
    var ini18 = $('#ini18').val();if(ini18==""){ini18 = "25:25"};
    var ini19 = $('#ini19').val();if(ini19==""){ini19 = "25:25"};
    var ini20 = $('#ini20').val();if(ini20==""){ini20 = "25:25"};
    var ini21 = $('#ini21').val();if(ini21==""){ini21 = "25:25"};
    var ini22 = $('#ini22').val();if(ini22==""){ini22 = "25:25"};
    var ini23 = $('#ini23').val();if(ini23==""){ini23 = "25:25"};
    var ini24 = $('#ini24').val();if(ini24==""){ini24 = "25:25"};
    var ini25 = $('#ini25').val();if(ini25==""){ini25 = "25:25"};
    var ini26 = $('#ini26').val();if(ini26==""){ini26 = "25:25"};
    var ini27 = $('#ini27').val();if(ini27==""){ini27 = "25:25"};
    var ini28 = $('#ini28').val();if(ini28==""){ini28 = "25:25"};
    var ini29 = $('#ini29').val();if(ini29==""){ini29 = "25:25"};
    var ini30 = $('#ini30').val();if(ini30==""){ini30 = "25:25"};

    var fin1 = $('#fin1').val();if(fin1==""){fin1 = "25:25"};
    var fin2 = $('#fin2').val();if(fin2==""){fin2 = "25:25"};
    var fin3 = $('#fin3').val();if(fin3==""){fin3 = "25:25"};
    var fin4 = $('#fin4').val();if(fin4==""){fin4 = "25:25"};
    var fin5 = $('#fin5').val();if(fin5==""){fin5 = "25:25"};
    var fin6 = $('#fin6').val();if(fin6==""){fin6 = "25:25"};
    var fin7 = $('#fin7').val();if(fin7==""){fin7 = "25:25"};
    var fin8 = $('#fin8').val();if(fin8==""){fin8 = "25:25"};
    var fin9 = $('#fin9').val();if(fin9==""){fin9 = "25:25"};
    var fin10 = $('#fin10').val();if(fin10==""){fin10 = "25:25"};
    var fin11 = $('#fin11').val();if(fin11==""){fin11 = "25:25"};
    var fin12 = $('#fin12').val();if(fin12==""){fin12 = "25:25"};
    var fin13 = $('#fin13').val();if(fin13==""){fin13 = "25:25"};
    var fin14 = $('#fin14').val();if(fin14==""){fin14 = "25:25"};
    var fin15 = $('#fin15').val();if(fin15==""){fin15 = "25:25"};
    var fin16 = $('#fin16').val();if(fin16==""){fin16 = "25:25"};
    var fin17 = $('#fin17').val();if(fin17==""){fin17 = "25:25"};
    var fin18 = $('#fin18').val();if(fin18==""){fin18 = "25:25"};
    var fin19 = $('#fin19').val();if(fin19==""){fin19 = "25:25"};
    var fin20 = $('#fin20').val();if(fin20==""){fin20 = "25:25"};
    var fin21 = $('#fin21').val();if(fin21==""){fin21 = "25:25"};
    var fin22 = $('#fin22').val();if(fin22==""){fin22 = "25:25"};
    var fin23 = $('#fin23').val();if(fin23==""){fin23 = "25:25"};
    var fin24 = $('#fin24').val();if(fin24==""){fin24 = "25:25"};
    var fin25 = $('#fin25').val();if(fin25==""){fin25 = "25:25"};
    var fin26 = $('#fin26').val();if(fin26==""){fin26 = "25:25"};
    var fin27 = $('#fin27').val();if(fin27==""){fin27 = "25:25"};
    var fin28 = $('#fin28').val();if(fin28==""){fin28 = "25:25"};
    var fin29 = $('#fin29').val();if(fin29==""){fin29 = "25:25"};
    var fin30 = $('#fin30').val();if(fin30==""){fin30 = "25:25"};

    var s1=$('#s1').val();if(s1==""){s1 = -1};
    var s2=$('#s2').val();if(s2==""){s2 = -1};
    var s3=$('#s3').val();if(s3==""){s3 = -1};
    var s4=$('#s4').val();if(s4==""){s4 = -1};
    var s5=$('#s5').val();if(s5==""){s5 = -1};
    var s6=$('#s6').val();if(s6==""){s6 = -1};
    var s7=$('#s7').val();if(s7==""){s7 = -1};
    var s8=$('#s8').val();if(s8==""){s8 = -1};
    var s9=$('#s9').val();if(s9==""){s9 = -1};
    var s10=$('#s10').val();if(s10==""){s10 = -1};
    var s11=$('#s11').val();if(s11==""){s11 = -1};
    var s12=$('#s12').val();if(s12==""){s12 = -1};
    var s13=$('#s13').val();if(s13==""){s13 = -1};
    var s14=$('#s14').val();if(s14==""){s14 = -1};
    var s15=$('#s15').val();if(s15==""){s15 = -1};
    var s16=$('#s16').val();if(s16==""){s16 = -1};
    var s17=$('#s17').val();if(s17==""){s17 = -1};
    var s18=$('#s18').val();if(s18==""){s18 = -1};
    var s19=$('#s19').val();if(s19==""){s19 = -1};
    var s20=$('#s20').val();if(s20==""){s20 = -1};
    var s21=$('#s21').val();if(s21==""){s21 = -1};
    var s22=$('#s22').val();if(s22==""){s22 = -1};
    var s23=$('#s23').val();if(s23==""){s23 = -1};
    var s24=$('#s24').val();if(s24==""){s24 = -1};
    var s25=$('#s25').val();if(s25==""){s25 = -1};
    var s26=$('#s26').val();if(s26==""){s26 = -1};
    var s27=$('#s27').val();if(s27==""){s27 = -1};
    var s28=$('#s28').val();if(s28==""){s28 = -1};
    var s29=$('#s29').val();if(s29==""){s29 = -1};
    var s30=$('#s30').val();if(s30==""){s30 = -1};

    var tep1=$('#tep1').val();
    var tep2=$('#tep2').val();
    var tep3=$('#tep3').val();
    var tep4=$('#tep4').val();
    var tep5=$('#tep5').val();
    var tep6=$('#tep6').val();
    var tep7=$('#tep7').val();
    var tep8=$('#tep8').val();
    var tep9=$('#tep9').val();
    var tep10=$('#tep10').val();
    var tep11=$('#tep11').val();
    var tep12=$('#tep12').val();
    var tep13=$('#tep13').val();
    var tep14=$('#tep14').val();
    var tep15=$('#tep15').val();
    var tep16=$('#tep16').val();
    var tep17=$('#tep17').val();
    var tep18=$('#tep18').val();
    var tep19=$('#tep19').val();
    var tep20=$('#tep20').val();
    var tep21=$('#tep21').val();
    var tep22=$('#tep22').val();
    var tep23=$('#tep23').val();
    var tep24=$('#tep24').val();
    var tep25=$('#tep25').val();
    var tep26=$('#tep26').val();
    var tep27=$('#tep27').val();
    var tep28=$('#tep28').val();
    var tep29=$('#tep29').val();
    var tep30=$('#tep30').val();



    $.ajax({
      type: 'POST',
      url: 'insertarpro.php',
      data:{ finicio:finicio, ffinal:ffinal, ini1:ini1, ini2:ini2, ini3:ini3, ini4:ini4, ini5:ini5, ini6:ini6, ini7:ini7, ini8:ini8, ini9:ini9, ini10:ini10, ini11:ini11, ini12:ini12, ini13:ini13, ini14:ini14, ini15:ini15, ini16:ini16, ini17:ini17, ini18:ini18, ini19:ini19, ini20:ini20, ini21:ini21, ini22:ini22, ini23:ini23, ini24:ini24, ini25:ini25, ini26:ini26, ini27:ini27,ini28:ini28,ini29:ini29,ini30:ini30, fin1:fin1, fin2:fin2, fin3:fin3, fin4:fin4, fin5:fin5, fin6:fin6, fin7:fin7, fin8:fin8, fin9:fin9, fin10:fin10, fin11:fin11, fin12:fin12, fin13:fin13, fin14:fin14, fin15:fin15, fin16:fin16, fin17:fin17, fin18:fin18, fin19:fin19, fin20:fin20, fin21:fin21, fin22:fin22, fin23:fin23, fin24:fin24,fin25:fin25,fin26:fin26,fin27:fin27,fin28:fin28,fin29:fin29,fin30:fin30, s1:s1, s2:s2, s3:s3, s4:s4, s5:s5, s6:s6, s7:s7, s8:s8, s9:s9, s10:s10, s11:s11, s12:s12, s13:s13, s14:s14, s15:s15, s16:s16, s17:s17, s18:s18, s19:s19, s20:s20, s21:s21, s22:s22, s23:s23, s24:s24, s25:s25, s26:s26, s27:s27, s28:s28, s29:s29, s30:s30,
      tep1:tep1,
    tep2:tep2,
    tep3:tep3,
    tep4:tep4,
    tep5:tep5,
    tep6:tep6,
    tep7:tep7,
    tep8:tep8,
    tep9:tep9,
    tep10:tep10,
    tep11:tep11,
    tep12:tep12,
    tep13:tep13,
    tep14:tep14,
    tep15:tep15,
    tep16:tep16,
    tep17:tep17,
    tep18:tep18,
    tep19:tep19,
    tep20:tep20,
    tep21:tep21,
    tep22:tep22,
    tep23:tep23,
    tep24:tep24,
    tep25:tep25,
    tep26:tep26,
    tep27:tep27,
    tep28:tep28,
    tep29:tep29,
    tep30:tep30 }, 
      success:function(res){
        if(res=="1"){
          alert("La semana ya existe, Error");
        }else{
          alert("Se Guardo la programacion correctamente.");
        }
        
    }
    });

   }
  




$('#selInicio').change(function(){
  var valor = $(this).val();
  $.ajax({
    type: 'POST',
    url:'selectsemanafinal.php',
    data: {valor: valor},
    success:function(res){
      $('#txtfinal').val(res);

    }
  })


})

</script>

