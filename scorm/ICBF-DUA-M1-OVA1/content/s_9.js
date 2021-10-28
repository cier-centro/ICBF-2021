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
              <p class="p-box">De acuerdo con lo expuesto en el audio, las realizaciones se refieren a:</p>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-10 offset-lg-1">
                <div class="row answers-buttons">
                  <div class="col-sm-12">
                      <div class="btn btn-light-title square-left">
                          <div class="option-title mx-3 my-2 true">
                              V
                          </div>
                          <div class="option-title my-2 false">
                              F
                          </div>
                      </div>
                  </div>

                  <div class="col-sm-12" id="g_1">
                    <button type="button" class="btn btn-light square-left">
                        <p class="answer-text mr-5">
                            <b class="tx-orange">1. </b><b>Vivir y disfrutar del nivel más alto posible de salud.</b>
                        </p>
                        <div class="answer-sign true">
                            <div class="circle"></div>
                        </div>
                        <div class="answer-sign mx-3 my-2 false">
                            <div class="circle"></div>
                        </div>
                    </button>
                  </div>
                   <div class="col-sm-12" id="g_2">
                      <button type="button" class="btn btn-light square-left">
                          <p class="answer-text mr-5">
                              <b class="tx-orange">2. </b><b>Gozar y mantener un estado nutricional adecuado.</b>
                          </p>
                          <div class="answer-sign true">
                              <div class="circle"></div>
                          </div>
                          <div class="answer-sign mx-3 my-2 false">
                              <div class="circle"></div>
                          </div>
                      </button>
                  </div>
                  <div class="col-sm-12" id="g_3">
                      <button type="button" class="btn btn-light square-left">
                          <p class="answer-text mr-5">
                              <b class="tx-orange">3. </b><b>Contar con vecinos cuidadores que favorezcan el desarrollo integral.</b>
                          </p>
                          <div class="answer-sign true">
                              <div class="circle"></div>
                          </div>
                          <div class="answer-sign mx-3 my-2 false">
                              <div class="circle"></div>
                          </div>
                      </button>
                  </div>
                  <div class="col-sm-12" id="g_4">
                      <button type="button" class="btn btn-light square-left">
                          <p class="answer-text mr-5">
                              <b class="tx-orange">4. </b><b>Construir su identidad en un marco de diversidad.</b>
                          </p>
                          <div class="answer-sign true">
                              <div class="circle"></div>
                          </div>
                          <div class="answer-sign mx-3 my-2 false">
                              <div class="circle"></div>
                          </div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center ">
                <div class="col-lg-10 text-center">
                    <button type="button" class="btn btn-end" onClick="checkAnswers()">
                        Validar
                    </button>
                </div>
            </div>
          </div>
        </div>
        
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(4)" class="btn btn-link btn-back float-left"></a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-correct-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Felicitaciones!</h4>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
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
};

var totalQuestions = 4;
var currentAnswers = new Array(totalQuestions);
var correctAnswers = ["V", "V", "F", "V"];

var finishedActivity = false;
$(document).ready(function () {
  $("#btnNext").hide();
  buildElements();
  setAnswerButtonFunction();
  setCompletedActivityFunction();
  currentAnswers.fill(0, 0, totalQuestions);
});

function buildElements() {
  $(".answers-buttons").find(".circle").removeClass("correct");
  currentAnswers.fill(0, 0, totalQuestions);
}

function setAnswerButtonFunction() {

  $("#g_1").find(".true").click(function () {
    changeClass($("#g_1 .true").find(".circle"), "incorrect", "correct");
    $("#g_1 .false").find(".circle").removeClass("correct");
    currentAnswers[0] = "V";
  });

  $("#g_1").find(".false").click(function () {

    changeClass($("#g_1 .false").find(".circle"), "incorrect", "correct");
    $("#g_1 .true").find(".circle").removeClass("correct");
    currentAnswers[0] = "F";
  });

  $("#g_2").find(".true").click(function () {
    changeClass($("#g_2 .true").find(".circle"), "incorrect", "correct");
    $("#g_2  .false").find(".circle").removeClass("correct");
    currentAnswers[1] = "V";
  });

  $("#g_2").find(".false").click(function () {
    changeClass($("#g_2 .false").find(".circle"), "incorrect", "correct");
    $("#g_2 .true").find(".circle").removeClass("correct");
    currentAnswers[1] = "F";
  });

  $("#g_3").find(".true").click(function () {
    changeClass($("#g_3  .true").find(".circle"), "incorrect", "correct");
    $("#g_3  .false").find(".circle").removeClass("correct");
    currentAnswers[2] = "V";
  });

  $("#g_3").find(".false").click(function () {
    changeClass($("#g_3 .false").find(".circle"), "incorrect", "correct");
    $("#g_3 .true").find(".circle").removeClass("correct");
    currentAnswers[2] = "F";
  });

  $("#g_4").find(".true").click(function () {
    changeClass($("#g_4  .true").find(".circle"), "incorrect", "correct");
    $("#g_4  .false").find(".circle").removeClass("correct");
    currentAnswers[3] = "V";
  });

  $("#g_4").find(".false").click(function () {
    changeClass($("#g_4 .false").find(".circle"), "incorrect", "correct");
    $("#g_4 .true").find(".circle").removeClass("correct");
    currentAnswers[3] = "F";
  });
}

function changeClass (element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}


$(document).ready(function() {

});

function equalArrays(a,b)
{
  if(a.length!=b.length)
   return false;
  else
  {
   for(i=0; i<a.length; i++)
   if(a[i] != b[i])
    return false;
    return true;
  }
}


function checkAnswers() {
  if (equalArrays(currentAnswers,correctAnswers)) {
    console.log("Correcto");
    finishedActivity = true;
    $("#successAudio")[0].play();
    $(".answers-buttons .btn-light").addClass("disabled");
    $("#rta-correct-1").modal();
    $(".master-modal").on('hidden.bs.modal', function () {
      showNextButton()
    });
  }
  else {
    console.log("Incorrecto");
    $("#errorAudio")[0].play();
    $("#rta-incorrect-1").modal();
    resetActivity();
  }
}

function resetActivity() {
  buildElements();
  $(".master-modal").on('hidden.bs.modal', function () {
    buildElements();
    setAnswerButtonFunction();
    setCompletedActivityFunction();
  });
}
