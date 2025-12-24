//FILA 1
  $('#s1').change(function(){
    var valor = $(this).val();
    //var aux1 = $('#res').val();
    //$('#aux1').val(aux1);
    if (valor != "") {
      var inicio = $('#ini1').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin1').val(res);
            //1----------------------------------------
              var tep = $('#tep1').val();
              var final= $('#fin1').val();
              $.ajax({
                type: 'POST',
                url: 'tiempoep.php',
                data: {final:final, tep:tep},
                success:function(resp){
                 $('#ini4').val(resp);
                 //2-----------------------------------
                  var ini=$('#ini4').val();
                  var aux2 = $('#res4').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin4').val(resp1);
                      //3----------------------------------
                      var tep1 = $('#tep4').val();
                      var final1= $('#fin4').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini7').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini7').val();
                        var aux3 = $('#res7').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin7').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep7').val();
                          var final1= $('#fin7').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini10').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini10').val();
                            var aux3 = $('#res10').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin10').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep10').val();
                          var final1= $('#fin10').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini13').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini13').val();
                            var aux3 = $('#res13').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin13').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep13').val();
                          var final1= $('#fin13').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini16').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini16').val();
                            var aux3 = $('#res16').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin16').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
                  }
                  }); 
                }
              }); 
          }
        });
      }
    });
   } 
});

  $(document).on('change','#ini1',function(){
    var inicio = $(this).val();
    var tpeli = $('#res').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin1').val(res);
        console.log(res);
      }
    });
  });
 $('#s2').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini2').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res2').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin2').val(res);
            //1----------------------------------------
              var tep = $('#tep2').val();
              var final= $('#fin2').val();
              $.ajax({
                type: 'POST',
                url: 'tiempoep.php',
                data: {final:final, tep:tep},
                success:function(resp){
                 $('#ini5').val(resp);
                 //2-----------------------------------
                  var ini=$('#ini5').val();
                  var aux2 = $('#res5').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin5').val(resp1);
                      //3----------------------------------
                      var tep1 = $('#tep5').val();
                      var final1= $('#fin5').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini8').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini8').val();
                        var aux3 = $('#res8').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin8').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep8').val();
                          var final1= $('#fin8').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini11').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini11').val();
                            var aux3 = $('#res11').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin11').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep11').val();
                          var final1= $('#fin11').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini14').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini14').val();
                            var aux3 = $('#res14').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin14').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep14').val();
                          var final1= $('#fin14').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini17').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini17').val();
                            var aux3 = $('#res17').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin17').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
                  }
                  }); 
                }
              });
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini2',function(){
    var inicio = $(this).val();
    var tpeli = $('#res2').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin2').val(res);
      }
    });
    
  });
 $('#s3').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini3').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res3').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin3').val(res);
            //1----------------------------------------
              var tep = $('#tep3').val();
              var final= $('#fin3').val();
              $.ajax({
                type: 'POST',
                url: 'tiempoep.php',
                data: {final:final, tep:tep},
                success:function(resp){
                 $('#ini6').val(resp);
                 //2-----------------------------------
                  var ini=$('#ini6').val();
                  var aux2 = $('#res6').val();
                  $.ajax({
                    type: 'POST',
                    url: 'sumhoraselect.php',
                    data: {ini:ini, tp:aux2},
                    success:function(resp1){
                      $('#fin6').val(resp1);
                      //3----------------------------------
                      var tep1 = $('#tep6').val();
                      var final1= $('#fin6').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini9').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini9').val();
                        var aux3 = $('#res9').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin9').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep9').val();
                          var final1= $('#fin9').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini12').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini12').val();
                            var aux3 = $('#res12').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin12').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep12').val();
                          var final1= $('#fin12').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini15').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini15').val();
                            var aux3 = $('#res15').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin15').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep15').val();
                          var final1= $('#fin15').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini18').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini18').val();
                            var aux3 = $('#res18').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin18').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                               //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
                  }
                  }); 
                }
              });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini3',function(){
    var inicio = $(this).val();
    var tpeli = $('#res3').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin3').val(res);

      }
    });
  });
//FILA 2--------------------------------------------------------------

  $('#s4').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini4').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res4').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin4').val(res);
          //3----------------------------------
                      var tep1 = $('#tep4').val();
                      var final1= $('#fin4').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini7').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini7').val();
                        var aux3 = $('#res7').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin7').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep7').val();
                          var final1= $('#fin7').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini10').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini10').val();
                            var aux3 = $('#res10').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin10').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep10').val();
                          var final1= $('#fin10').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini13').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini13').val();
                            var aux3 = $('#res13').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin13').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep13').val();
                          var final1= $('#fin13').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini16').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini16').val();
                            var aux3 = $('#res16').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin16').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
          //COPIAR HASTA ACA--------------------------------------
          }
        });
      }
    });
   }
});
  $(document).on('input','#ini4',function(){
    var inicio = $(this).val();
    
       var tpeli = $('#res4').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin4').val(res);

      }
    });
       
  });
  $('#s5').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini5').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res5').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin5').val(res);
            //3--------------------------------
            var tep1 = $('#tep5').val();
                      var final1= $('#fin5').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini8').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini8').val();
                        var aux3 = $('#res8').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin8').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep8').val();
                          var final1= $('#fin8').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini11').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini11').val();
                            var aux3 = $('#res11').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin11').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep11').val();
                          var final1= $('#fin11').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini14').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini14').val();
                            var aux3 = $('#res14').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin14').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep14').val();
                          var final1= $('#fin14').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini17').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini17').val();
                            var aux3 = $('#res17').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin17').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini5',function(){
    var inicio = $(this).val();
    var tpeli = $('#res5').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin5').val(res);
      }
    });
  });
  $('#s6').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini6').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res6').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin6').val(res);
            //3--------------------------------
            var tep1 = $('#tep6').val();
                      var final1= $('#fin6').val();
                      $.ajax({
                        type: 'POST',
                        url: 'tiempoep.php',
                        data: {final:final1, tep:tep1},
                        success:function(resp2){
                        $('#ini9').val(resp2);
                        //4-------------------------------------
                        var ini2=$('#ini9').val();
                        var aux3 = $('#res9').val();
                     
                      $.ajax({
                        type: 'POST',
                        url: 'sumhoraselect.php',
                        data: {ini:ini2, tp:aux3},
                        success:function(resp3){
                          $('#fin9').val(resp3);
                          //5--------------------------------------
                           var tep1 = $('#tep9').val();
                          var final1= $('#fin9').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini12').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini12').val();
                            var aux3 = $('#res12').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin12').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep12').val();
                          var final1= $('#fin12').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini15').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini15').val();
                            var aux3 = $('#res15').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin15').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep15').val();
                          var final1= $('#fin15').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini18').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini18').val();
                            var aux3 = $('#res18').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin18').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                      }
                      }); 
                      }
                    });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini6',function(){
    var inicio = $(this).val();
    var tpeli = $('#res6').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin6').val(res);
      }
    });
  });
  //FILA 3
  $('#s7').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini7').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res7').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin7').val(res);
                //5--------------------------------------
                           var tep1 = $('#tep7').val();
                           var final1= $('#fin7').val();
                           $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini10').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini10').val();
                            var aux3 = $('#res10').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin10').val(resp3);
                          //7--------------------------------------
                            var tep1 = $('#tep10').val();
                            var final1= $('#fin10').val();
                            $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini13').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini13').val();
                            var aux3 = $('#res13').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin13').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep13').val();
                          var final1= $('#fin13').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini16').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini16').val();
                            var aux3 = $('#res16').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin16').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }//--------------------------------------------
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini7',function(){
    var inicio = $(this).val();
    var tpeli = $('#res7').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin7').val(res);
      }
    });
  });
  $('#s8').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini8').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res8').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin8').val(res);
            //5--------------------------------------
                           var tep1 = $('#tep8').val();
                           var final1= $('#fin8').val();
                            $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini11').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini11').val();
                            var aux3 = $('#res11').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin11').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep11').val();
                          var final1= $('#fin11').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini14').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini14').val();
                            var aux3 = $('#res14').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin14').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep14').val();
                          var final1= $('#fin14').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini17').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini17').val();
                            var aux3 = $('#res17').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin17').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini8',function(){
    var inicio = $(this).val();
    var tpeli = $('#res8').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin8').val(res);
      }
    });
  });
  $('#s9').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini9').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res9').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin9').val(res);
            //5--------------------------------------
                           var tep1 = $('#tep9').val();
                           var final1= $('#fin9').val();
                            $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini12').val(resp2);
                            //6--------------------------------------
                            var ini2=$('#ini12').val();
                            var aux3 = $('#res12').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin12').val(resp3);
                          //7--------------------------------------
                           var tep1 = $('#tep12').val();
                          var final1= $('#fin12').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini15').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini15').val();
                            var aux3 = $('#res15').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin15').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep15').val();
                          var final1= $('#fin15').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini18').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini18').val();
                            var aux3 = $('#res18').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin18').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini9',function(){
    var inicio = $(this).val();
    var tpeli = $('#res9').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin9').val(res);
      }
    });
  });
  //FILA 4
  $('#s10').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini10').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res10').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin10').val(res);
            //7--------------------------------------
                            var tep1 = $('#tep10').val();
                            var final1= $('#fin10').val();
                            $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini13').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini13').val();
                            var aux3 = $('#res13').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin13').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep13').val();
                          var final1= $('#fin13').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini16').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini16').val();
                            var aux3 = $('#res16').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin16').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });

          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini10',function(){
    var inicio = $(this).val();
    var tpeli = $('#res10').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin10').val(res);
      }
    });
  });
  $('#s11').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini11').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res11').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin11').val(res);
            //7--------------------------------------
                           var tep1 = $('#tep11').val();
                          var final1= $('#fin11').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini14').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini14').val();
                            var aux3 = $('#res14').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin14').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep14').val();
                          var final1= $('#fin14').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini17').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini17').val();
                            var aux3 = $('#res17').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin17').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini11',function(){
    var inicio = $(this).val();
    var tpeli = $('#res11').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin11').val(res);
      }
    });
  });
  $('#s12').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini12').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res12').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin12').val(res);
            //7--------------------------------------
                           var tep1 = $('#tep12').val();
                          var final1= $('#fin12').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini15').val(resp2);
                            //8------------------------------------
                            var ini2=$('#ini15').val();
                            var aux3 = $('#res15').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin15').val(resp3);
                                //9--------------------------------------
                           var tep1 = $('#tep15').val();
                          var final1= $('#fin15').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini18').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini18').val();
                            var aux3 = $('#res18').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin18').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
            
        console.log(res);

      }
    });
   }
});
}
});
  $(document).on('change','#ini12',function(){
    var inicio = $(this).val();
    var tpeli = $('#res12').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin12').val(res);
      }
    });
  });
  //FILA 5-----------------------------------------------------------------------------------
  $('#s13').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini13').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res13').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin13').val(res);
            //9--------------------------------------
                           var tep1 = $('#tep13').val();
                          var final1= $('#fin13').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini16').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini16').val();
                            var aux3 = $('#res16').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin16').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini13',function(){
    var inicio = $(this).val();
    var tpeli = $('#res13').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin13').val(res);

      }
    });
  });
  $('#s14').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini14').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res14').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin14').val(res);
            //9-----------------------------------------
            var tep1 = $('#tep14').val();
                          var final1= $('#fin14').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini17').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini17').val();
                            var aux3 = $('#res17').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin17').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini14',function(){
    var inicio = $(this).val();
    var tpeli = $('#res14').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin14').val(res);
      }
    });
  });
  $('#s15').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini15').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res15').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin15').val(res);
            //9-----------------------------------------
            var tep1 = $('#tep15').val();
                          var final1= $('#fin15').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini18').val(resp2);
                            //10------------------------------------
                            var ini2=$('#ini18').val();
                            var aux3 = $('#res18').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin18').val(resp3);
                                //11--------------------------------------
                           var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini15',function(){
    var inicio = $(this).val();
    var tpeli = $('#res15').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin15').val(res);
      }
    });
  });
  //FILA 6-------------------------------------------------------------------------------------
  $('#s16').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini16').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res16').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin16').val(res);
            //11--------------------------------------
                           var tep1 = $('#tep16').val();
                          var final1= $('#fin16').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini19').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini19').val();
                            var aux3 = $('#res19').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin19').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini16',function(){
    var inicio = $(this).val();
    var tpeli = $('#res16').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin16').val(res);
      }
    });
  });
  $('#s17').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini17').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res17').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin17').val(res);
            //11-------------------------------------------
                          var tep1 = $('#tep17').val();
                          var final1= $('#fin17').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini20').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini20').val();
                            var aux3 = $('#res20').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin20').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini17',function(){
    var inicio = $(this).val();
    var tpeli = $('#res17').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin17').val(res);
      }
    });
  });
  $('#s18').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini18').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res18').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin18').val(res);
            //11-------------------------------------------
                         var tep1 = $('#tep18').val();
                          var final1= $('#fin18').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini21').val(resp2);
                            //12------------------------------------
                            var ini2=$('#ini21').val();
                            var aux3 = $('#res21').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin21').val(resp3);
                                //13------------------------------------
                           var tep1 = $('#tep21').val();
                          var final1= $('#fin21').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini18',function(){
    var inicio = $(this).val();
    var tpeli = $('#res18').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin18').val(res);
      }
    });
  });
  //FILA 7-----------------------------------------------------------------
  $('#s19').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini19').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res19').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin19').val(res);
            //13------------------------------------
                           var tep1 = $('#tep19').val();
                          var final1= $('#fin19').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini22').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini22').val();
                            var aux3 = $('#res22').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin22').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });

          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini19',function(){
    var inicio = $(this).val();
    var tpeli = $('#res19').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin19').val(res);
      }
    });
  });
  $('#s20').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini20').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res20').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin20').val(res);
            //13------------------------------------
                           var tep1 = $('#tep20').val();
                          var final1= $('#fin20').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini23').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini23').val();
                            var aux3 = $('#res23').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin23').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini20',function(){
    var inicio = $(this).val();
    var tpeli = $('#res20').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin20').val(res);
      }
    });
  });
  $('#s21').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini21').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res21').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin21').val(res);
                            //13------------------------------------
                            var tep1 = $('#tep21').val();
                            var final1= $('#fin21').val();
                            $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini24').val(resp2);
                            //14----------------------------------
                            var ini2=$('#ini24').val();
                            var aux3 = $('#res24').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin24').val(resp3);
                                //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini21',function(){
    var inicio = $(this).val();
    var tpeli = $('#res21').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin21').val(res);
      }
    });
  });

  //FILA 8
  $('#s22').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini22').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res22').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin22').val(res);
            //15------------------------------------
                           var tep1 = $('#tep22').val();
                          var final1= $('#fin22').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini25').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini22',function(){
    var inicio = $(this).val();
    var tpeli = $('#res22').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin22').val(res);
      }
    });
  });
  $('#s23').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini23').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res23').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin23').val(res);
            //15------------------------------------
                           var tep1 = $('#tep23').val();
                          var final1= $('#fin23').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini26').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini23',function(){
    var inicio = $(this).val();
    var tpeli = $('#res23').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin23').val(res);
      }
    });
  });
  $('#s24').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini24').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res24').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin24').val(res);
            //15------------------------------------
                           var tep1 = $('#tep24').val();
                          var final1= $('#fin24').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini27').val(resp2);
                            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
                          }
                        }); 
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini24',function(){
    var inicio = $(this).val();
    var tpeli = $('#res24').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin24').val(res);
      }
    });
  });
  //FILA 9-------------------------
$('#s25').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini25').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res25').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin25').val(res);
            //16-------------------------------------
                            var ini2=$('#ini25').val();
                            var aux3 = $('#res25').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin25').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep25').val();
                          var final1= $('#fin25').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini28').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini28').val();
                            var aux3 = $('#res28').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin28').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini25',function(){
    var inicio = $(this).val();
    var tpeli = $('#res25').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin25').val(res);
      }
    });
  });
  $('#s26').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini26').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res26').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin26').val(res);
            //16-------------------------------------
                            var ini2=$('#ini26').val();
                            var aux3 = $('#res26').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin26').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep26').val();
                          var final1= $('#fin26').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini29').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini29').val();
                            var aux3 = $('#res29').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin29').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini26',function(){
    var inicio = $(this).val();
    var tpeli = $('#res26').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin26').val(res);
      }
    });
  });
  $('#s27').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini27').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res27').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin27').val(res);
            //16-------------------------------------
                            var ini2=$('#ini27').val();
                            var aux3 = $('#res27').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin27').val(resp3);
                                //17----------------------------------
                           var tep1 = $('#tep27').val();
                          var final1= $('#fin27').val();
                          $.ajax({
                            type: 'POST',
                            url: 'tiempoep.php',
                            data: {final:final1, tep:tep1},
                            success:function(resp2){
                            $('#ini30').val(resp2);
                            //18-----------------------------------
                            var ini2=$('#ini30').val();
                            var aux3 = $('#res30').val();
                            $.ajax({
                              type: 'POST',
                              url: 'sumhoraselect.php',
                              data: {ini:ini2, tp:aux3},
                              success:function(resp3){
                              $('#fin30').val(resp3);
                                
                              }
                            });
                          }
                        }); 
                              }
                            });
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini27',function(){
    var inicio = $(this).val();
    var tpeli = $('#res27').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin27').val(res);
      }
    });
  });
  //FILA 10-------------------------------------
  $('#s28').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini28').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res28').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin28').val(res);
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini28',function(){
    var inicio = $(this).val();
    var tpeli = $('#res28').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin28').val(res);
      }
    });
  });
  $('#s29').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini29').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res29').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin29').val(res);
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini29',function(){
    var inicio = $(this).val();
    var tpeli = $('#res29').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin29').val(res);
      }
    });
  });
  $('#s30').change(function(){
    var valor = $(this).val();
    if (valor != "") {
      var inicio = $('#ini30').val();
    $.ajax({
      type: 'POST',
      url:'guardamin.php',
      data: {valor: valor},
      success:function(res){
        $('#res30').val(res);
        tpeli = res;
        $.ajax({
          type: 'POST',
          url: 'sumhoras.php',
          data:{tpeli:tpeli,inicio:inicio},
          success:function(res){
            $('#fin30').val(res);
            console.log(res);
          }
        });
        console.log(res);
      }
    });
   }
});
  $(document).on('change','#ini30',function(){
    var inicio = $(this).val();
    var tpeli = $('#res30').val();
    $.ajax({
      type: 'POST',
      url: 'sumhoras.php',
      data:{inicio:inicio,tpeli:tpeli},
      success:function(res){
        $('#fin30').val(res);
      }
    });
  });


