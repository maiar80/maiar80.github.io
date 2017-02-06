// JavaScript Document


                function Principal(nombreDiv) {
                    // Oculto el panel de texto
                    $("#texto").hide().fadeOut(1000);

                    // Oculto principales
                    OcultoDimensiones();
                    OcultoTematicas();

                    //$('#FrameIndicadores').hide();

                    // saco actives a todos los links
                    PongoDimensionesInactivas();
                    PongoTematicasInactivas();

                    //var miId = ""
                    //switch (nombreDiv) {
                    //    case 'Sociodemografica':
                    //        miId = "SO"
                    //        break;
                    //    case 'Movilidadyconectividad':
                    //        miId = "MC"
                    //        break;
                    //    case 'Asentamientosyurbanizacion':
                    //        miId = "AU"
                    //        break;
                    //    case 'Institucional':
                    //        miId = "IN"
                    //        break;
                    //    case 'Ambiental':
                    //        miId = "AM"
                    //        break;
                    //    case 'Economica':
                    //        miId = "EC"
                    //        break;
                    //    case 'Inversionpublica':
                    //        miId = "IP"
                    //        break;

                    //    default:
                    //}
                    //// dejo en active el que corresponde
                    //$("#" + miId).addClass('active');
                    $("#" + nombreDiv).addClass('active');
                    
                    // Muestro el que va
                    $('#' + nombreDiv + '_div').hide().fadeIn(1000);
                };


                function MostrarIndicadores(nombreDiv) {
                    // Oculto MostrarIndicadores
                    OcultoTematicas();

                    //$('#FrameIndicadores').hide();

                    // saco actives a todos los links
                    PongoTematicasInactivas();

                    //var miId = ""
                    //switch (nombreDiv) {
                    //    case 'Tematica1':
                    //        miId = "T1"
                    //        break;
                    //    case 'Tematica2':
                    //        miId = "T2"
                    //        break;
                    //    case 'Tematica3':
                    //        miId = "T3"
                    //        break;
                    //    case 'Tematica4':
                    //        miId = "T4"
                    //        break;
                    //    case 'Tematica5':
                    //        miId = "T5"
                    //        break;
                       
                    //    default:
                    //}
                    //// dejo en active el que corresponde
                    //$("#" + miId).addClass('active');
                    $("#" + nombreDiv).addClass('active');

                    // Muestro el que va
                    $('#' + nombreDiv + '_div').hide().fadeIn(1000);
                };
				
                function OcultoDimensiones() {
                    $(".dimension").each(function (index) {
                        $(this).hide();
                    });
                };

                function OcultoTematicas() {
                    $(".tematica").each(function (index) {
                        $(this).hide();
                    });                    
                };

                function PongoTematicasInactivas() {
                    $(".tematica_particular").each(function (index) {
                        $(this).removeClass("active");
                    });                    
                };

                function PongoDimensionesInactivas() {
                    $(".dimension_particular").each(function (index) {
                        $(this).removeClass("active");
                    });
                };