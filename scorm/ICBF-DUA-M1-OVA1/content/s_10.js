var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">

            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row mb-5">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Actividades</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="row content-row">
            <div class="container ">
                <div class="row content-center">
                    <p class="p-box">Complete el párrafo con las opciones de palabras que corresponda:</p>
                </div>
                <div class="p-container p-box">
                  <p>En cada entidad territorial existe un consejo de <b class="tx-orange">______________ </b> que tiene como propósito planificar, coordinar y hacer seguimiento a la <b class="tx-orange"> ________________ </b> de los planes, programas y proyectos sociales en el municipio. Asimismo, existe un grupo técnico que debe gestionar la <b class="tx-orange"> _______________ </b> a la primera infancia integrado por representantes de la <b class="tx-orange"> ________________ </b> y de las entidades que hacen parte del Sistema Nacional de Bienestar Familiar.</p>
                </div>
                <div class="col-sm-12">
                  <div class="row answers-buttons">
                    <div class="col-lg-6">
                      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                        <div class="answer-img first"></div>
                        <p class="answer-text"><b>Atención- ejecución – integración – acción comunal.</b></p>
                        <div class="answer-sign">
                          <div class="circle"></div>
                        </div>
                      </button>
                    </div>
                    <div class="col-lg-6">
                      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-correct-1">
                        <div class="answer-img second"></div>
                        <p class="answer-text"><b>Política social – ejecución – atención integral – administración local.</b></p>
                        <div class="answer-sign">
                          <div class="circle"></div>
                        </div>
                      </button>
                    </div>
                    <div class="col-lg-6">
                      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                        <div class="answer-img third"></div>
                        <p class="answer-text"><b>Representación – planeación – atención integral – región.</b></p>
                        <div class="answer-sign">
                          <div class="circle"></div>
                        </div>
                      </button>
                    </div>
                    <div class="col-lg-6">
                      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                        <div class="answer-img fourth"></div>
                        <p class="answer-text"><b>Política regional – realización – integración – administración.</b></p>
                        <div class="answer-sign">
                          <div class="circle"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(5)" class="btn btn-link btn-back float-left"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
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
