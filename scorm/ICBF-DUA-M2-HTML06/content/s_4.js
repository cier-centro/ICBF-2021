var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Actividad 3</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) "
                    class="btn btn-link btn-home float-right"></a></div>
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
                    <div class="col-lg-8">
                        <p class="p-box mb-4">Seleccione cuál de las siguientes no es una opción para favorecer la compresión:</p>
                        <div class="row answers-buttons"></div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <img class="img-fluid" src="images/img_slide_4.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(3) " class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(5) " id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-correct">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Muy bien!</h4>
                <p>Diferenciar el grado de dificultad o complejidad dentro del cual se pueden completar actividades básicas es una opción para sostener los esfuerzos y persistencia pero no la comprensión.</p>
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
                <p>Recuerde que las opciones para la comprensión proporcionan o activan el conocimiento.</p>
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
  corrects: ["Diferenciar el grado de dificultad o complejidad dentro del cual se pueden completar actividades básicas."],
  incorrects: ["Activar el conocimiento previo.","Resaltar elementos clave en textos, gráficos, diagramas y fórmulas.","Usar claves e indicaciones para llamar la atención sobre las características críticas."]
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
  //$(buttonsContainerClass).append($('#buttonContainer_'+($("[id*='" + buttonContainerId + "']").length)));

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
