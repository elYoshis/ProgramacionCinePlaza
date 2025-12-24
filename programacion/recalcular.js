$('#btcontar').click(function(){
	var ini= $('#ini1').val();
	var tp = $('#res').val();
	$.ajax({
		type:'POST',
		url: 'sumhoras.php',
		data:{inicio:ini, tpeli:tp},
		success:function(res){
			$('#fin1').val(res);
			var fin = res;
			var tep = $('#tep1').val();
			$.ajax({
				type:'POST',
				url: 'tiempoep.php',
				data:{final:fin, tep:tep},
				success:function(resp){
					$('#ini4').val(resp);
					//1---------------------------------------------------------------------
					var ini= $('#ini4').val();
					var tp = $('#res4').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin4').val(res);
							//2---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep4').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini7').val(resp);
									//3---------------------------------------------------------------------
					var ini= $('#ini7').val();
					var tp = $('#res7').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin7').val(res);
							//4---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep7').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini10').val(resp);
									//5---------------------------------------------------------------------
					var ini= $('#ini10').val();
					var tp = $('#res10').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin10').val(res);
							//6---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep10').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini13').val(resp);
									//7---------------------------------------------------------------------
					var ini= $('#ini13').val();
					var tp = $('#res13').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin13').val(res);
							//8---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep13').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini16').val(resp);
									//9---------------------------------------------------------------------
					var ini= $('#ini16').val();
					var tp = $('#res16').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin16').val(res);
							//10---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep16').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini19').val(resp);
									//10---------------------------------------------------------------------
					var ini= $('#ini19').val();
					var tp = $('#res19').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin19').val(res);
							//11---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep19').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini22').val(resp);
									//12---------------------------------------------------------------------
					var ini= $('#ini22').val();
					var tp = $('#res22').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin22').val(res);
							//13---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep22').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini25').val(resp);
									//14---------------------------------------------------------------------

					var ini= $('#ini25').val();
					var tp = $('#res25').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin25').val(res);
							//15---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep25').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini28').val(resp);
									//16---------------------------------------------------------------------
									var ini= $('#ini28').val();
									var tp = $('#res28').val();
									$.ajax({
										type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin28').val(res);
						}


									});

									//FIN----16--------------------------------------
								}
							});
							//FIN------15---------------------------------------------------------------
						}
					});
					//FIN---14----------------------------------------------------------------------
								}
							});
							//FIN------13---------------------------------------------------------------
						}
					});
					//FIN---12----------------------------------------------------------------------
								}
							});
							//FIN------11---------------------------------------------------------------
						}
					});
					//FIN---10----------------------------------------------------------------------
								}
							});
							//FIN------10---------------------------------------------------------------
						}
					});
					//FIN---9----------------------------------------------------------------------
								}
							});
							//FIN------8---------------------------------------------------------------
						}
					});
					//FIN---7----------------------------------------------------------------------
								}
							});
							//FIN------6---------------------------------------------------------------
						}
					});
					//FIN---5----------------------------------------------------------------------
								}
							});
							//FIN------4---------------------------------------------------------------
						}
					});
					//FIN---3----------------------------------------------------------------------
								}
							});
							//FIN------2---------------------------------------------------------------
						}
					});
					//FIN---1----------------------------------------------------------------------
				}
			});
		}
	});
})

$('#btcontar').click(function(){
	var ini= $('#ini2').val();
	var tp = $('#res2').val();
	$.ajax({
		type:'POST',
		url: 'sumhoras.php',
		data:{inicio:ini, tpeli:tp},
		success:function(res){
			$('#fin2').val(res);
			var fin = res;
			var tep = $('#tep2').val();
			$.ajax({
				type:'POST',
				url: 'tiempoep.php',
				data:{final:fin, tep:tep},
				success:function(resp){
					$('#ini5').val(resp);
					//1---------------------------------------------------------------------
					var ini= $('#ini5').val();
					var tp = $('#res5').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin5').val(res);
							//2---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep5').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini8').val(resp);
									//3---------------------------------------------------------------------
					var ini= $('#ini8').val();
					var tp = $('#res8').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin8').val(res);
							//4---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep8').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini11').val(resp);
									//5---------------------------------------------------------------------
					var ini= $('#ini11').val();
					var tp = $('#res11').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin11').val(res);
							//6---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep11').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini14').val(resp);
									//7---------------------------------------------------------------------
					var ini= $('#ini14').val();
					var tp = $('#res14').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin14').val(res);
							//8---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep14').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini17').val(resp);
									//9---------------------------------------------------------------------
					var ini= $('#ini17').val();
					var tp = $('#res17').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin17').val(res);
							//10---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep17').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini20').val(resp);
									//10---------------------------------------------------------------------
					var ini= $('#ini20').val();
					var tp = $('#res20').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin20').val(res);
							//11---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep20').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini23').val(resp);
									//12---------------------------------------------------------------------
					var ini= $('#ini23').val();
					var tp = $('#res23').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin23').val(res);
							//13---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep23').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini26').val(resp);
									//14---------------------------------------------------------------------

					var ini= $('#ini26').val();
					var tp = $('#res26').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin26').val(res);
							//15---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep26').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini29').val(resp);
									//16---------------------------------------------------------------------
									var ini= $('#ini29').val();
									var tp = $('#res29').val();
									$.ajax({
										type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin29').val(res);
						}


									});

									//FIN----16--------------------------------------
								}
							});
							//FIN------15---------------------------------------------------------------
						}
					});
					//FIN---14----------------------------------------------------------------------
								}
							});
							//FIN------13---------------------------------------------------------------
						}
					});
					//FIN---12----------------------------------------------------------------------
								}
							});
							//FIN------11---------------------------------------------------------------
						}
					});
					//FIN---10----------------------------------------------------------------------
								}
							});
							//FIN------10---------------------------------------------------------------
						}
					});
					//FIN---9----------------------------------------------------------------------
								}
							});
							//FIN------8---------------------------------------------------------------
						}
					});
					//FIN---7----------------------------------------------------------------------
								}
							});
							//FIN------6---------------------------------------------------------------
						}
					});
					//FIN---5----------------------------------------------------------------------
								}
							});
							//FIN------4---------------------------------------------------------------
						}
					});
					//FIN---3----------------------------------------------------------------------
								}
							});
							//FIN------2---------------------------------------------------------------
						}
					});
					//FIN---1----------------------------------------------------------------------
				}
			});
		}
	});
})
$('#btcontar').click(function(){
	var ini= $('#ini3').val();
	var tp = $('#res3').val();
	$.ajax({
		type:'POST',
		url: 'sumhoras.php',
		data:{inicio:ini, tpeli:tp},
		success:function(res){
			$('#fin3').val(res);
			var fin = res;
			var tep = $('#tep3').val();
			$.ajax({
				type:'POST',
				url: 'tiempoep.php',
				data:{final:fin, tep:tep},
				success:function(resp){
					$('#ini6').val(resp);
					//1---------------------------------------------------------------------
					var ini= $('#ini6').val();
					var tp = $('#res6').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin6').val(res);
							//2---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep6').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini9').val(resp);
									//3---------------------------------------------------------------------
					var ini= $('#ini9').val();
					var tp = $('#res9').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin9').val(res);
							//4---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep9').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini12').val(resp);
									//5---------------------------------------------------------------------
					var ini= $('#ini12').val();
					var tp = $('#res12').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin12').val(res);
							//6---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep12').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini15').val(resp);
									//7---------------------------------------------------------------------
					var ini= $('#ini15').val();
					var tp = $('#res15').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin15').val(res);
							//8---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep15').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini18').val(resp);
									//9---------------------------------------------------------------------
					var ini= $('#ini18').val();
					var tp = $('#res18').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin18').val(res);
							//10---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep18').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini21').val(resp);
									//10---------------------------------------------------------------------
					var ini= $('#ini21').val();
					var tp = $('#res21').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin21').val(res);
							//11---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep21').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini24').val(resp);
									//12---------------------------------------------------------------------
					var ini= $('#ini24').val();
					var tp = $('#res24').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin24').val(res);
							//13---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep24').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini27').val(resp);
									//14---------------------------------------------------------------------

					var ini= $('#ini27').val();
					var tp = $('#res27').val();
					$.ajax({
						type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin27').val(res);
							//15---------------------------------------------------------------
							var fin = res;
							var tep = $('#tep27').val();
							$.ajax({
								type:'POST',
								url: 'tiempoep.php',
								data:{final:fin, tep:tep},
								success:function(resp){
								$('#ini30').val(resp);
									//16---------------------------------------------------------------------
									var ini= $('#ini30').val();
									var tp = $('#res30').val();
									$.ajax({
										type:'POST',
						url: 'sumhoras.php',
						data:{inicio:ini, tpeli:tp},
						success:function(res){
							$('#fin30').val(res);
						}


									});

									//FIN----16--------------------------------------
								}
							});
							//FIN------15---------------------------------------------------------------
						}
					});
					//FIN---14----------------------------------------------------------------------
								}
							});
							//FIN------13---------------------------------------------------------------
						}
					});
					//FIN---12----------------------------------------------------------------------
								}
							});
							//FIN------11---------------------------------------------------------------
						}
					});
					//FIN---10----------------------------------------------------------------------
								}
							});
							//FIN------10---------------------------------------------------------------
						}
					});
					//FIN---9----------------------------------------------------------------------
								}
							});
							//FIN------8---------------------------------------------------------------
						}
					});
					//FIN---7----------------------------------------------------------------------
								}
							});
							//FIN------6---------------------------------------------------------------
						}
					});
					//FIN---5----------------------------------------------------------------------
								}
							});
							//FIN------4---------------------------------------------------------------
						}
					});
					//FIN---3----------------------------------------------------------------------
								}
							});
							//FIN------2---------------------------------------------------------------
						}
					});
					//FIN---1----------------------------------------------------------------------
				}
			});
		}
	});
})