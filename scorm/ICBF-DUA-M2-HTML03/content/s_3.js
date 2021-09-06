var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
  <div class="col">
    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal del Aprendizaje - DUA &gt; Educación Inclusiva</p></div>
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
    <div class="row content-row align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 p-box">
        <p>Haga clic en la respuesta correcta.</p>  
        <p>¿Cuántos tipos de inteligencia propone Howard Gardner?</p>         
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-1 hidden-sm text-center"></div>
      <div class="col-lg-4 col-sm-12 text-center">
        <img class="img-fluid" src="images/img_s3_content.png" alt="Pregunta 3">
      </div>      
      <div class="col-lg-5 col-sm-12 mt-5">
        <div class="row answers-buttons">
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-incorrect-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
          </div>
          <div class="col-sm-12">
            <button type="button" class="btn btn-light square-left" data-toggle="modal" data-target="#rta-correct-1">
              <div class="answer-sign">
                <div class="circle"></div>
              </div>
              <p class="answer-text"></p>
            </button>
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
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>Howard Gardner propone 8 tipos de inteligencia: visual-espacial, naturalista, lógico-matemática, lingüística, musical, cinético-corporal, intrapersonal, interpersonal.</p>        
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
        <p>Revise el material de estudio nuevamente e intente resolver la actividad.</p>        
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
  controller: "",
  corrects: [
    "8",    
  ],
  incorrects: [
    "6",
    "7",
    "9"    
  ]
};

var finishedActivity = false;
$(document).ready(function () {
  $("#btnNext").hide();
  buildElements();
  setAnswerButtonFunction();
  setCompletedActivityFunction();
});

function buildElements() {
  
  $(".answers-buttons").empty();
  var correctButtons = "";
  var incorrectButtons = "";
  for (var i = 0; i < slideActivityContent.corrects.length; i++) {
    correctButtons += "<div id= 'buttonContainer_" + (i+1) + "' class='col-sm-12'><button type='button' class='btn btn-light square-left' data-toggle='modal' data-target='#rta-correct-1'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>" + slideActivityContent.corrects[i] + "</p></button></div>";
  }
  for (var i = 0; i < slideActivityContent.incorrects.length; i++) {
    incorrectButtons += "<div id= 'buttonContainer_" + (slideActivityContent.corrects.length + i + 1) + "' class='col-sm-12'><button type='button' class='btn btn-light square-left' data-toggle='modal' data-target='#rta-incorrect-1'><div class='answer-sign'><div class='circle'></div></div><p class='answer-text'>" + slideActivityContent.incorrects[i] + "</p></button></div>";
  }
  var answerButtons = correctButtons + incorrectButtons;
  $(".answers-buttons").html(answerButtons);
  randomDiv(".answers-buttons", "#buttonContainer_", (slideActivityContent.corrects.length + slideActivityContent.incorrects.length));

}
function setAnswerButtonFunction() {  
  $(".answers-buttons .btn-light").click(function () {    
    if ($(this).data('target') === "#rta-correct-1") {      
      changeClass ($(this).find( ".circle" ), "incorrect", "correct");
      finishedActivity = true;
      $("#successAudio")[0].play();
    }
    else {
      $(this).addClass("disabled");
      changeClass ($(this).find( ".circle" ), "correct", "incorrect");
      $("#errorAudio")[0].play();
      resetActivity();
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
function resetActivity(){
  $(".master-modal").on('hidden.bs.modal', function () {
    buildElements();
    setAnswerButtonFunction();
    setCompletedActivityFunction();
  });
}
function showNextButton() {  
  if (finishedActivity) {
    $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
  }
}
