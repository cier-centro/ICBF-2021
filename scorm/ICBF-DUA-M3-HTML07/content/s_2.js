var slideTitle = "";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) "
                    class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Toma de conciencia (FSC)</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
                </div>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-10 offset-lg-1 my-3 p-container p-box">
                <p class="text-center"><b>Lectura: “Creciendo en igualdad”</b></p>
                <p>Promover normas, roles y relaciones de género no discriminatorias, especialmente con los niños, niñas y adolescentes, es la clave para combatir los estereotipos de género y, por consiguiente, prevenir situaciones de desigualdad en el futuro.</p>
                <p>Los estereotipos de género son creencias que existen en todas las sociedades. Son opiniones y percepciones generalizadas acerca de atributos o características que hombres y mujeres, niños y niñas poseen o deberían poseer.</p>
                <p>Por lo tanto, se basan en nomas sociales y culturales y no en factores biológicos.</p>
                <p>Por estar basados en percepciones, los estereotipos pueden imponer obstáculos y hasta causar daño a otras personas.</p>
                <p>Al mismo tiempo, los estereotipos pueden tener un efecto negativo ya que no se basan en evidencias de competencias sino en prejuicios sobre algunos grupos de personas. Por ejemplo, se puede pensar que los varones afrodescendientes son menos inteligentes y más violentos mientras que se puede pensar que las niñas indígenas son sumisas.</p>
                <p>A pesar de ello, los estereotipos no son rígidos y pueden cambiar, lo han hecho a lo largo del tiempo.</p>
                <p>¿Por qué la igualdad de género es importante para los niños, niñas y adolescentes?</p>
                <p>Los estereotipos de género no están biológicamente arraigados a nuestro ADN, sino que se construyen y definen social, cultural e históricamente (influidos por familiares, amistades, compañeros, líderes de fe, celebridades, escuelas, clubes, hospitales y medios publicitarios).</p>
                <p>Los estereotipos no siempre son negativos, pero dado que son conjeturas que no consideran las habilidades, oportunidades y características propias de la persona, pueden ser perjudiciales.</p>
                <blockquote>
                    <cite>Tomado de: Creciendo en igualdad. Guía para madres, padres, tutores y profesorado para enfrentar los estereotipos de género y promover un trato igualitario entre niños, niñas y adolescentes. Unicef, 2019. Pag. 2- 5. <a href="https://www.unicef.org/chile/media/3076/file/lacro-igualdad.pdf" target="_blank">https://www.unicef.org/chile/media/3076/file/lacro-igualdad.pdf</a></cite>
                </blockquote>
                <p class="instruction">
                    <b>A partir de la lectura anterior responda:</b>
                </p>
            </div>
            <div class="col-lg-10 offset-lg-1">
                <div class="row answers-buttons">
                    <div class="col-sm-12">
                        <div class="btn btn-light-title square-left">
                            <div class="option-title mx-3 my-2 true">
                                V
                            </div>
                            <div class="option-title mr-4 my-2 false">
                                F
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12" id="g_1">
                        <button type="button" class="btn btn-light square-left">
                            <p class="answer-text">
                                Los estereotipos basados en percepciones erróneas que justifican la discriminación de género, entorpecen la habilidad de las personas de expresarse, limitando sus elecciones y oportunidades.
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
                            <p class="answer-text">
                                Los estereotipos de género fomentan la igualdad.
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
                            <p class="answer-text">
                                Los estereotipos y las discriminaciones de género son perjudiciales para las sociedades porque atentan contra los derechos humanos.
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
                            <p class="answer-text">
                                Sólo las niñas y las mujeres sienten los efectos de los estereotipos de género. No es cierto que hay una enorme presión sobre los hombres y los niños para que actúen y se ajusten a roles específicos que los restringen también; como las expectativas de que los hombres y los niños no
                                muestren ciertas emociones.
                            </p>
                            <div class="answer-sign true">
                                <div class="circle"></div>
                            </div>
                            <div class="answer-sign mx-3 my-2 false">
                                <div class="circle"></div>
                            </div>
                        </button>
                    </div>
                    <div class="col-sm-12" id="g_5">
                        <button type="button" class="btn btn-light square-left">
                            <p class="answer-text">
                                La familia, la comunidad y la sociedad, tienen la responsabilidad de crear un ambiente favorable y crear modelos que promuevan la igualdad.
                            </p>
                            <div class="answer-sign  true">
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
                    Finalizar
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(1)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(3)" id="btnNext" class="btn btn-link btn-next float-right"></a>
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
                <p>Revisa nuevamente la lectura.</p>
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

var totalQuestions = 5;
var currentAnswers = new Array(totalQuestions);
var correctAnswers = ["V", "F", "V", "F", "V"];

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

  $("#g_5").find(".true").click(function () {
    changeClass($("#g_5  .true").find(".circle"), "incorrect", "correct");
    $("#g_5  .false").find(".circle").removeClass("correct");
    currentAnswers[4] = "V";
  });

  $("#g_5").find(".false").click(function () {
    changeClass($("#g_5 .false").find(".circle"), "incorrect", "correct");
    $("#g_5 .true").find(".circle").removeClass("correct");
    currentAnswers[4] = "F";
  });
}

function changeClass (element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}

function setCompletedActivityFunction() {

  $(".master-modal").unbind();
  $(".master-modal").on('hidden.bs.modal', function () {
    showNextButton();
  });
}

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

function showNextButton() {
  if (finishedActivity) {
    $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
  }
}
