var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Actividad 1</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Actividades de práctica</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="row content-row">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6 mb-4">
                        <div class="row">
                            <div class="col-12 bg-orange-semilight rounded-top text-white text-center p-5">
                                <p><b>Lea con atención las siguientes opciones:</b></p>
                            </div>
                            <div class="col-12 bg-green-ultralight rounded-bottom text-green-dark px-3 py-5">
                                <ul class="slide-list mb-0">
                                    <li>Contrastar el fondo con el texto o la imagen.</li>
                                    <li>Proporcionar diagramas visuales, gráficos, notaciones de música o sonido.</li>
                                    <li>Controlar el volumen o la velocidad del habla o sonido.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="p-box mb-4">Las acciones enunciadas anteriormente facilitan:</p>
                        <div class="row answers-buttons"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(1) " class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(3) " id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-correct">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Muy bien!</h4>
                <p>Contrastar el fondo con el texto o la imagen; proporcionar diagramas visuales, gráficos, notaciones de música o sonido, y controlar el volumen o la velocidad del habla o sonido son opciones que facilitan la percepción de la información expuesta.</p>
                <div class="row">
                    <div class="col">
                        <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
                <p>Revise nuevamente las opciones de cada principio del DUA.</p>
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
var slideActivityContent = {
  controller: "",
  corrects: ["La percepción."],
  incorrects: ["Las habilidades expresivas y de fluidez.","La acción física.","Ninguna de las anteriores."]
};

var correctAnswers;
var buttonsContainerClass = ".answers-buttons";
var buttonContainerId = "buttonContainer";

$(document).ready(function() {
  $("#btnNext").hide();
  restartActivity();
  setCompletedActivityFunction();
});

function restartActivity(){
  buildElements();
  setAnswerButtonFunction();
}

function buildElements() {
  correctAnswers = 0;
  $(buttonsContainerClass).empty();
  var answerButtons = getAnswerButtons();
  $(buttonsContainerClass).html(answerButtons);
  randomDiv(buttonsContainerClass, "#" + buttonContainerId + "_", ($("[id*='" + buttonContainerId + "']").length));
  $(buttonsContainerClass).append($('#buttonContainer_'+($("[id*='" + buttonContainerId + "']").length)));
}

function getAnswerButtons() {
  var correctButtons = "";
  var incorrectButtons = "";
  for (var i = 0; i < slideActivityContent.corrects.length; i++) {
    correctButtons += "<div id= '" + buttonContainerId + "_" + (i+1) +
      "' class='col-sm-12'><button type='button' class='btn btn-light square-left' data-target='#rta-correct'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>"
      + slideActivityContent.corrects[i] + "</p></button></div>";
  }
  for (var i = 0; i < slideActivityContent.incorrects.length; i++) {
    incorrectButtons += "<div id= '" + buttonContainerId + "_" + (slideActivityContent.corrects.length + i + 1) +
    "' class='col-sm-12'><button type='button' class='btn btn-light square-left' data-toggle='modal' data-target='#rta-incorrect'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>"
    + slideActivityContent.incorrects[i] + "</p></button></div>";
  }
  return (correctButtons + incorrectButtons);
}

function setAnswerButtonFunction() {
  $(buttonsContainerClass + " .btn-light").click(function() {
    if ($(this).data('target') === "#rta-correct") {
      if(hasClass($(this).find( ".circle" ), "correct")){
        removeClass ($(this).find( ".circle" ), "correct");
        correctAnswers--;
      }
      else{
        changeClass ($(this).find( ".circle" ), "incorrect", "correct");
        playAudio("success");
        correctAnswers++;
        //$(this).setAttribute("disable","true")
      }
    }
    else {
      $(buttonsContainerClass + " .btn-light").addClass("disabled");
      changeClass ($(this).find( ".circle" ), "correct", "incorrect");
      playAudio("error");
    }
    if (correctAnswers == slideActivityContent.corrects.length) {
      $(buttonsContainerClass + " .btn-light").addClass("disabled");
      $('#rta-correct').modal();
    }
  });
}

function changeClass (element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}

function removeClass (element, classRemove) {
  element.removeClass(classRemove);
}

function hasClass(element, cls) {
  return (' ' + element[0].className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function setCompletedActivityFunction(){
  $("#rta-correct").on('hidden.bs.modal', function () {
    showNextButton();
  });
  $("#rta-incorrect").on('hidden.bs.modal', function () {
    restartActivity();
  });
}

function showNextButton() {
  $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
}
