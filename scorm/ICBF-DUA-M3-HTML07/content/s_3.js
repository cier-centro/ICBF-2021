var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
    <div class="col-sm-12">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) "
                    class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Educación inclusiva</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
                </div>
            </div>
        </div>
        <div class="row my-3 mt-5 align-items-center">
            <div class="col-sm-10 offset-sm-1 p-container p-box mb-0">
                <p>A partir de la lectura «La Discapacidad en el espejo – Artículo 8 de la Convención», asocia los conceptos a los títulos que correspondan.</h>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-sm-10 offset-sm-1">
                <div class="card-deck row">
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_1">
                        <div class="select-card-inner">
                            <p><b>Discapacidad en el ámbito de derechos humanos</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_2">
                        <div class="select-card-inner">
                            <p>Supone reconocer y proclamar un deseo de reconocimiento.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_3">
                        <div class="select-card-inner">
                            <p><b>Toma de conciencia</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_4">
                        <div class="select-card-inner">
                            <p>Está dada desde el entender a la otra persona cuando nos percatamos de su existecia.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_5">
                        <div class="select-card-inner">
                            <p><b>Las barreras dadas desde lo social y jurídico</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_6">
                        <div class="select-card-inner">
                            <p>Son elementos que determinan el nivel de discapacidad.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_7">
                        <div class="select-card-inner">
                            <p><b>Primer paso hacia la toma de conciencia</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-xl-3 col-lg-6" id="card_8">
                        <div class="select-card-inner">
                            <p>Reconocer la discriminación y la exclusión.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(2) " class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(4) " id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" tabindex="-1" role="dialog" id="findPairCardRetroModal">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title"></h4>
                <p class="modal-text"></p>
            </div>
        </div>
    </div>
</div>

<audio id="successAudio">
    <source src="media/success.mp3" type="audio/mpeg">
</audio>
<audio id="errorAudio">
    <source src="media/error.mp3" type="audio/mpeg">
</audio>

`;

var slideActivityContent = {
  //---Actividad ENCONTRAR PAREJAS---
  controller: "js/activity.find-pair.js",
  //Parámetros:
  //Total Parejas
  totalCards: 8,
  //Establecer los intentos permitidos. Desactivar con: "-1"
  totalAttempts: -1,
  //Parejas correctas
  cardsPairs: [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ],
  //(0/1) Establecer retroalimentación para pareja correcta: "allowCheckPair" incorrecta: allowCheckPairWrong y/o al finalizar: "allowCheckEnd"
  allowCheckPair: 0,
  allowCheckPairWrong: 1,
  allowCheckEnd: 1,
  //Establecer tiempo de espera para terminar la animacion del giro, impide volter cartas continuamente
  animatingTime: 300,
  //Randomizar tarjetas
  allowRandom: true,
  //Retroalimentacion Correcto
  feedbackCorrect:['¡Felicitaciones!','<p>Identificas los pasos que se han de seguir para el reconocimiento de los Derechos y la toma de conciencia, de las personas en condición de Discapacidad. </p>'],
  //Retroalimentacion Incorrecto
  feedbackWrong:'',
  //Retroalimentacion para cada pareja correcta
  feedbackPair:[
    [' ' ,'<p></p>'],
    [' ','<p></p>'],
    [' ','<p></p>'],
    [' ','<p></p>']
  ],
  //Retroalimentacion para cada pareja incorrecta
  feedbackPairWrong:[
    ['¡Vuelva a intentarlo!','Revisa nuevamente la lectura de La Discapacidad en el Espejo-Artículo 8 de la convención.'],
  ]
};

$(document).ready(function () {
  $(".btn-next").hide();
});
