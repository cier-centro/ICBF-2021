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
            <p class="p-box">La capacidad jurídica es la posibilidad que tenemos para hacer efectivos unos derechos y ponerlos en práctica, por lo cual se convierte en una característica muy importante de la personalidad jurídica; que es aquella que permite a un individuo ser un sujeto de derecho. <!--<q>Unidad para la Atención y Reparación Integral a las Víctimas, 2015</q> --></p>
          </div>
          <div class="col-lg-6 mb-4">
            <p class="question-text p-box">¿Qué artículo de la convención sobre los derechos de las personas con discapacidad se encarga de hacer valer que una persona con discapacidad tenga capacidad jurídica?</p>
          </div>
          <div class="col-lg-6">
            <div class="row answers-buttons">
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 12 - Igual reconocimiento como persona ante la ley. </p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 16 - Protección contra la explotación, la violencia y el abuso.</p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 6 - Mujeres con discapacidad.</p>
                </button>
              </div>
              <div class="col-sm-12">
                <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                  <p class="answer-text">Artículo 7 - Niños con discapacidad. </p>
                </button>
              </div>
            </div>
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
<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>En el artículo 12 se indica que los Estados Partes reafirman que las personas con discapacidad tienen derecho en todas partes al reconocimiento de su personalidad jurídica, así mismo reconocerán que tienen capacidad jurídica en igualdad de condiciones con las demás en todos los aspectos de la vida, y adoptarán las medidas pertinentes para proporcionar acceso al apoyo que puedan necesitar en el ejercicio de su capacidad jurídica.</p>
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
        <p>Revise en qué se enfoca cada uno de los 50 artículos de la Convención sobre los Derechos de las Personas con Discapacidad e intente resolver la actividad nuevamente.</p>
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
