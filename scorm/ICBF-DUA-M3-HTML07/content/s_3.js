var slideTitle = "";
var slideContent =`
<div class="row info-container">
    <div class="col-sm-12">
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
        <div class="row my-3 mt-5 align-items-center">
            <div class="col-sm-10 offset-sm-1 p-container p-box mb-0">
                <p>A partir de la lectura «La Discapacidad en el espejo – Artículo 8 de la Convención», asocia los conceptos a los títulos que correspondan.</h>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-sm-10 offset-sm-1">
                <div class="card-deck row align-items-center">
                    <div class="select-card-active col-lg-6" id="card_1">
                        <div class="select-card-inner">
                            <p><b>Interseccionalidad</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_2">
                        <div class="select-card-inner">
                            <p>Espacio en donde se entrecruzan factores propios de cualquier persona, como la raza, la etnia, la religión, el nivel socioeconómico, el género, la presencia o no de discapacidad y el sexo.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_3">
                        <div class="select-card-inner">
                            <p><b>Para promover comportamientos más igualitarios se debe:</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_4">
                        <div class="select-card-inner">
                            <p>Incentivar juegos, juguetes y canciones no discriminatorios, que no segreguen ni categoricen espacios, temas, actividades
                            y roles para los niños y niñas.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_5">
                        <div class="select-card-inner">
                            <p><b>Estereotipos de género</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_6">
                        <div class="select-card-inner">
                            <p>Opiniones o prejuicios generalizados acerca de atributos o características que hombres y mujeres, niños y niñas poseen o deberían poseer y de las funciones sociales que ambos desempeñan o deberían desempeñar.</p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_7">
                        <div class="select-card-inner">
                            <p><b>Discriminación de género:</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_8">
                        <div class="select-card-inner">
                            <p>hace referencia a la negación de oportunidades y derechos o a dar un trato preferencial a las personas,
                            basado en su género.
                            </p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_7">
                        <div class="select-card-inner">
                            <p><b>Equidad de género:</b></p>
                        </div>
                    </div>
                    <div class="select-card-active col-lg-6" id="card_8">
                        <div class="select-card-inner">
                            <p>Imparcialidad en el trato que reciben mujeres y hombres de acuerdo con sus necesidades respectivas, ya sea con un trato igualitario o con uno diferenciado pero que se considera equivalente en derechos, beneficios, obligaciones y posibilidades.</p>
                        </div>
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

<div class="modal fade master-modal" tabindex="-1" role="dialog" id="findPairCardRetroModal">
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
  //---Actividad ENCONTRAR PAREJAS---
  controller: "js/activity.find-pair.js",
  //Parámetros:
  //Total Parejas
  totalCards: 8,
  //Establecer los intentos permitidos. Desactivar con: "-1"
  totalAttempts: -1,
  //Parejas correctas
  cardsPairs: [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9,10]
  ],
  //(0/1) Establecer retroalimentación para pareja correcta: "allowCheckPair" incorrecta: allowCheckPairWrong y/o al finalizar: "allowCheckEnd"
  allowCheckPair: 0,
  allowCheckPairWrong: 1,
  allowCheckEnd: 1,
  //Establecer tiempo de espera para terminar la animacion del giro, impide volter cartas continuamente
  animatingTime: 300,
  //Randomizar tarjetas
  allowRandom: true,
  //Retroalimentacion Correcto
  feedbackCorrect:['¡Felicitaciones!',''],
  //Retroalimentacion Incorrecto
  feedbackWrong:'',
  //Retroalimentacion para cada pareja correcta
  feedbackPair:[
    [' ' ,'<p></p>'],
    [' ','<p></p>'],
    [' ','<p></p>'],
    [' ','<p></p>'],
    [' ','<p></p>']
  ],
  //Retroalimentacion para cada pareja incorrecta
  feedbackPairWrong:[
    ['¡Vuelva a intentarlo!','Revisa nuevamente la lectura.'],
  ]
};

$(document).ready(function () {
  $(".btn-next").hide();
});
