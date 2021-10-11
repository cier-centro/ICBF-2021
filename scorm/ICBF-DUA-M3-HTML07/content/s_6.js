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
                <p class="instruction">
                    Completa el párrafo con la palabra que corresponde:
                </p>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-sm-1"></div>
            <div class="col-sm-10 p-container" id="incompleteText">
            </div>
        </div>
        <div class="row  align-items-center my-4">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <div id="textButtonOptions" class="row">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-sm-1 col-sm-10 text-center">
                <button onclick="resetActivity()" class="btn btn-primary mr-3" id="btn-resetQuestion">Reiniciar</button>
                <button onclick="checkAnswers()" class="btn btn-primary" id="btn-endQuestion">Finalizar</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(4) " class="btn btn-link btn-back float-left mt-4"></a>
                <a href="#" onclick="currentSlide(7) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" tabindex="-1" role="dialog" id="retroModal">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title"></h4>
                <p class="modal-text"></p>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" tabindex="-1" role="dialog" id="retroModalFinal">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title"></h4>
                <p class="modal-text"></p>
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
  //- Actividad Complete Text -
  controller: "js/activity.complete-text.js",
  //---Parámetros
  //Seleccionar tipo de Actividad
  //1 - De botón a campo
  //2 - De campo a botón
  //3 - Mixto
  type: 3,
  //Aleatorizar el orden de las opciones
  allowRandom: true,
  //Mostrar retroalimentacion al momento de emparejar campo con texto
  //En false evaluará con el btn de Finalizar (Validación pasiva)
  allowActiveCheck: true,
  //Validación activa/pasiva:
  //Mostrar una retroalimentacion final al terminar en el modo activo, disponible si allowActiveCheck está activo (true)
  allowActiveFinalCheck: true,
  //Clase (distribución) de los contenedores de los botones de texto
  buttonContainerClass: "col-12 col-sm-6 col-xl-4 my-1",
  //Arreglo de frases para construir el texto:
  //firstPhrase: Frase inicial antes de la palabra oculta (opcional).
  //hiddenWord: Palabra que se va a ocultar en la actividad y que aparecerá como botón de texto.
  //labels: Frase final después de la palabra oculta (opcional).
  phrases: [
    {

      firstPhrase: "<p> <b>Género</b>: se refiere a los",
      hiddenWord: "atributos",
      lastPhrase: "  y "
    }, {
      firstPhrase: "expectativas ",
      hiddenWord: "sociales",
      lastPhrase: " sobre mujeres y hombres, "
    }, {
      firstPhrase: "niños y ",
      hiddenWord: "niñas",
      lastPhrase: ". Pueden variar "
    }, {
      firstPhrase: "entre",
      hiddenWord: "comunidades",
      lastPhrase: "y países.<p>"
    }, {
      firstPhrase: "<p><b>Sexo</b>: las diferencias ",
      hiddenWord: "biológicas",
      lastPhrase: "entre mujeres/niñas y hombres/niños. "
    },{
      firstPhrase: "El ",
      hiddenWord: "sexo",
      lastPhrase: "no se "
    },{
      firstPhrase: "puede ",
      hiddenWord: "cambiar",
      lastPhrase: " sino "
    },{
      firstPhrase: "por ",
      hiddenWord: "intervención",
      lastPhrase: " médica.</p>"
    },

  ],
  allowFakeWorks: false,
  fakewords: ["", "", ""]
};
// -------------------------------
//funcion de completacion de cada pregunta
function completeQuestion() {
  $('#retroModal').find(".modal-title").html("¡Vuelva a intentarlo!");
  $('#retroModal').find(".modal-text").html("Revisa nuevamente el concepto para que pueda ubicar correctamente el texto que le corresponde.");
  $('#retroModal').modal();
  $("#errorAudio")[0].play();
}

function completeQuestionRight() {
  $("#successAudio")[0].play();
}
// -------------------------------
//funcion de completacion de la actividad
function exitActivity(result) {
  if (slideActivityContent.allowActiveCheck) {
    if (slideActivityContent.allowActiveFinalCheck) {

        if (result == slideActivityContent.phrases.length) {
          $('#retroModalFinal').find(".modal-title").html("¡Felicitaciones! ");
          $('#retroModalFinal').find(".modal-text").html("Identificas los diferentes conceptos.");
          $("#retroModal").unbind('hidden.bs.modal');
          $('#retroModalFinal').modal();

          $("#btnNext").fadeIn(500).delay(500).effect("bounce", "slow");

        }

    }
  } else {
    if (result == slideActivityContent.phrases.length) {
      $("#successAudio")[0].play();
      $('#retroModalFinal').find(".modal-title").html("¡Felicitaciones! ");
      $('#retroModalFinal').find(".modal-text").html("Identificas los diferentes conceptos.");
      $('#retroModal').modal();
      $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
    } else {

      $('#retroModal').find(".modal-title").html("Incorrecto - Modo Pasivo");
      $('#retroModal').find(".modal-body").html("<h4>¡Vuelva a intentarlo!</h4><p>Revise el material de estudio para identificar en qué consiste cada uno de los procesos presentados e intente resolver nuevamente la actividad.</p><div class='btn-exit'><a href='#' data-dismiss='modal' class='btn btn-link btn-next float-right'></a></div>");
      $('#retroModal').modal();
      $("#btn-resetQuestion").show();
    }
  }
}
// -------------------------------
