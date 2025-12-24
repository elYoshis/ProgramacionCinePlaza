<!DOCTYPE html>
<html class="no-js" lang="en">
<head>

    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <title>Philosophy</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- mobile specific metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="styles/css/base.css">
    <link rel="stylesheet" href="styles/css/vendor.css">
    <link rel="stylesheet" href="styles/css/main.css">

    <!-- script
    ================================================== -->
    <script src="styles/js/modernizr.js"></script>
    <script src="styles/js/pace.min.js"></script>

    <!-- favicons
    ================================================== -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">


</head>

<body id="top">

    <!-- pageheader
    ================================================== -->
    <section class="s-pageheader s-pageheader--home">

        <header class="header">
            <div class="header__content row">
                
                <a class="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

                <nav class="header__nav-wrap">

                    <h2 class="header__nav-heading h6">Site Navigation</h2>

                    <ul class="header__nav">
                        <li class="current"><a href="index.html" title="">Home</a></li>
                        <li><a href="style-guide.html" title="">Styles</a></li>
                        <li><a href="about.html" title="">About</a></li>
                        <li><a href="contact.html" title="">Contact</a></li>
                    </ul> <!-- end header__nav -->

                    <a href="#0" title="Close Menu" class="header__overlay-close close-mobile-menu">Close</a>

                </nav> <!-- end header__nav-wrap -->

            </div> <!-- header-content -->
        </header> <!-- header -->


        

    </section> <!-- end s-pageheader -->

      <div class="content" >
        <div class="row">
          <form method="POST" action="insertarpro.php">
          <!-- Fechas -->
          <div class="col-md-7">
            <div class="card card-user">
              <div class="card-header">
                <h5 class="card-title">Programacion</h5>
              </div>
              <div class="card-body">
              <div class="row">
                <div class="form-group col-md-5">
                 <label>Fecha Inicio</label>
                 <input type="date" name="finicio" max="3000-12-31" 
                  min="1000-01-01" class="form-control">
                </div>
                <div class="form-group col-md-5">
                  <label >Fecha Final</label>
                  <input type="date" name="ffinal" min="1000-01-01"
                   max="3000-12-31" class="form-control">
                </div>
              </div>
              <!-- Fin De Fechas -->
              <div class="card">
  <div class="card-body">
    <div>
      
    </div>
  </div>
</div>
                <div class="row">
                  <div class="update ml-auto mr-auto">
                      <button type="submit" class="btn btn-primary btn-round"><i class="fa fa-check-circle" >&nbsp;&nbsp;&nbsp;</i>Programar</button>
                  </div>
                </div>
            </div>
          </form>
          </div>
        
        
               <div class="row">
                <div class="animated fadeIn">
                    <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <strong class="card-title">Lista de Programas</strong>
                </div>
                <div class="card-body">
                  <table id="bootstrap-data-table" class="table table-striped table-bordered" style="font-size: 15px;">
                  <thead>
                      <tr>
                        <th>#</th>
                        <th style="width: 200px">Fecha Inicio</th>
                        <th style="width: 300px">Fecha Final</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                        <th>Imprimir</th>
                        <th>Descargar</th>
                      </tr>
                  </thead>
                  
                  </table>              
                </div>
              </div>
                      </div>
          </div>
       </div><!-- .animated -->
        

     </div>
      <div class="clearfix"></div>
    </div>
   
    <script src="styles/js/jquery-3.2.1.min.js"></script>
    <script src="styles/js/plugins.js"></script>
    <script src="styles/js/main.js"></script>

</body>

</html>