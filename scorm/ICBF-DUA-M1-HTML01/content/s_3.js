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
            <p class="p-box">Teniendo en cuenta la convención sobre los derechos de las personas con discapacidad, ¿Cuál es la cantidad exacta de artículos que se discuten en ella?:</p>
          </div>
          <div class="col-lg-6 text-center mb-4">
            <img class="img-fluid" src="images/img_s3_content.png" alt="Pregunta 2">
          </div>
          <div class="col-lg-6">
            <div class="row answers-buttons">
              <div class="col-md-6">
                <button type="button" class="btn btn-light no-image" data-toggle="modal" data-target="#rta-incorrect-1">
                  <p class="answer-text">34</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-light no-image" data-toggle="modal" data-target="#rta-incorrect-1">
                  <p class="answer-text">49</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-light no-image" data-toggle="modal" data-target="#rta-correct-1">
                  <p class="answer-text">50</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-md-6">
                <button type="button" class="btn btn-light no-image" data-toggle="modal" data-target="#rta-incorrect-1">
                  <p class="answer-text">55</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
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
        <a href="#" onclick="currentSlide(2) " class="btn btn-link btn-back float-left"></a>
        <a href="#" onclick="currentSlide(4) " id="btnNext" class="btn btn-link btn-next float-right"></a>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>La Convención sobre los Derechos de las Personas con Discapacidad cuenta con 50 artículos.</p>
        <div class="row align-items-end mt-5">
          <div class="col">
            <p class="mb-1">Para recordarlos.</p>
            <a href="documents/convention.pdf" target="_blank" class="btn btn-light btn-pdf float-left">Haga clic aquí</a>
          </div>
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right" data-dismiss="modal"></a>
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
        <p>¡Vuelva a intentarlo! La Convención sobre los Derechos de las Personas con Discapacidad discute 50 artículos en total.</p>
        <div class="row align-items-end mt-5">
          <div class="col">
            <p class="mb-1">Para recordarlos.</p>
            <a href="documents/convention.pdf" target="_blank" class="btn btn-light btn-pdf float-left">Haga clic aquí</a>
          </div>
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right" data-dismiss="modal"></a>
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
