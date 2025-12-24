$(document).on('change','#s1',function(){
    var ini1 = $('#ini1').val();
    var ini4 = $('#ini4').val();
    var ini7 = $('#ini7').val();
    var ini10 = $('#ini10').val();
    var ini13 = $('#ini13').val();
    var ini16 = $('#ini16').val();
    var ini19 = $('#ini19').val();
    var ini22 = $('#ini22').val();
    var fin1 = $('#fin1').val();
    var fin4 = $('#fin4').val();
    var fin7 = $('#fin7').val();
    var fin10 = $('#fin10').val();
    var fin13 = $('#fin13').val();
    var fin16 = $('#fin16').val();
    var fin19 = $('#fin19').val();
    var fin22 = $('#fin22').val();
    
    var resta = $('#resta').val();
    var tep = $('#tep1').val();

    console.log(resta+" esta es la resta");
    $.ajax({
    	type: 'POST',
    	url: 'sumhoraselect.php',
    	data:{ 
        ini1:ini1,
    	ini4:ini4,
    	ini7:ini7,
		ini10:ini10,
		ini13:ini13,
		ini16:ini16,
		ini19:ini19,
		ini22:ini22,
        fin1:fin1,		
		fin4:fin4,
		fin7:fin7,
		fin10:fin10,
		fin13:fin13,
		fin16:fin16,
		fin19:fin19,
		fin22:fin22,
		resta:resta,
        tep:tep
		},
    	success:function(resp){
    		var arreglo = eval(resp);
    		console.log(arreglo);
            $('#ini4').val(arreglo[0]);
            $('#fin4').val(arreglo[1]);
            $('#ini7').val(arreglo[2]);
            $('#fin7').val(arreglo[3]);
            $('#ini10').val(arreglo[4]);
    		
    	}
    });
    
})