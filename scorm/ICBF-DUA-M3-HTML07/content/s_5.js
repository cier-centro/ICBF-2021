var slideTitle = "";
var slideContent = `
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Toma de conciencia (FSC)</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center mt-5 mb-3">
            <div class="col-sm-10">
                <p class="instruction">Seleccione la respuesta correcta de la lista desplegable.</p>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col-sm-10 p-container p-box">
                <p>Ordena las obligaciones que se deben de tener presentes en la “toma de conciencia”:</p>
            </div>
        </div>
        <div class="row  align-items-center">
            <div class="col-lg-1 hidden-md"></div>
            <div class="col-lg-3 col-md-4">
                <select name="value_1" class="custom-select" id="select_1">
                    <option value="0">---</option>
                    <option value="1">- 1 -</option>
                    <option value="2">- 2 -</option>
                    <option value="3">- 3 -</option>
                </select>
            </div>
            <div class="col-lg-7 col-md-7 p-container-select">
                <p>Se encuentra referido a su propia inserción en un tratado internacional, conforme al cual los Estados
                    Partes deben cumplirlo a través de las obligaciones clásicas de respetar, proteger y aplicar.</p>
            </div>
        </div>

        <hr class="text-line">

        <div class="row align-items-center">
            <div class="col-lg-1 hidden-md"></div>
            <div class="col-lg-3 col-md-4">
                <select name="value_2" class="custom-select" id="select_2">
                    <option value="0">---</option>
                    <option value="1">- 1 -</option>
                    <option value="2">- 2 -</option>
                    <option value="3">- 3 -</option>
                </select>
            </div>
            <div class="col-lg-7 col-md-7 p-container-select">
                <p>Son aquellas obligaciones específicas y concretas que se establecen de forma detallada para ser
                    llevadas a cabo en cada nación.</p>
            </div>
        </div>

        <hr class="text-line">

        <div class="row align-items-center">
            <div class="col-lg-1 hidden-md"></div>
            <div class="col-lg-3 col-md-4">
                <select name="value_3" class="custom-select" id="select_3">
                    <option value="0">---</option>
                    <option value="1">- 1 -</option>
                    <option value="2">- 2 -</option>
                    <option value="3">- 3 -</option>
                </select>
            </div>
            <div class="col-lg-7 col-md-7 p-container-select">
                <p>Debe atender al texto concreto de la CRPD, cuyo Artículo 4 contiene obligaciones genéricas para los
                    Estados Partes de aplicar la Convención. Suponen una mayor especificación y concreción de las
                    obligaciones genéricas descritas en el apartado anterior.</p>
            </div>
        </div>

        <hr class="text-line">

        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(4) " class="btn btn-link btn-back float-left mt-4"></a>
                <a href="#" onclick="currentSlide(6) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="modalRight" tabindex="-1" role="dialog">
    <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Muy bien!</h4>
                <p class="modal-text">Haz organizado las medidas y comprendes de forma general el proceso de “toma de conciencia”.</p>
                <div class="btn-exit">
                    <a href="#" onclick="exitSlide()" class="btn btn-link btn-next float-right"></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="modalWrong" tabindex="-1" role="dialog">
    <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
                <p class="modal-text">Te has confundido de forma muy leve, es un buen ejercicio recordar las medidas en el orden presentado. </p>
                <div class="btn-exit">
                    <a href="#" onclick="resetModal()" class="btn btn-link btn-next float-right"></a>
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
var totalSelect = 3;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 1, 3, 2];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function() {
  $("#btnNext").hide();
  currentAnswer.fill(0, 0, totalSelect);
  completed.fill(0, 0, totalSelect);

  $(".hide").hide();

  $("#select_1").change(function() {
    currentSelection = 1;
    completed[currentSelection - 1] = 1;

    if ($(this).val() > 0) {
      $(this).prop('disabled', true);
      checkSelect($(this).val());
    }
  });

  $("#select_2").change(function() {
    currentSelection = 2;
    completed[currentSelection - 1] = 1;

    if ($(this).val() > 0) {
      $(this).prop('disabled', true);
      checkSelect($(this).val());
    }
  });

  $("#select_3").change(function() {
    currentSelection = 3;
    completed[currentSelection - 1] = 1;

    if ($(this).val() > 0) {
      $(this).prop('disabled', true);
      checkSelect($(this).val());
    }

  });



});

function checkSelect(id) {
  if (answer[currentSelection] == id) {
    currentAnswer[currentSelection] = 1;
  } else {
    currentAnswer[currentSelection] = 0;
  }
  checkEnd();
}

function checkEnd() {
  var result = currentAnswer.reduce((a, b) => a + b, 0);
  var complete = completed.reduce((a, b) => a + b, 0);
  if (complete == totalSelect) {
    if (result == totalSelect) {
      //showModal Correcto
      $("#successAudio")[0].play();
      $("#modalRight").modal({
        backdrop: 'static'
      }, "show");
    } else {
      //showModal Incorrecto
      $("#errorAudio")[0].play();
      $("#modalWrong").modal({
        backdrop: 'static'
      }, "show");
    }
  }
}

function resetModal() {
  $("#modalWrong").modal("hide");
  totalCorrect = 0;
  currentSelection = 0;
  currentAnswer.fill(0, 0, totalSelect);
  completed.fill(0, 0, totalSelect);
  for (k = 1; k <= totalSelect; k++) {
    $("#select_" + k).prop('disabled', false);
    $("#select_" + k + " option[value='0']").prop('selected', true);
  }
}

function exitSlide() {
  $("#modalRight").modal("hide");
  $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
}
