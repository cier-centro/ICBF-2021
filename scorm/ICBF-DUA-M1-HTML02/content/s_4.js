var slideTitle = "Actividad de CompleteText";
var slideContent = `
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
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <p class="instruction">Haga clic en los botones de la parte inferior para completar los textos. Haga clic en los campos para corregir.</p>
      </div>
    </div>
    <div class="row content-row align-items-center">
      <div class="col-sm-2"></div>
      <div class="col-sm-8 p-container" id="incompleteText">
      </div>
    </div>
    <div class="row  align-items-center my-4">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <div id="textButtonOptions" class="row">
        </div>
      </div>
    </div>

    <hr class="text-line">
    <div class="row">
      <div class="offset-sm-2 col-sm-8 text-center">
        <button onclick="resetActivity()" class="btn btn-primary mr-3" id="btn-resetQuestion">Reiniciar</button>
        <button onclick="checkAnswers()" class="btn btn-primary btn-access" id="btn-endQuestion">Finalizar</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(3) " class="btn btn-link btn-back float-left mt-4"></a>
        <a href="#" onclick="currentSlide(5) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="retroModal">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
      </div>
      <!--<div class="modal-footer"></div>-->
    </div>
  </div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="retroModalFinal">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
      </div>
      <!--<div class="modal-footer"></div>-->
    </div>
  </div>
</div>
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
  allowActiveCheck: false,
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
      firstPhrase: "Siempre que estemos ante un proceso constante donde se reconoce, valora y responde de manera adecuada a la variedad de características, intereses, posibilidades y expectativas de toda la población, vamos a hablar de una",
      hiddenWord: "educación inclusiva",
      lastPhrase: ".<hr>"
    }, {
      firstPhrase: "<p>La ",
      hiddenWord: "integración",
      lastPhrase: " ofrece oportunidades para aprender a todos los alumnos con base en la interacción cotidiana entre ellos, prepara a los estudiantes con discapacidades para la vida y profesiones futuras en un ambiente que es más representativo de la sociedad y promueve el desarrollo académico y social de los estudiantes con discapacidades, promueve la comprensión y el aprecio por las diferencias particulares de cada persona, entre otras. </p><hr>"
    }, {
      firstPhrase: "<p>Se entiende como el conjunto de actuaciones educativas dirigidas a dar respuesta a las diferentes capacidades, ritmos y estilos de aprendizaje, motivaciones e intereses, situaciones sociales, culturales, lingüísticas y de salud del alumnado. Por tanto, la ",
      hiddenWord: "atención a la diversidad",
      lastPhrase: " constituye un principio fundamental que debe regir a todos los niveles educativos, asegurando la igualdad de oportunidades de los estudiantes ante la educación, evitando hasta donde sea posible, el fracaso y abandono escolar.</p>"
    }
  ],
  allowFakeWorks: true,
  fakewords: ["hola", "me llamo", "juegos"]
};
// -------------------------------
//funcion de completacion de cada pregunta
function completeQuestion(id) {
  switch (id) {
    case 1:
      $('#retroModal').find(".modal-title").html("Correcto 1");
      $('#retroModal').find(".modal-body").html("Felicitaciones");
      $('#retroModal').modal();
      break;
    case 2:
      $('#retroModal').find(".modal-title").html("Correcto 2");
      $('#retroModal').find(".modal-body").html("Felicitaciones");
      $('#retroModal').modal();
      break;
    case 3:
      $('#retroModal').find(".modal-title").html("Correcto 3");
      $('#retroModal').find(".modal-body").html("Felicitaciones");
      $('#retroModal').modal();
      break;
    case 4:
      $('#retroModal').find(".modal-title").html("Correcto 4");
      $('#retroModal').find(".modal-body").html("Felicitaciones");
      $('#retroModal').modal();
      break;
  }
}
// -------------------------------
//funcion de completacion de la actividad
function exitActivity(result) {
  if (slideActivityContent.allowActiveCheck) {
    if (slideActivityContent.allowActiveFinalCheck) {
      $("#retroModal").on('hidden.bs.modal', function() {
        if (result == slideActivityContent.phrases.length) {
          $('#retroModalFinal').find(".modal-title").html("Correcto - Modo Act/Pas");
          $('#retroModalFinal').find(".modal-body").html("Felicitaciones  - Modo Act/Pas");
          $("#retroModal").unbind('hidden.bs.modal');
          $('#retroModalFinal').modal();
        }
      });
    }
  } else {
    if (result == slideActivityContent.phrases.length) {
      playAudio("success")
      //$('#retroModal').find(".modal-title").html("Correcto - Modo Pasivo");
      $('#retroModal').find(".modal-body").html("<h4>¡Muy bien!</h4><p>Ha reconocido en qué consiste cada uno de los procesos presentados, importantes para dar respuesta a la educación con atención a la diversidad.</p><div class='btn-exit'><a href='#' data-dismiss='modal' class='btn btn-link btn-next float-right'></a></div>");
      $('#retroModal').modal();
      $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
    } else {
      playAudio("error")
      //$('#retroModal').find(".modal-title").html("Incorrecto - Modo Pasivo");
      $('#retroModal').find(".modal-body").html("<h4>¡Vuelva a intentarlo!</h4><p>Revise el material de estudio para identificar en qué consiste cada uno de los procesos presentados e intente resolver nuevamente la actividad.</p><div class='btn-exit'><a href='#' data-dismiss='modal' class='btn btn-link btn-next float-right'></a></div>");
      $('#retroModal').modal();
      $("#btn-resetQuestion").show();
    }
  }
}
// -------------------------------
