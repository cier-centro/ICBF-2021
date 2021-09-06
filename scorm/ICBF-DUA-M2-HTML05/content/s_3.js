var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
  <div class="col">
    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal del Aprendizaje - DUA &gt; Educación Inclusiva &gt; Módulo 2</p></div>
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
          <div class="col-lg-7">
            <p class="p-box py-4 text-center my-3">Los DUA se relacionan con: </p>
            <div class="row list-of-items">
              <div class="col-sm-10 item row">
                <div class="icon-holder col-3">
                  <img class="img-fluid" src="images/img_s3_icon_map.png" alt="Ilustración elementos">
                </div>
                <div class="col-8 item-text d-flex">
                  <p>¿Cómo se definen los objetivos?</p>
                </div>
              </div>
              <div class="col-sm-10 item row">
                <div class="icon-holder col-3">
                  <img class="img-fluid" src="images/img_s3_icon_map.png" alt="Ilustración elementos">
                </div>
                <div class="col-8 item-text d-flex">
                  <p>Métodos de enseñanza</p>
                </div>
              </div>
              <div class="col-sm-10 item row">
                <div class="icon-holder col-3">
                  <img class="img-fluid" src="images/img_s3_icon_map.png" alt="Ilustración elementos">
                </div>
                <div class="col-8 item-text d-flex">
                  <p>Materiales de instrucciones</p>
                </div>
              </div>
              <div class="col-sm-10 item row">
                <div class="icon-holder col-3">
                  <img class="img-fluid" src="images/img_s3_icon_map.png" alt="Ilustración elementos">
                </div>
                <div class="col-8 item-text d-flex">
                  <p>Evaluaciones</p>
                </div>
              </div>
              <div class="col-sm-10 item row">
                <div class="icon-holder col-3">
                  <img class="img-fluid" src="images/img_s3_icon_flag.png" alt="Ilustración elementos">
                </div>
                <div class="col-8 item-text d-flex">
                  <p>Procesos flexibles</p>
                </div>
                <button type="button" class="info-right-middle" data-toggle="modal" data-target="#info-modal" >
                </button>
              </div>
              
            </div>
          </div>
          <div class="col-lg-5 mb-4">
            <img class="img-fluid" src="images/img_s3_content.png" alt="Ilustración elementos">
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
<div class="modal fade master-modal" id="info-modal">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">Procesos flexibles</h4>
          <p>
            <ul>
              <li>Resolución de problemas</li>
              <li>Aprendizaje por proyectos</li>
            </ul>
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
