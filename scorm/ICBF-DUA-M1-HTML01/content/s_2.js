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
    <div class="row content-row">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-sm-12">
            <p class="p-box">Según el video visto de Agustina, un ejemplo de un ajuste razonable podría ser:</p>
          </div>
          <div class="col-sm-12">
            <div class="row answers-buttons">
              <div class="col-lg-6">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-img first"></div>
                  <p class="answer-text">Realizar un tablero de comunicación para que una persona con discapacidad se comunique con el docente y con sus compañeros.</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-lg-6">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-correct-1">
                  <div class="answer-img second"></div>
                  <p class="answer-text">Leer un libro y grabarlo para que una persona con discapacidad visual pueda escucharlo y de esta manera seguir la lectura compartida con sus compañeros de clase.</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-lg-6">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-img third"></div>
                  <p class="answer-text">Mandar a hacer rampas al lado de todas las escaleras del colegio para que la movilización de una persona con discapacidad motora (movimiento) sea más fácil en toda la institución.</p>
                  <div class="answer-sign">
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
              <div class="col-lg-6">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-incorrect-1">
                  <div class="answer-img fourth"></div>
                  <p class="answer-text">Contratar a un intérprete de lengua de señas para que esté todo el día en el aula de clase y así una persona con discapacidad auditiva, participe activamente en la misma.</p>
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
        <a href="#" onclick="currentSlide(1) " class="btn btn-link btn-back float-left"></a>
        <a href="#" onclick="currentSlide(3) " id="btnNext" class="btn btn-link btn-next float-right"></a>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>Un ajuste razonable se entiende como las modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con
          discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los Derechos Humanos y libertades fundamentales.</p>
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
        <p>Ha seleccionado un ejemplo de una condición de accesibilidad. Recuerde que un ajuste razonable se entiende como las modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se
          requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los Derechos Humanos y libertades fundamentales.</p>
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
