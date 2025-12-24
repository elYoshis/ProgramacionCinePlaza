$('#btcontar').click(function(){

var id1= $('#s1 option:selected').text(); if(id1 == "seleccione..."){id1 = -1;}
var id2= $('#s2 option:selected').text(); if(id2 == "seleccione..."){id2 = -1;}
var id3= $('#s3 option:selected').text(); if(id3 == "seleccione..."){id3 = -1;}
var id4= $('#s4 option:selected').text(); if(id4 == "seleccione..."){id4 = -1;}
var id5= $('#s5 option:selected').text(); if(id5 == "seleccione..."){id5 = -1;}
var id6= $('#s6 option:selected').text(); if(id6 == "seleccione..."){id6 = -1;}
var id7= $('#s7 option:selected').text(); if(id7 == "seleccione..."){id7 = -1;}
var id8= $('#s8 option:selected').text(); if(id8 == "seleccione..."){id8 = -1;}
var id9= $('#s9 option:selected').text(); if(id9 == "seleccione..."){id9 = -1;}
var id10= $('#s10 option:selected').text(); if(id10 == "seleccione..."){id10 = -1;}
var id11= $('#s11 option:selected').text(); if(id11 == "seleccione..."){id11 = -1;}
var id12= $('#s12 option:selected').text(); if(id12 == "seleccione..."){id12 = -1;}
var id13= $('#s13 option:selected').text(); if(id13 == "seleccione..."){id13 = -1;}
var id14= $('#s14 option:selected').text(); if(id14 == "seleccione..."){id14 = -1;}
var id15= $('#s15 option:selected').text(); if(id15 == "seleccione..."){id15 = -1;}
var id16= $('#s16 option:selected').text(); if(id16 == "seleccione..."){id16 = -1;}
var id17= $('#s17 option:selected').text(); if(id17 == "seleccione..."){id17 = -1;}
var id18= $('#s18 option:selected').text(); if(id18 == "seleccione..."){id18 = -1;}
var id19= $('#s19 option:selected').text(); if(id19 == "seleccione..."){id19 = -1;}
var id20= $('#s20 option:selected').text(); if(id20 == "seleccione..."){id20 = -1;}
var id21= $('#s21 option:selected').text(); if(id21 == "seleccione..."){id21 = -1;}
var id22= $('#s22 option:selected').text(); if(id22 == "seleccione..."){id22 = -1;}
var id23= $('#s23 option:selected').text(); if(id23 == "seleccione..."){id23 = -1;}
var id24= $('#s24 option:selected').text(); if(id24 == "seleccione..."){id24 = -1;}
var id25= $('#s25 option:selected').text(); if(id25 == "seleccione..."){id25 = -1;}
var id26= $('#s26 option:selected').text(); if(id26 == "seleccione..."){id26 = -1;}
var id27= $('#s27 option:selected').text(); if(id27 == "seleccione..."){id27 = -1;}
var id28= $('#s28 option:selected').text(); if(id28 == "seleccione..."){id28 = -1;}
var id29= $('#s29 option:selected').text(); if(id29 == "seleccione..."){id29 = -1;}
var id30= $('#s30 option:selected').text(); if(id30 == "seleccione..."){id30 = -1;}

var info1=""; 
var info2="";
var info3= "";
var info4= "";
var info5= "";
var info6= "";
var info7= "";
var info8= "";
var info9= "";
var info10= "";
var info11= "";
var info12= "";
var info13= "";
var info14= "";

var info1= $('#info1 option:selected').text(); if(info1 == "seleccione..."){info1 = -2;}
var info2= $('#info2 option:selected').text(); if(info2 == "seleccione..."){info2 = -2;}
var info3= $('#info3 option:selected').text(); if(info3 == "seleccione..."){info3 = -2;}
var info4= $('#info4 option:selected').text(); if(info4 == "seleccione..."){info4 = -2;}
var info5= $('#info5 option:selected').text(); if(info5 == "seleccione..."){info5 = -2;}
var info6= $('#info6 option:selected').text(); if(info6 == "seleccione..."){info6 = -2;}
var info7= $('#info7 option:selected').text(); if(info7 == "seleccione..."){info7 = -2;}
var info8= $('#info8 option:selected').text(); if(info8 == "seleccione..."){info8 = -2;}
var info9= $('#info9 option:selected').text(); if(info9 == "seleccione..."){info9 = -2;}
var info10= $('#info10 option:selected').text(); if(info10 == "seleccione..."){info10 = -2;}
var info11= $('#info11 option:selected').text(); if(info11 == "seleccione..."){info11 = -2;}
var info12= $('#info12 option:selected').text(); if(info12 == "seleccione..."){info12 = -2;}
var info13= $('#info13 option:selected').text(); if(info13 == "seleccione..."){info13 = -2;}
var info14= $('#info14 option:selected').text(); if(info14 == "seleccione..."){info14 = -2;}

var infos = [
info1,
info2,
info3,
info4,
info5,
info6,
info7,
info8,
info9,
info10,
info11,
info12,
info13,
info14
];

$.ajax({
	type : 'POST',
	url: 'contar.php',
	data :{
id1:id1,
id2:id2,
id3:id3,
id4:id4,
id5:id5,
id6:id6,
id7:id7,
id8:id8,
id9:id9,
id10:id10,
id11:id11,
id12:id12,
id13:id13,
id14:id14,
id15:id15,
id16:id16,
id17:id17,
id18:id18,
id19:id19,
id20:id20,
id21:id21,
id22:id22,
id23:id23,
id24:id24,
id25:id25,
id26:id26,
id27:id27,
id28:id28,
id29:id29,
id30:id30,

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
info14:info14
	},
	success:function(resp){
		var obj = JSON.parse(resp);
		console.log(obj);
		$('#canti1').val(obj[0]);
		$('#canti2').val(obj[1]);
		$('#canti3').val(obj[2]);
		$('#canti4').val(obj[3]);
		$('#canti5').val(obj[4]);
		$('#canti6').val(obj[5]);
		$('#canti7').val(obj[6]);
		$('#canti8').val(obj[7]);
		$('#canti9').val(obj[8]);
		$('#canti10').val(obj[9]);
		$('#canti11').val(obj[10]);
		$('#canti12').val(obj[11]);
		$('#canti13').val(obj[12]);
		$('#canti14').val(obj[13]);

	}
});


 
});