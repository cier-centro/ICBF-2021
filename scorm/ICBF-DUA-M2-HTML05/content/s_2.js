var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
  <div class="col">
    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva &gt; Módulo 2</p></div>
      <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) " class="btn btn-link btn-home float-right"></a></div>
    </div>
    <div class="row title-row">
      <div class="col d-flex align-items-center row">
        <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Opciones</p>
        <div class="col-2 col-md-3">
          <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
        </div>
      </div>
    </div>
    <div class="row content-row">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 mb-4">
            <img class="img-fluid" src="images/img_s2_content.png" alt="Ilustración elementos">
          </div>
          <div class="col-lg-6">
            <p class="p-box mb-3 py-4 text-center">El Diseño Universal para el Aprendizaje (DUA) se basa en los aprendices desde:</p>
            <div class="row list-of-items">
              <div class="col-sm-12 d-flex item">
                <div class="row">
                  <div class="icon-holder col-4">
                    <img class="img-fluid" src="images/img_s2_icon_1.png" alt="Ilustración elementos">
                  </div>
                  <div class="col-7 item-text medium-font-size d-flex">
                    <p>El diseño Curricular</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 d-flex item">
                <div class="row">
                  <div class="icon-holder col-4">
                    <img class="img-fluid" src="images/img_s2_icon_2.png" alt="Ilustración elementos">
                  </div>
                  <div class="col-7 item-text medium-font-size d-flex">
                    <p>El diseño Curricular</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 d-flex item">
                <div class="row">
                  <div class="icon-holder col-4">
                    <img class="img-fluid" src="images/img_s2_icon_3.png" alt="Ilustración elementos">
                  </div>
                  <div class="col-7 item-text medium-font-size d-flex">
                    <p>Los planes de estudio</p>
                  </div>
                  <button type="button" class="info-right-middle" data-toggle="modal" data-target="#info-modal" >
                  </button>
                </div>
              </div>
            </div>
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
<div class="modal fade master-modal" id="info-modal">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <div class="justify-content-center row">
          <div class="icon-holder col-8 col-lg-3">
            <img class="img-fluid" src="images/img_s2_icon_3.png" alt="Ilustración elementos">
          </div>
          <div class="col-12 col-lg-8 align-items-center d-flex">
            <p class="mb-0">
              Los planes de estudio transforman significativamente la forma de enseñar las formas de participación de los estudiantes y sus respectivas evaluaciones.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col mt-3">
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
  //$("#btnNext").hide();
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
