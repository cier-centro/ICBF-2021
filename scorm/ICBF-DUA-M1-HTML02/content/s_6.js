var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
  <div class="col">
    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva</p></div>
      <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) " class="btn btn-link btn-home float-right"></a></div>
    </div>
    <div class="row title-row">
      <div class="col d-flex align-items-center row">
        <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Educación inclusiva</p>
        <div class="col-2 col-md-3">
          <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
        </div>
      </div>
    </div>
    <div class="row content-row">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-sm-12">
            <p class="instruction my-4">Seleccione las respuestas correctas.</p>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 mb-4 text-center">
            <img class="img-fluid" src="images/img_s7.png" alt="Educación especial">
          </div>
          <div class="col-lg-6 mb-4">
            <ul class="p-box">
              <li>Se llamará Educación Especial a la que se refiera a los sobresalientes y a quienes presenten deficiencias físicas, mentales, emocionales, sociales o tengan dificultades especiales en el aprendizaje (Decreto número 088 de 1976).</li>
              <li>La educación especial o también conocida como segregada (que separa o divide a los estudiantes) suele verse como un primer modelo de ingreso de las personas con discapacidad a la educación, donde quedan separadas de las personas sin discapacidad; es decir, se educan en un ambiente donde la formación es centrada en la discapacidad (Correa, L. y Rúa, J., 2018)".</li>
            </ul>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-sm-12">
            <p class="instruction my-4">Teniendo en cuenta lo anterior, junto con la educación inclusiva como regla, en la actualidad, la educación especial se debe llevar a cabo de manera…</p>
          </div>
          <div class="col-sm-12">
            <div class="row answers-buttons">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(5) " class="btn btn-link btn-back float-left"></a>
        <a href="#" onclick="currentSlide(7) " id="btnNext" class="btn btn-link btn-next float-right"></a>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-correct">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>La corte ha reiterado que la educación especial se debe llevar a cabo de manera excepcional, ya que la educación inclusiva es la regla dado que permite progresar hacia una sociedad más incluyente y comprometida con los derechos humanos de todos los estudiantes (Correa, L. y Rúa, J., 2018).</p>
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
        <p>Revise el material de estudio e intente resolver la actividad nuevamente.</p>
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
  corrects: ["excepcional"],
  incorrects: ["general", "universal", "global"]
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
}

function getAnswerButtons() {
  var correctButtons = "";
  var incorrectButtons = "";
  for (var i = 0; i < slideActivityContent.corrects.length; i++) {
    correctButtons += "<div id= '" + buttonContainerId + "_" + (i+1) +
      "' class='col-sm-12 col-md-6'><button type='button' class='btn btn-light square-left' data-target='#rta-correct'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>"
      + slideActivityContent.corrects[i] + "</p></button></div>";
  }
  for (var i = 0; i < slideActivityContent.incorrects.length; i++) {
    incorrectButtons += "<div id= '" + buttonContainerId + "_" + (slideActivityContent.corrects.length + i + 1) +
    "' class='col-sm-12 col-md-6'><button type='button' class='btn btn-light square-left' data-toggle='modal' data-target='#rta-incorrect'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>"
    + slideActivityContent.incorrects[i] + "</p></button></div>";
  }
  return (correctButtons + incorrectButtons);
}

function setAnswerButtonFunction() {
  $(buttonsContainerClass + " .btn-light").click(function() {
    if ($(this).data('target') === "#rta-correct") {
      changeClass ($(this).find( ".circle" ), "incorrect", "correct");
      playAudio("success");
      correctAnswers++;
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
