//SALA1------------------------------------------
$(document).on('keyup', '#tep1',function(){
	var tep = $(this).val();
	var final= $('#fin1').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini4').val(resp);
			//1--------------------------------------------------
			var ini=$('#ini4').val();
                  var aux2 = $('#res4').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin4').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep4').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini7').val(resp);
								//2--------------------------------------------
								var ini=$('#ini7').val();
                  var aux2 = $('#res7').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin7').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep7').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini10').val(resp);
								//3--------------------------------------------
								var ini=$('#ini10').val();
                  var aux2 = $('#res10').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin10').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep10').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini13').val(resp);
								//4--------------------------------------------
								var ini=$('#ini13').val();
                  var aux2 = $('#res13').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin13').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep13').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini16').val(resp);
								//5--------------------------------------------
								var ini=$('#ini16').val();
                  var aux2 = $('#res16').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin16').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep16').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini19').val(resp);
								//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
         	//1---FIN-------------------------------------------------------------	
		}
	});
});

$(document).on('keyup', '#tep4',function(){
	var tep = $(this).val();
	var final= $('#fin4').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini7').val(resp);
			//2--------------------------------------------
								var ini=$('#ini7').val();
                  var aux2 = $('#res7').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin7').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep7').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini10').val(resp);
								//3--------------------------------------------
								var ini=$('#ini10').val();
                  var aux2 = $('#res10').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin10').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep10').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini13').val(resp);
								//4--------------------------------------------
								var ini=$('#ini13').val();
                  var aux2 = $('#res13').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin13').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep13').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini16').val(resp);
								//5--------------------------------------------
								var ini=$('#ini16').val();
                  var aux2 = $('#res16').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin16').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep16').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini19').val(resp);
								//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
			
		}
	});
});
$(document).on('keyup', '#tep7',function(){
	var tep = $(this).val();
	var final= $('#fin7').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini10').val(resp);
			//3--------------------------------------------
								var ini=$('#ini10').val();
                  var aux2 = $('#res10').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin10').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep10').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini13').val(resp);
								//4--------------------------------------------
								var ini=$('#ini13').val();
                  var aux2 = $('#res13').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin13').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep13').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini16').val(resp);
								//5--------------------------------------------
								var ini=$('#ini16').val();
                  var aux2 = $('#res16').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin16').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep16').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini19').val(resp);
								//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep10',function(){
	var tep = $(this).val();
	var final= $('#fin10').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini13').val(resp);
			//4--------------------------------------------
								var ini=$('#ini13').val();
                  var aux2 = $('#res13').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin13').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep13').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini16').val(resp);
								//5--------------------------------------------
								var ini=$('#ini16').val();
                  var aux2 = $('#res16').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin16').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep16').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini19').val(resp);
								//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep13',function(){
	var tep = $(this).val();
	var final= $('#fin13').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini16').val(resp);
			//5--------------------------------------------
								var ini=$('#ini16').val();
                  var aux2 = $('#res16').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin16').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep16').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini19').val(resp);
								//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep16',function(){
	var tep = $(this).val();
	var final= $('#fin16').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini19').val(resp);
			//6--------------------------------------------
								var ini=$('#ini19').val();
                  var aux2 = $('#res19').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin19').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep19').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini22').val(resp);
								//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep19',function(){
	var tep = $(this).val();
	var final= $('#fin19').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini22').val(resp);
			//7--------------------------------------------
								var ini=$('#ini22').val();
                  var aux2 = $('#res22').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin22').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep22').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini25').val(resp);
								//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep22',function(){
	var tep = $(this).val();
	var final= $('#fin22').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini25').val(resp);
			//8--------------------------------------------
								var ini=$('#ini25').val();
                  var aux2 = $('#res25').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin25').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep25').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini28').val(resp);
								//9--------------------------------------------
								var ini=$('#ini28').val();
                  var aux2 = $('#res28').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin28').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep25',function(){
	var tep = $(this).val();
	var final= $('#fin25').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini28').val(resp);

		}
	});
});
//FIN SALA1------------------------------------------
//SALA2------------------------------------------
$(document).on('keyup', '#tep2',function(){
	var tep = $(this).val();
	var final= $('#fin2').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini5').val(resp);
			//1--------------------------------------------------
			var ini=$('#ini5').val();
                  var aux2 = $('#res5').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin5').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep5').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini8').val(resp);
								//2--------------------------------------------
								var ini=$('#ini8').val();
                  var aux2 = $('#res8').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin8').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep8').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini11').val(resp);
								//3--------------------------------------------
								var ini=$('#ini11').val();
                  var aux2 = $('#res11').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin11').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep11').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini14').val(resp);
								//4--------------------------------------------
								var ini=$('#ini14').val();
                  var aux2 = $('#res14').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin14').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep14').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini17').val(resp);
								//5--------------------------------------------
								var ini=$('#ini17').val();
                  var aux2 = $('#res17').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin17').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep17').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini20').val(resp);
								//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
         	//1---FIN-------------------------------------------------------------	
		}
	});
});
$(document).on('keyup', '#tep5',function(){
	var tep = $(this).val();
	var final= $('#fin5').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini8').val(resp);
			//2--------------------------------------------
								var ini=$('#ini8').val();
                  var aux2 = $('#res8').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin8').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep8').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini11').val(resp);
								//3--------------------------------------------
								var ini=$('#ini11').val();
                  var aux2 = $('#res11').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin11').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep11').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini14').val(resp);
								//4--------------------------------------------
								var ini=$('#ini14').val();
                  var aux2 = $('#res14').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin14').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep14').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini17').val(resp);
								//5--------------------------------------------
								var ini=$('#ini17').val();
                  var aux2 = $('#res17').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin17').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep17').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini20').val(resp);
								//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep8',function(){
	var tep = $(this).val();
	var final= $('#fin8').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini11').val(resp);
			//3--------------------------------------------
								var ini=$('#ini11').val();
                  var aux2 = $('#res11').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin11').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep11').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini14').val(resp);
								//4--------------------------------------------
								var ini=$('#ini14').val();
                  var aux2 = $('#res14').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin14').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep14').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini17').val(resp);
								//5--------------------------------------------
								var ini=$('#ini17').val();
                  var aux2 = $('#res17').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin17').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep17').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini20').val(resp);
								//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep11',function(){
	var tep = $(this).val();
	var final= $('#fin11').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini14').val(resp);
			//4--------------------------------------------
								var ini=$('#ini14').val();
                  var aux2 = $('#res14').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin14').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep14').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini17').val(resp);
								//5--------------------------------------------
								var ini=$('#ini17').val();
                  var aux2 = $('#res17').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin17').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep17').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini20').val(resp);
								//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep14',function(){
	var tep = $(this).val();
	var final= $('#fin14').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini17').val(resp);
			//5--------------------------------------------
								var ini=$('#ini17').val();
                  var aux2 = $('#res17').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin17').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep17').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini20').val(resp);
								//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep17',function(){
	var tep = $(this).val();
	var final= $('#fin17').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini20').val(resp);
			//6--------------------------------------------
								var ini=$('#ini20').val();
                  var aux2 = $('#res20').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin20').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep20').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini23').val(resp);
								//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep20',function(){
	var tep = $(this).val();
	var final= $('#fin20').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini23').val(resp);
			//7--------------------------------------------
								var ini=$('#ini23').val();
                  var aux2 = $('#res23').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin23').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep23').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini26').val(resp);
								//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep23',function(){
	var tep = $(this).val();
	var final= $('#fin23').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini26').val(resp);
			//8--------------------------------------------
								var ini=$('#ini26').val();
                  var aux2 = $('#res26').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin26').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep26').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini29').val(resp);
								//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep26',function(){
	var tep = $(this).val();
	var final= $('#fin26').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini29').val(resp);
			//9--------------------------------------------
								var ini=$('#ini29').val();
                  var aux2 = $('#res29').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin29').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

		}
	});
});
//FIN SALA2------------------------------------------
//SALA3------------------------------------------
$(document).on('keyup', '#tep3',function(){
	var tep = $(this).val();
	var final= $('#fin3').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini6').val(resp);
			//1--------------------------------------------------
			var ini=$('#ini6').val();
                  var aux2 = $('#res6').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin6').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep6').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini9').val(resp);
								//2--------------------------------------------
								var ini=$('#ini9').val();
                  var aux2 = $('#res9').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin9').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep9').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini12').val(resp);
								//3--------------------------------------------
								var ini=$('#ini12').val();
                  var aux2 = $('#res12').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin12').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep12').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini15').val(resp);
								//4--------------------------------------------
								var ini=$('#ini15').val();
                  var aux2 = $('#res15').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin15').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep15').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini18').val(resp);
								//5--------------------------------------------
								var ini=$('#ini18').val();
                  var aux2 = $('#res18').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin18').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep18').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini21').val(resp);
								//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
         	//1---FIN-------------------------------------------------------------	
		}
	});
});
$(document).on('keyup', '#tep6',function(){
	var tep = $(this).val();
	var final= $('#fin6').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini9').val(resp);
			//2--------------------------------------------
								var ini=$('#ini9').val();
                  var aux2 = $('#res9').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin9').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep9').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini12').val(resp);
								//3--------------------------------------------
								var ini=$('#ini12').val();
                  var aux2 = $('#res12').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin12').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep12').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini15').val(resp);
								//4--------------------------------------------
								var ini=$('#ini15').val();
                  var aux2 = $('#res15').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin15').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep15').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini18').val(resp);
								//5--------------------------------------------
								var ini=$('#ini18').val();
                  var aux2 = $('#res18').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin18').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep18').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini21').val(resp);
								//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //2-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep9',function(){
	var tep = $(this).val();
	var final= $('#fin9').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini12').val(resp);
			//3--------------------------------------------
								var ini=$('#ini12').val();
                  var aux2 = $('#res12').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin12').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep12').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini15').val(resp);
								//4--------------------------------------------
								var ini=$('#ini15').val();
                  var aux2 = $('#res15').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin15').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep15').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini18').val(resp);
								//5--------------------------------------------
								var ini=$('#ini18').val();
                  var aux2 = $('#res18').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin18').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep18').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini21').val(resp);
								//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });
                  //3-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep12',function(){
	var tep = $(this).val();
	var final= $('#fin12').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini15').val(resp);
			//4--------------------------------------------
								var ini=$('#ini15').val();
                  var aux2 = $('#res15').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin15').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep15').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini18').val(resp);
								//5--------------------------------------------
								var ini=$('#ini18').val();
                  var aux2 = $('#res18').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin18').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep18').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini21').val(resp);
								//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//4-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep15',function(){
	var tep = $(this).val();
	var final= $('#fin15').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini18').val(resp);
			//5--------------------------------------------
								var ini=$('#ini18').val();
                  var aux2 = $('#res18').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin18').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep18').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini21').val(resp);
								//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//5-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep18',function(){
	var tep = $(this).val();
	var final= $('#fin18').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini21').val(resp);
			//6--------------------------------------------
								var ini=$('#ini21').val();
                  var aux2 = $('#res21').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin21').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep21').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini24').val(resp);
								//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//6-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep21',function(){
	var tep = $(this).val();
	var final= $('#fin21').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini24').val(resp);
			//7--------------------------------------------
								var ini=$('#ini24').val();
                  var aux2 = $('#res24').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin24').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep24').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini27').val(resp);
								//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
							}
                      	});                     
                      }
                  });//7-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep24',function(){
	var tep = $(this).val();
	var final= $('#fin24').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini27').val(resp);
			//8--------------------------------------------
								var ini=$('#ini27').val();
                  var aux2 = $('#res27').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin27').val(resp1);
                      	var final = resp1;
                      	var tep = $('#tep27').val();
                      	$.ajax({
                      		type: 'POST',
							url: 'tiempoep.php',
							data: {final:final, tep:tep},
							success:function(resp){
							$('#ini30').val(resp);
								//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------

							}
                      	});                     
                      }
                  });//8-------FIN----------------------------------------------
		}
	});
});
$(document).on('keyup', '#tep27',function(){
	var tep = $(this).val();
	var final= $('#fin27').val();
	$.ajax({
		type: 'POST',
		url: 'tiempoep.php',
		data: {final:final, tep:tep},
		success:function(resp){
			$('#ini30').val(resp);
			//9--------------------------------------------
								var ini=$('#ini30').val();
                  var aux2 = $('#res30').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin30').val(resp1);
                      	                     
                      }
                  });//9-------FIN----------------------------------------------
		}
	});
});

