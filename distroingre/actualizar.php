<div  id="largeModal" class="modal fade show" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                            <h5 class="modal-title" id="largeModalLabel">Large Modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
            </div>
            <div class="modal-body">
                <form action="actualizar2.php" method="POST">
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <input id="id1" type="text" name="id1" hidden>
                        <label>Nombre:</label>
                        <input type="text" required name="nombredistro1" id="nombredistro1" class="form-control" style="text-transform: uppercase;" placeholder="Nombre del Distribuidor" value="" >
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Direccion:</label>
                        <input type="text" name="dirdistro1" id="dirdistro1" class="form-control"  style="text-transform: uppercase;" placeholder="Direccion/Calles/Ciudad" value="">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Responsable:</label>
                        <input type="text" name="respdistro1" id="respdistro1" class="form-control"style="text-transform: uppercase;" placeholder="Nombre del Responsable" value="">
                        
                      </div>
                    </div>
                  
                  
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <label>Telefono:</label>
                        <input type="text" name="teldistro1" id="teldistro1" class="form-control" placeholder="Telefono/Celular" style="text-transform: uppercase;" value="">
                        
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
              
            </div>
                        <div class="modal-footer">
                          
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-round"><i class="fa fa-spinner">&nbsp;&nbsp;&nbsp;</i>Insertar Distribuidor</button>
                        </div>

        </div>
    </div>
</div>
</div>
</form>
              