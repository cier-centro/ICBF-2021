var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
    <div class="col-sm-12">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) "
                    class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Educación inclusiva</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
                </div>
            </div>
        </div>

        <div class="row align-items-center justify-content-center mt-5 mb-3">
            <div class="col-sm-10 p-container">
                <p class="instruction">Selecciona la opción que corresponda en el siguiente párrafo:</p>
            </div>
        </div>

        <div class="row align-items-center mb-3">
            <div class="col-sm-10 offset-sm-1 chooseWordContainer">
                <p>La <span class="chooseWord" onClick="chooseWord(1,0)" id="p1_0">Toma de conciencia</span> / <span
                        class="chooseWord" onClick="chooseWord(1,1)" id="p1_1">Toma de decisiones</span> es un paso, un
                    acto <span class="chooseWord" onClick="chooseWord(2,0)" id="p2_0">Necesario</span> / <span
                        class="chooseWord" onClick="chooseWord(2,1)" id="p2_1">Voluntario</span>, una decisión a
                    habilitarse para
                    desarrollar <span class="chooseWord" onClick="chooseWord(3,0)" id="p3_0">Capacidades</span> / <span
                        class="chooseWord" onClick="chooseWord(3,1)" id="p3_1">oportunidades</span> que favorezcan y
                    hagan posible
                    la <span class="chooseWord" onClick="chooseWord(4,0)" id="p4_0">Relación</span> / <span
                        class="chooseWord" onClick="chooseWord(4,1)" id="p4_1">Interacción</span> y el cumplimiento de
                    la vocación personal al servicio de otros, independiente de cuáles sean
                    sus <span class="chooseWord" onClick="chooseWord(5,0)" id="p5_0">diferencias</span> / <span
                        class="chooseWord" onClick="chooseWord(5,1)" id="p5_1">contrastes</span>.</p>
            </div>
        </div>


        <div class="row mt-3">
            <div class="col-sm-10 offset-sm-1">
                <button type="button" class="btn btn-light btn-end float-right"
                    onClick="checkAnswers()">Finalizar</button>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <a href="#" onclick="currentSlide(5) " class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(7) " id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-correct-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Felicitaciones!</h4>
                <p class="modal-text">Comprendes el concepto de toma de conciencia.</p>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-incorrect-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
                <p class="modal-text">La <b>Toma de conciencia</b> es un paso, un acto <b>Voluntario</b>, una decisión a habilitarse para
                    desarrollar <b>Capacidades</b> que favorezcan y hagan posible la <b>Interacción</b> y el
                    cumplimiento de la vocación personal al servicio de otros, independiente de cuáles sean sus
                    <b>diferencias</b>.</p>
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

var totalWords = 5;
var correctAnswers = [0, 1, 0, 1, 0];
var currentAnswers = new Array(totalWords);

$(document).ready(function () {
  currentAnswers.fill(0, 0, totalWords);
  $(".btn-next").hide();
});

//#pareja y id
function chooseWord(pair, id) {
  var idWordChoosed = "#p" + pair + "_" + id;
  if (id == 0) { var idWordPair = "#p" + pair + "_" + (id + 1); }
  else { var idWordPair = "#p" + pair + "_" + (id - 1); }
  $(idWordChoosed).addClass("choosed");
  $(idWordPair).removeClass("choosed");
  currentAnswers[pair - 1] = id;
}

function checkAnswers() {
  if (equalArrays(currentAnswers, correctAnswers)) {
    $("#successAudio")[0].play();
    $("#rta-correct-1").modal();
    $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
  }else {
    $("#errorAudio")[0].play();
    $("#rta-incorrect-1").modal();
    resetActivity();
  }
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

function resetActivity() {
  currentAnswers = new Array(totalWords);
  currentAnswers.fill(0, 0, totalWords);
  $(".chooseWord").removeClass("choosed");
}