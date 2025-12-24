$('#btrecupera').click(function(){
	var fii=$('#selInicio option:selected').val();
	var fff=$('#txtfinal').val();


var fi = fii;//$('#fi').val();
	var ff = fff;//$('#ff').val();
	console.log(fi+" "+ff);
	$.ajax({
			type:'POST',
			url: 'cargarpelicula.php',
			data:{fi:fi, ff:ff},
			success:function(res){
				
				 $('.gato').html(res).fadeIn();
				 console.log(res);
				$.ajax({
				type:'POST',
				url: 'datosala3.php',
				data:{fi:fi, ff:ff},
				success:function(resp){
				var obj = JSON.parse(resp);
				$('#s3 option:selected').text(obj[0]['nombre']+" "+obj[0]['formato']);
				$('#ini3').val(obj[0]['hora']);
				$('#fin3').val(obj[0]['horafin']);
				$('#s3 option:selected').val(obj[0]['IDPeli']);
				$('#res3').val(obj[0]['duracion']);
				//----------------------------------------------
				$('#s6 option:selected').text(obj[1]['nombre']+" "+obj[1]['formato']);
				$('#ini6').val(obj[1]['hora']);
				$('#fin6').val(obj[1]['horafin']);
				$('#s6 option:selected').val(obj[1]['IDPeli']);
				$('#res6').val(obj[1]['duracion']);
				//----------------------------------------------
				$('#s9 option:selected').text(obj[2]['nombre']+" "+obj[2]['formato']);
				$('#ini9').val(obj[2]['hora']);
				$('#fin9').val(obj[2]['horafin']);
				$('#s9 option:selected').val(obj[2]['IDPeli']);
				$('#res8').val(obj[2]['duracion']);
				//----------------------------------------------
				$('#s12 option:selected').text(obj[3]['nombre']+" "+obj[3]['formato']);
				$('#ini12').val(obj[3]['hora']);
				$('#fin12').val(obj[3]['horafin']);
				$('#s12 option:selected').val(obj[3]['IDPeli']);
				$('#res12').val(obj[3]['duracion']);
				//----------------------------------------------
				$('#s15 option:selected').text(obj[4]['nombre']+" "+obj[4]['formato']);
				$('#ini15').val(obj[4]['hora']);
				$('#fin15').val(obj[4]['horafin']);
				$('#s15 option:selected').val(obj[4]['IDPeli']);
				$('#res15').val(obj[4]['duracion']);
				//----------------------------------------------
				$('#s18 option:selected').text(obj[5]['nombre']+" "+obj[5]['formato']);
				$('#ini18').val(obj[5]['hora']);
				$('#fin18').val(obj[5]['horafin']);
				$('#s18 option:selected').val(obj[5]['IDPeli']);
				$('#res18').val(obj[5]['duracion']);
				//----------------------------------------------
				
				//----------------------------------------------
				console.log(obj);
			}
		});
		}
	});
})