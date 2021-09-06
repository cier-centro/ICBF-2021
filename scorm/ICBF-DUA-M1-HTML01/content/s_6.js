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
          <div class="col-lg-5 text-center mb-4">
            <img class="img-fluid" src="images/img_s6_content.png" alt="Pregunta 6">
          </div>
          <div class="col-lg-7">
            <p class="p-box">Carlos tiene 28 años y Juliana 26 años. Ellos son pareja desde hace 7 años. Ahora ellos se quieren casar y desean tener su primer hijo. Sin embargo, sus familias no están de acuerdo con esta decisión dado que Carlos es una persona con discapacidad visual y Juliana es una persona con discapacidad motora (movimiento).<br><br>
            Los artículos de la convención sobre los derechos de las personas con discapacidad a los que pueden apelar (solicitar a un juez o tribunal que anule la sentencia dictada por otro por considerarla injusta) para que sus derechos no sean vulnerados son:</i>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="row answers-buttons">
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 22 - Respeto de la privacidad y Artículo 23 - Salud (en este caso reproductiva específicamente).</p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 23 - Respeto del hogar y la familia y Artículo 25 - Salud (en este caso reproductiva específicamente).</p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 25 - Respeto del hogar y la familia y Artículo 23 - Salud (en este caso reproductiva específicamente).</p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 25 - Respeto del hogar y la familia y Artículo 26 - Habilitación y rehabilitación.</p>
                </button>
              </div>
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
<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>El Artículo 23 - Respeto del hogar y la familia, indica:  «Las personas con discapacidad tienen derecho a escoger dónde, cómo y con quién vivir, así como el número de hijos que quieren tener y el tiempo que debe transcurrir entre un nacimiento y otro»<br><br>
        El Artículo 25 – Salud, indica: «Los Estados Partes reconocen que las personas con discapacidad tienen derecho a gozar del más alto nivel posible de salud sin discriminación por motivos de discapacidad.<br><br>
        ...Proporcionarán a las personas con discapacidad programas y atención de la salud gratuitos o a precios asequibles de la misma variedad y calidad que a las demás personas, incluso en el ámbito de la salud sexual y reproductiva, y programas de salud pública dirigidos a la población».
        </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
        <p>Revise con mayor profundidad los artículos presentados e intente resolver la actividad nuevamente</p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
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
var slideActivityContent = {};
var finishedActivity = false;
$(document).ready(function() {
  $("#btnNext").hide();
  setAnswerButtonFunction();
  setCompletedActivityFunction();
});

function setAnswerButtonFunction() {
  $(".answers-buttons .btn-light").click(function() {
    if ($(this).data('target') === "#rta-correct-1") {
      $(".answers-buttons .btn-light").addClass("disabled");
      changeClass ($(this).find( ".circle" ), "incorrect", "correct");
      finishedActivity = true;
      $("#successAudio")[0].play();
    }
    else {
      $(this).addClass("disabled");
      changeClass ($(this).find( ".circle" ), "correct", "incorrect");
      $("#errorAudio")[0].play();
    }
  });
}
function changeClass (element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}
function setCompletedActivityFunction(){
  $(".master-modal").on('hidden.bs.modal', function () {
    showNextButton();
  });
}

function showNextButton() {
  console.log(finishedActivity);
  if (finishedActivity) {
    $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
  }
}
