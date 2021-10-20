var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent = `
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Educación Inclusiva > Módulo 2</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Fases para la construcción, implementación y seguimiento del POAI</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>

        <div class="row content-row">
            <div class="container">

                <div class="col-lg-6 list-of-items">
                  <div class="row item-button align-items-center">
                    <div class="icon-holder col-3 p-3 align-items-center justify-content-center d-flex">
                        <img class="img-fluid" src="images/img_s3.png">
                    </div>
                    <div class="col-8 item-text">
                        <p><b>Fase 1</b></p>
                        <p>Diagnóstico situacional participativo</p>
                    </div>
                  </div>
                  <div class="text-center col-12 center-audio-btn">
                    <button id="btnAudio" class="btn btn-audio-play green" onclick="playAndPauseAudio('audio', 'btnAudio')"></button>
                      <audio id="audio" src="./media/audio_s3.mp3"></audio>
                  </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-5 my-5 ml-5">
                            <div class="row">
                                <button type="button" class="btn text-size-s3" data-toggle="modal" data-target="#rta-1">
                                    <div class="col-12 bg-green-1 rounded-top text-white text-center p-5">
                                        <p>Taller de diagnóstico situacional. </p>
                                    </div>
                                    <div class="col-12 bg-green-ultralight rounded-bottom text-green-dark  px-3 py-5">
                                        <p>Identificación de los sentidos y comprensiones sobre infancia, desarrollo integral, familia y otros.</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-5 col-lg-5 my-5 ml-5">
                            <div class="row">
                                <button type="button" class="btn text-size-s3" data-toggle="modal" data-target="#rta-2">
                                    <div class="col-12 bg-orange-semilight rounded-top text-white text-center p-5">
                                        <p>- Fichas de caracterización.
                                        <br>- Proceso de valoración y seguimiento al desarrollo.
                                        <br>- Toma de datos antropométricos.</p>
                                    </div>
                                    <div class="col-12 bg-green-ultralight rounded-bottom text-green-dark px-3 py-5">
                                        <p>Caracterización de familias, niñas, niños y mujeres gestantes que hacen uso de la Unidad.</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-5 col-lg-5 my-5 ml-5">
                            <div class="row">
                                <button type="button" class="btn text-size-s3" data-toggle="modal" data-target="#rta-3">
                                    <div class="col-12 bg-orange-semilight rounded-top text-white text-center p-5">
                                        <p>- Autoevaluación.
                                        <br>- Taller de diagnóstico situacional. </p>
                                    </div>
                                    <div class="col-12 bg-green-ultralight rounded-bottom text-green-dark px-3 py-5">
                                        <p>Caracterización de las condiciones de prestación del servicio en la Unidad.</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-5 col-lg-5 my-5 ml-5">
                            <div class="row">
                                <button type="button" class="btn text-size-s3" data-toggle="modal" data-target="#rta-4">
                                    <div class="col-12 bg-orange-semilight rounded-top text-white text-center p-5">
                                        <p>- Taller de diagnóstico situacional.
                                        <br>- Ficha de caracterización.</p>
                                    </div>
                                    <div class="col-12 bg-green-ultralight rounded-bottom text-green-dark px-3 py-5">
                                        <p >Caracterización del territorio cercano a la UDS o UCA.</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(2)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(4)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <p>Orientada al reconocimiento y la autorreflexión de concepciones y representaciones de los participantes sobre primera infancia y familia, y del talento humano sobre categorías socioculturales como creencias y pautas de crianza propias de la cultura de los municipios donde se atienden las niñas, los niños y sus familias (grupos étnicos: afro, rom, raizal…).
        <br><br>Por ejemplo: si el talento humano trabaja bajo la comprensión de que las familias tienen recursos propios, capacidades y fortalezas para asumir su vida cotidiana, definirá acciones que resalten estos recursos y dejará de lado concepciones que catalogan a las familias como sujetos que solo tienen necesidades. Asimismo, movilizará experiencias significativas, donde las familias construyan sus propias respuestas ante las situaciones problemáticas que se presenten en el proceso de crianza y cuidado de sus niñas y niños. </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-2">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <p>Orientada a recopilar información sobre quiénes son, dónde están y qué condiciones especiales de vida (necesidades, capacidades, intereses, prácticas y fortalezas) tienen las familias, niñas, niños y mujeres gestantes que acceden a las UDS y UCA. </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-3">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <p>Orientada a identificar la situación de prestación del servicio, en relación con los estándares de calidad de cada modalidad, para generar un análisis que permita al talento humano de la EAS, UDS o UCA establecer los retos y acciones de mejoramiento en pro de alcanzar en un tiempo determinado estos estándares. </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-4">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <p> Dirigida a hacer visibles, desde un ejercicio cartográfico, los espacios, actores, redes y relaciones que pueden contribuir al desarrollo integral de la primera infancia, teniendo en cuenta que reconocer el territorio es base para definir posibles acciones de articulación de la atención y conectar las distintas estrategias del POAI con los espacios comunitarios, públicos, sagrados, naturales y culturales. </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
var slideActivityContent = {};

isAudioPlayed = false;

$(document).ready(function () {

});