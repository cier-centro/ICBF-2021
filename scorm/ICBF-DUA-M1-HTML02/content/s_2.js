var slideTitle = "Educación inclusiva";
var slideContent = `
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
    <div class="row d-flex align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <p class="instruction my-4">Seleccione la respuesta correcta de la lista desplegable.</p>
      </div>
    </div>
    <div class="row content-row align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 p-container p-box text-center">
        <p>En Colombia, desde 1994 se han creado políticas entorno a la discapacidad y en cada una de ella se han usado diversos términos para hacer referencia a niñas, niños y jóvenes con discapacidad.</p>
        <p><b>Relacione cada uno de los términos con la Ley o Decreto que lo contempla.</b></p>
      </div>
    </div>
    <div class="row  align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_1" class="custom-select" id="select_1">
        <option value="0">---</option>
        <option value="1">Decreto 1421 de 2017</option>
        <option value="2">Ley 1618 de 2013</option>
        <option value="3">Ley 115 de 1994</option>
        <option value="4">Decreto 366 de 2009</option>
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Población con discapacidad</p>
      </div>
    </div>

    <hr class="text-line">

    <div class="row align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_2" class="custom-select" id="select_2">
        <option value="0">---</option>
        <option value="1">Ley 115 de 1994</option>
        <option value="2">Decreto 366 de 2009</option>
        <option value="3">Decreto 1421 de 2017</option>
        <option value="4">Ley 1618 de 2013</option>
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Personas con Discapacidad/ Niños con Necesidades Educativas Especiales</p>
      </div>
    </div>

    <hr class="text-line">

    <div class="row align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_3" class="custom-select" id="select_3">
        <option value="0">---</option>
        <option value="1">Ley 1618 de 2013</option>
        <option value="2">Ley 115 de 1994</option>
        <option value="3">Decreto 1421 de 2017</option>
        <option value="4">Decreto 366 de 2009</option>
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Limitados</p>
      </div>
    </div>

    <hr class="text-line">

    <div class="row align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_4" class="custom-select" id="select_4">
        <option value="0">---</option>
        <option value="1">Ley 1618 de 2013</option>
        <option value="2">Decreto 1421 de 2017</option>
        <option value="3">Decreto 366 de 2009</option>
        <option value="4">Ley 115 de 1994</option>
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Estudiantes con discapacidad y estudiantes con capacidades o con talentos excepcionales</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(1) " class="btn btn-link btn-back float-left mt-4"></a>
        <a href="#" onclick="currentSlide(3) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>El término para referirse a las personas con discapacidad ha cambiado a lo largo de la normativa colombiana, inicialmente en la Ley 115 de 1994 se usaba “Limitado”, después con el Decreto 366 de 2009 se utilizó “Estudiantes con discapacidad y estudiantes con capacidades o con talentos excepcionales”; luego, con la Ley 1618 de 2013 se empleó “Personas con Discapacidad/ Niños con Necesidades Educativas Especiales” y finalmente, en el Decreto 1421 de 2017 se usó el término “Población con discapacidad”, el cual ha sido usado hasta la actualidad (año 2019).</p>
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
        <p>Con el paso del tiempo la terminología para referirse a personas con discapacidad  ha ido evolucionando. Revise la terminología en cada una de las leyes y decretos presentados e intente resolver la actividad nuevamente.</p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
var slideActivityContent = {};
var totalSelect = 4;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 1, 4, 2, 3];
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

  $("#select_4").change(function() {
    currentSelection = 4;
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
      $("#rta-correct-1").modal({
        backdrop: 'static'
      }, "show");
    } else {
      //showModal Incorrecto
      $("#errorAudio")[0].play();
      $("#rta-incorrect-1").modal({
        backdrop: 'static'
      }, "show");
    }
  }
}

function resetModal() {

  $("#rta-incorrect-1").modal("hide");
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
  $("#rta-correct-1").modal("hide");
  $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
}
