<div  id="largeModal1" class="modal fade show" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                            <h5 class="modal-title" id="largeModalLabel">Large Modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
            </div>
            <form method="POST" action="actualizarp2.php">
                  <div class="row">
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <input id="id2" type="text" name="id2" hidden/>
                        <label>Titulo:</label>
                        <input type="text" id="titulopeli1" name="titulopeli1" class="form-control" placeholder="Titulo de la Pelicula" value="" style="text-transform: uppercase;">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                      <div class="form-group">
                        <label>Duracion (minutos):</label>
                        <input type="number" id="duracion1" name="duracion1" class="form-control" placeholder="Minutos" value="0" style="text-transform: uppercase;">
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label>Clasificacion:</label>
                        <select class="form-control" id="clasifi1" name="clasifi1" placeholder="Seleccione Clasificacion" style="text-transform: uppercase;">
                          <option>APTO PARA TODO PUBLICO</option>
                          <option>MAYORES DE 12 AÑOS</option>
                          <option>MAYORES DE 13 AÑOS</option>
                          <option>MAYORES DE 14 AÑOS</option>
                          <option>MAYORES DE 15 AÑOS</option>
                          <option>MAYORES DE 18 AÑOS</option>
                          <option>MAYORES DE 21 AÑOS</option>
                        </select>
                        
                      </div>
                    </div>

                  </div>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label>Doblado/Subtitulado:</label>

                        <input type="text" name="a" id="as1" hidden />
                        <input type="text" name="as" id="as2" hidden />

                        <select class="form-control" id="dubsub1" name="dubsub1" placeholder="Seleccione" style="text-transform: uppercase;">
                          <option value="DOBLADO">DOBLADO</option>
                          <option value="SUBTITULADO">SUBTITULADO</option>
                        </select>
                        
                      </div>
                    </div>
                    
                    <div class="col-md-5 pl-1">
                      <div class="form-group">
                        <label>Distribuidor:</label>
                        
                        <select id="distro1" name="distro1" class="form-control" required>
                          <?php
                          require "../Login/conn.php";
                       $sele="SELECT ID,nombre FROM distribuidor ORDER BY nombre";
                          $rep=mysqli_query($conexion,$sele);
                          if($rep){
                            while($ar=mysqli_fetch_array($rep)){
                    echo"<option value='".$ar['ID']."'>".$ar['nombre']."</option>";

                            }

                          }

                          ?>

                        </select>

                      </div>
                    </div>

                      <div class="col-md-2"> <label>Formato:</label><br>
                      
                      <p><label class="switch switch-3d switch-primary mr-3"><input type="checkbox" id="2d1" name="2d1" class="switch-input"> <span class="switch-label"></span> <span class="switch-handle"></span>2D</label>
                      <label class="switch switch-3d switch-primary mr-3"><input type="checkbox" id="3d1" name="3d1" class="switch-input" > <span class="switch-label"></span> <span class="switch-handle"></span>3D</label> </p>
                   </div>
                  </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-round"><i class="fa fa-spinner">&nbsp;&nbsp;&nbsp;</i>Actualizar</button>
                        </div>
                    </form>
        </div>
    </div>
</div>
</div>

              