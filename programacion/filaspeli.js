$(document).ready(function(){
	$(document).on('change','#info1',function(){
		var valor = $(this).val();
		//$('#pre1').val(valor);
		$.ajax({
			type: 'POST',
      		url:'mostrarpelis.php',
      		data: {valor: valor},
      		success:function(dur){
        	var arreglo = eval (dur);
        	$('#ti1').val(arreglo[0]);
        	$('#cla1').val(arreglo[1]);
        	$('#nro1').val(arreglo[2]);
      		}
		});
	});
	$(document).on('change','#info2',function(){
		var valor = $(this).val();
		//$('#pre1').val(valor);
		$.ajax({
			type: 'POST',
      		url:'mostrarpelis.php',
      		data: {valor: valor},
      		success:function(dur){
        	var arreglo = eval (dur);
        	$('#ti2').val(arreglo[0]);
        	$('#cla2').val(arreglo[1]);
        	$('#nro2').val(arreglo[2]);
      		}
		});
	});
  $(document).on('change','#info3',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti3').val(arreglo[0]);
          $('#cla3').val(arreglo[1]);
          $('#nro3').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info4',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti4').val(arreglo[0]);
          $('#cla4').val(arreglo[1]);
          $('#nro4').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info5',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti5').val(arreglo[0]);
          $('#cla5').val(arreglo[1]);
          $('#nro5').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info6',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti6').val(arreglo[0]);
          $('#cla6').val(arreglo[1]);
          $('#nro6').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info7',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti7').val(arreglo[0]);
          $('#cla7').val(arreglo[1]);
          $('#nro7').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info8',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti8').val(arreglo[0]);
          $('#cla8').val(arreglo[1]);
          $('#nro8').val(arreglo[2]);
          }
    });
  }); 
  $(document).on('change','#info9',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti9').val(arreglo[0]);
          $('#cla9').val(arreglo[1]);
          $('#nro9').val(arreglo[2]);
          }
    });
  }); 
  $(document).on('change','#info10',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti10').val(arreglo[0]);
          $('#cla10').val(arreglo[1]);
          $('#nro10').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info11',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti11').val(arreglo[0]);
          $('#cla11').val(arreglo[1]);
          $('#nro11').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info12',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti12').val(arreglo[0]);
          $('#cla12').val(arreglo[1]);
          $('#nro12').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info13',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti13').val(arreglo[0]);
          $('#cla13').val(arreglo[1]);
          $('#nro13').val(arreglo[2]);
          }
    });
  });
  $(document).on('change','#info14',function(){
    var valor = $(this).val();
    //$('#pre1').val(valor);
    $.ajax({
      type: 'POST',
          url:'mostrarpelis.php',
          data: {valor: valor},
          success:function(dur){
          var arreglo = eval (dur);
          $('#ti14').val(arreglo[0]);
          $('#cla14').val(arreglo[1]);
          $('#nro14').val(arreglo[2]);
          }
    });
  });
});